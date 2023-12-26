import axios from "axios";
import { getCookie } from "cookies-next";
// calculate Time Left
export function calculateDaysLeft(expirationDate) {
  // Convert the expirationDate string to a Date object
  const expirationDateTime = new Date(expirationDate);

  // Get the current date and time
  const currentDateTime = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = expirationDateTime - currentDateTime;

  // Convert the time difference to days
  const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

  // Return the number of days left
  return `${days} Day${days !== 1 ? "s" : ""} left`;
}

const axiosInstance = axios.create();
const TOKEN_KEY = "token";

axiosInstance.interceptors.request.use((request) => {
  const token = getCookie(TOKEN_KEY);
  console.log(token);
  if (request.headers) {
    request.headers["Authorization"] = `Bearer ${token}`;
  } else {
    request.headers = {
      Authorization: `Bearer ${token}`,
    };
  }
  return request;
});
export default axiosInstance;

// Get local date
export const getLocalDate = (date) => {
  date = new Date(date);
  date.setHours(date.getHours() + 1);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Month is zero-based, so we add 1
  const day = date.getDate();

  // Format the date in "DD-MM-YYYY" format
  const newDate =
    day.toString().padStart(2, "0") +
    "-" +
    month.toString().padStart(2, "0") +
    "-" +
    year.toString();

  // Extract time components
  let hour = date.getHours();
  const minutes = date.getMinutes();

  // Format the time in "HH:mm" format with leading zeros
  const time =
    hour.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0");
  return {
    newDate,
    time,
  };
};
