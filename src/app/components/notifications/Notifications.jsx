"use client";
import Image from "next/image";
import "./Notifications.css";
import singleNotIcon from "./single-not-icon.svg";
import { useLocale } from "next-intl";
import axiosInstance, { getLocalDate } from "@/utils/utils";
import { baseUrl } from "@/utils/constants";
import { useEffect, useState } from "react";
import Loader from "../loader/Loader";

const Notifications = () => {
  const locale = useLocale();
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [notificationIds, setNotificationIds] = useState([]);

  // Get notifications
  const getNotifications = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(
        `${baseUrl}/auth/student/notifications`,
      );
      console.log("notifications", response);
      setNotifications(response.data?.data);
      setNotificationIds(response.data?.data?.map((n) => n.id));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log("error", error);
    }
  };

  // Mark notification as read
  const markAsRead = async () => {
    try {
      const response = await axiosInstance.post(
        `${baseUrl}/auth/student/notifications/read`,
        { ids: notificationIds },
      );
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getNotifications();
  }, []);

  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  return (
    <div className={locale === "ar" ? "notifications ar" : "notifications"}>
      <div className="notifications-title">
        <p className="title">Notifications</p>
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <p className="error">Error loading notifications</p>
        ) : null}
        <p className="as-read hover" onClick={() => markAsRead()}>
          Mark all as read
        </p>
      </div>
      {notifications?.map((notification) => {
        const { data, type, id, created_at } = notification || {};
        const { message } = data || {};
        let createdAt = created_at;
        let dateObj = new Date(createdAt);
        const { time } = getLocalDate(createdAt);
        const isToday = dateObj.toDateString() === today.toDateString();
        const isYesterday = dateObj.toDateString() === yesterday.toDateString();
        let dateDisplay;
        if (isToday) {
          dateDisplay = `Today ${time}`;
        } else if (isYesterday) {
          dateDisplay = `Yesterday ${time}`;
        } else {
          dateDisplay = `${dateObj.getDate()}/${
            dateObj.getMonth() + 1
          }/${dateObj.getFullYear()} à ${time}`;
        }
        return (
          <div className="single-not" key={id}>
            <Image
              src={singleNotIcon}
              alt="single-not-icon"
              width={50}
              height={50}
            />
            <div className="single-not-details">
              <p className="not-title">{type}</p>
              <p className="not-text">{message}</p>
              <p className="time">{dateDisplay}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Notifications;
