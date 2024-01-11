type PageControllProps = {
  currentPage: number;
  totalNumPages: number;
  setPage: (index: number) => void;
};

const pageItemActive =
  "cursor-pointer block h-8 w-8 rounded border-emerald-600 bg-emerald-500 text-center leading-8 text-white";
const pageItem =
  "cursor-pointer block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900";

export function PageControll({
  currentPage,
  totalNumPages,
  setPage,
}: PageControllProps) {
  const handlePageClick = (page: number) => {
    setPage(page);
  };

  const handleNextClick = () => {
    setPage(currentPage + 1);
  };

  const handleBackClick = () => {
    setPage(currentPage - 1);
  };

  
  const renderPageNumbers = () => {
    const pages = [];
    let lowerLimit = currentPage - 2;
    let upperLimit = currentPage + 2;

    if (currentPage - 1 <= 2) {
      upperLimit = 5;
    }
    if (totalNumPages - currentPage <= 2) {
      lowerLimit = totalNumPages - 5;
    }

    for (let i = lowerLimit; i <= upperLimit; i++) {
      if (i >= 1 && i <= totalNumPages) {
        pages.push(
          <li key={i} onClick={() => handlePageClick(i - 1)}>
            <div className={i - 1 === currentPage ? pageItemActive : pageItem}>
              {i}
            </div>
          </li>
        );
      }
    }

    if (lowerLimit > 1) {
      pages.unshift(
        <li key="start-ellipsis" className="w-8 h-8 leading-8 text-center">
          ...
        </li>
      );
      pages.unshift(
        <li key={1} onClick={() => handlePageClick(0)}>
          <div className={pageItem}>{1}</div>
        </li>
      );
    }

    if (upperLimit < totalNumPages) {
      pages.push(
        <li key="end-ellipsis" className="w-8 h-8 leading-8 text-center">
          ...
        </li>
      );
      pages.push(
        <li key={totalNumPages} onClick={() => handlePageClick(totalNumPages - 1)}>
          <div className={pageItem}>{totalNumPages}</div>
        </li>
      );
    }

    return pages;
  };

  return (
    <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
      <ol className="flex justify-center gap-1 text-xs font-medium">
        <li onClick={handleBackClick}>
          <div className="cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180">
            <span className="sr-only">Prev Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </li>

        {renderPageNumbers()}


        <li onClick={handleNextClick}>
          <div className="cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180">
            <span className="sr-only">Next Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </li>
      </ol>
    </div>
  );
}
