import "./SendReport.css";

const SendReport = () => {
  return (
    <div className="send-report">
      <h1>Send report</h1>
      <form>
        <textarea
          name="report"
          id="report"
          cols="100"
          rows="20"
          placeholder="Write your report here"
        ></textarea>
        <button type="submit" className="hover">Send</button>
      </form>
    </div>
  );
};

export default SendReport;
