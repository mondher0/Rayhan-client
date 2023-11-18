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
