import React from "react";

export default function Paginado({
  cardPerPage,
  totalCards,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex justify-center bg-teal-700">
      <div className="join bg-teal-700">
        {pageNumbers &&
          pageNumbers.map((p) =>
            p === currentPage ? (
              
                <button className="join-item btn" onClick={() => paginate(p)}>{p}</button>
              
            ) : (
              
                <button className="join-item btn" onClick={() => paginate(p)}>{p}</button>
             
            )
          )}
          </div>
    </div>
  );
}