import React, { useState } from "react";
import BooksList from "./BooksList";

interface Istate {
  ItemsEntity: {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: {
      key: number;
      title: string;
      authors: string[];
      publisher?: string | null;
      previewLink: string;
      imageLinks: {
        thumbnail: string;
      };
    };
  }[];
}

export default function Search() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<Istate["ItemsEntity"]>([]);

  const request = async (search: string) => {
    try {
      const APIKEY = "AIzaSyAhiycyDI_uTu12NOz6cm67DH8SSGb9HSo";

      // using fetch method to get query to the API and filtering to only 8 results
      const data = await fetch(
        `https://www.googleapis.com/books/v1/volumes/?q=${search}&key=${APIKEY}&maxResults=8`
      );

      // converting request to json
      const dataFiles = await data.json();
      console.log(dataFiles.items);

      // setData
      setData(dataFiles.items);

      // catching and displaying error gotten from the API search as a prompt
      if (!data.ok) throw new Error(`${dataFiles.error.message}`);
    } catch (error) {
      alert(error);
    }
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    request(search);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    setSearch(newValue);
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

      <BooksList ItemsEntity={data} />
    </div>
  );
}
