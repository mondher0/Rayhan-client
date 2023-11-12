import Link from "next/link";
import "./Pagination.css";
import { useTranslations } from "next-intl";

const Pagination = ({ currentPage, url, totalPage }) => {
  currentPage = parseInt(currentPage);
  const t = useTranslations("afterLogin");
  totalPage = parseInt(totalPage);

  const renderPageLinks = () => {
    const links = [];
    const visiblePages = 5; // You can adjust this value to control the number of visible pages

    let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    let endPage = Math.min(totalPage, startPage + visiblePages - 1);

    // If we reach near the end, adjust the startPage and endPage accordingly
    if (endPage - startPage + 1 < visiblePages) {
      startPage = Math.max(1, endPage - visiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      links.push(
        <Link
          key={i}
          href={`${url}?page=${i}`}
          className={currentPage === i ? "number active" : "number"}
        >
          {i}
        </Link>
      );
    }

    return links;
  };

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
        {t("previous")}
      </Link>
      {renderPageLinks()}
      <Link
        href={
          currentPage < totalPage
            ? `${url}?page=${currentPage + 1}`
            : `${url}?page=${currentPage}`
        }
        className="pre-next"
      >
        {t("next")}
      </Link>
    </div>
  );
};

export default Pagination;
