"use client";
import { useTranslations } from "next-intl";
import "./SendReport.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axiosInstance from "@/utils/utils";
import { baseUrl } from "@/utils/constants";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../loader/Loader";

const SendReport = () => {
  const t = useTranslations("afterLogin");
  const [report, setReport] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axiosInstance.post(
        `${baseUrl}/student/reports/store`,
        {
          content: report,
        }
      );
      toast.success("your report has been sent successfully");
      setIsLoading(false);
      setReport("");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="send-report">
      <ToastContainer />
      <h1>{t("sendReportTitle")}</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          name="report"
          id="report"
          cols="100"
          rows="20"
          placeholder="Write your report here"
          onChange={(e) => setReport(e.target.value)}
          value={report}
        ></textarea>
        <button type="submit" className="hover">
          {isLoading ? <Loader /> : t("sendBtn")}
        </button>
      </form>
    </div>
  );
};

export default SendReport;
