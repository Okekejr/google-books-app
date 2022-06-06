import React from "react";

interface Iprops {
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

const BooksList: React.FC<Iprops> = ({ ItemsEntity }) => {
  const renderList = (): JSX.Element[] => {
    return ItemsEntity.map((book, i) => {
      return (
        <div key={i} className="cards">
          <a
            href={book.volumeInfo.previewLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
            ></img>
            <div className="card-contents">
              <h1>Author: {book.volumeInfo.authors[0]}</h1>
              <p>Title: {book.volumeInfo.title} </p>
            </div>
          </a>
        </div>
      );
    });
  };

  return <div className="card-container">{renderList()}</div>;
};

export default BooksList;
