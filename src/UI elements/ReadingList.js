import React from "react";

export default function ReadingList() {
  // retrieving the data from localstorage using the key
  const getArray = JSON.parse(localStorage.getItem("favorites"));

  // mapping throught the data and creating template literal for numbering of the data and getting the titles
  const read = getArray.map((title, i) => `${i + 1}. ${title.title}`);

  return (
    <div>
      <div className="bookmarks">
        <ul className="bookmarks__list">
          <div className="message">
            {/* mapping through the read data and displaying the data */}
            {read.map((item) => ( 
              <p>{item}</p>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}
