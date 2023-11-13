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
