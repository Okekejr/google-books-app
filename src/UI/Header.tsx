import React, { useState } from "react";
import BookmarkList from "./BookmarkList";

export default function Header() {
  const [show, setShow] = useState(false);
  return (
    <div>
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
                  <div className="btn-wid">
                    <i className="fa-solid fa-bookmark"></i>
                    <span>Bookmarks</span>
                  </div>
                </button>
              </li>
            </ul>
          </nav>
        </header>
        {show && <BookmarkList />}
      </div>
    </div>
  );
}
