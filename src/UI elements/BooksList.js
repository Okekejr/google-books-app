import { React, useEffect, useState } from "react";
import BookCard from "./BookCard";

export default function BooksList(props) {
  const [favorites, setFavorites] = useState([]);

  const handleClick = (identifier, title) => {
    let updatedFavs;
    // checking for the identifier in the array if present, return the list without adding the new identifier
    if (favorites.map((item) => item.identifier).includes(identifier)) {
      updatedFavs = favorites.filter((item) => item.identifier !== identifier);
      setFavorites(updatedFavs);
      //   if identifier isnt present, add identifier and title to the current list and return new list of array
    } else if (!favorites.map((item) => item.identifier).includes(identifier)) {
      updatedFavs = [...favorites, { identifier, title }];
      setFavorites(updatedFavs);
    }
    return updatedFavs;
  };

  // useffect to store to localstorage as it changes
  useEffect(() => {
    if (favorites.length >= 1) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  return (
    <div>
      <div className="card-container">
        {/* display bookCard if available else display loading.. */}
        {!props.books
          ? "loading..."
          : props.books.map((book, i) => {
              return (
                <BookCard
                  key={i}
                  author={book.volumeInfo.authors[0]}
                  title={book.volumeInfo.title}
                  publisher={book.volumeInfo.publisher}
                  identifier={i}
                  onFav={handleClick}
                />
              );
            })}
      </div>
    </div>
  );
}
