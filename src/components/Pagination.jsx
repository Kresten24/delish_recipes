import { useState } from "react";
import Card from "./Card";
import "./Paginaton.css";

const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(5);

  // Calculate the index of the last card on the current page
  const indexOfLastCard = currentPage * cardsPerPage;

  // Calculate the index of the first card on the current page
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  // Get the cards for the current page
  const currentCards = props.searchResults.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(props.searchResults.length / cardsPerPage);

  // Create an array of page numbers to display in the pagination
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Card currentCards={currentCards} />
      <ul>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <button onClick={() => handlePageClick(pageNumber)}>
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Pagination;
