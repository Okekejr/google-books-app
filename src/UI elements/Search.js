import React, { useState } from "react";
import BooksList from "./BooksList";

export default function Search() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const request = async function (search) {
    try {
      const APIKEY = "AIzaSyAhiycyDI_uTu12NOz6cm67DH8SSGb9HSo";
      // using fetch method to get query to the API
      const files = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${APIKEY}`
      );
      // converting request to json
      const bookFile = await files.json();

      // filtering the data to only 5 items
      setData(
        bookFile.items.filter((book, i) => {
          if (i <= 4) {
            return book;
          }
          return false;
        })
      );

      // catching and displaying error gotten from the API search as a prompt
      if (!files.ok) throw new Error(`${bookFile.error.message}`);
    } catch (error) {
      alert(error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    request(search);
  };

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div>
        <form onSubmit={submitHandler} className="search">
          <input
            className="input-form"
            type="text"
            value={search}
            placeholder="Search for any book..."
            onChange={onChangeHandler}
          />
        </form>
      </div>
      <BooksList books={data} />
    </div>
  );
}
