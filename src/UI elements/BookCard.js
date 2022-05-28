import { React, useState } from "react";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

export default function BookCard(props) {
  const [wasAdded, setWasAdded] = useState(false);

  // mapping throught the updated favs array for the identifier and setting state of the heart icons
  const handleHeartClick = () => {
    const getBookmarks = props.onFav(props.identifier, props.title);
    setWasAdded(
      getBookmarks
        .map((bookmark) => bookmark.identifier)
        .includes(props.identifier)
    );
  };

  // if the card isnt rendered yet, display nothing
  if (!props.title) {
    return <></>;
  }

  return (
    <div>
      <div className="cards">
        <div className="card-contents">
          <h1>Author: {props.author}</h1>
          <p>Title: {props.title}</p>
          <p>Publisher: {props.publisher}</p>
          {/* displaying the heart icons depending on the identifier in the array */}
          {wasAdded ? (
            <IoIosHeart onClick={handleHeartClick} style={{ color: "red" }} />
          ) : (
            <IoIosHeartEmpty
              onClick={handleHeartClick}
              style={{ color: "grey" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
