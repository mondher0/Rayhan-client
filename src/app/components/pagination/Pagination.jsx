import Link from "next/link";
import "./Pagination.css";

const Pagination = ({ currentPage, url }) => {
  console.log("------------------ current page ------------------");
  console.log(currentPage);
  currentPage = parseInt(currentPage);
  console.log("------------------ url page ------------------");
  console.log(url);
  return (
    <div className="pagination">
      <Link
        href={
          currentPage > 1
            ? `${url}?page=${currentPage - 1}`
            : `${url}?page=${currentPage}`
        }
        className="pre-next"
      >
        Previous
      </Link>
      <Link
        href={`${url}?page=1`}
        className={currentPage === 1 ? "number active" : "number"}
      >
        1
      </Link>
      <Link
        href={`${url}?page=2`}
        className={currentPage === 2 ? "number active" : "number"}
      >
        2
      </Link>
      <Link
        href={`${url}?page=3`}
        className={currentPage === 3 ? "number active" : "number"}
      >
        3
      </Link>
      <Link
        href={`${url}?page=4`}
        className={currentPage === 4 ? "number active" : "number"}
      >
        4
      </Link>
      <Link
        href={`${url}?page=5`}
        className={currentPage === 5 ? "number active" : "number"}
      >
        5
      </Link>
      <Link
        href={
          currentPage < 5
            ? `${url}?page=${currentPage + 1}`
            : `${url}?page=${currentPage}`
        }
        className="pre-next"
      >
        Next
      </Link>
    </div>
  );
};

export default Pagination;
