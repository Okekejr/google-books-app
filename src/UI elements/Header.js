import React, { useState } from "react";

import ReadingList from "./ReadingList";

export default function Header() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <header className="header">
        <div className="flex-logo">
          <i className="fa-solid fa-book fa-xl"></i>
          Google Books by Okeke
        </div>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              {/* display bookmark list on hover and remove on exit */}
              <button
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
                className="nav__btn nav__btn--bookmarks"
              >
                <i className="fa-solid fa-bookmark"></i>
                <span>Bookmarks</span>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {show && <ReadingList />}
    </div>
  );
}
