# Google-books-by-Okeke

Google-books-app uses the https://developers.google.com/books/docs/overview API for its data, this data is a One-call API and its free to use, it provides a library of books from all over the world. It also provides you with interactive UI elements, book informaiton (author, title and publisher), and mobile friendly.

## Installation (for standard modern project) and run project

```bash
npm i 
```
```bash
npm start
```

## How to use?

1. Query the API through the search form field provided and hit ENTER, this produces a list of 5 books matching the query.
2. The query returns the book title, authors name, and the publisher.
3. The list of books can be bookmarked to the bookmark list through the heart icon provided, the bookmarked books are saved to localStorage and then retrived from there to the bookmark list.
4. The bookmark list is accessible at the top-right hand corner by hovering over it and it can be closed by hovering out.

## Demo

![](google.gif)

#### Live link

```
https://google-books-app.vercel.app/
```

## Stack

<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <img src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" alt="react" width="40" height="40"> <img src='https://cdn.worldvectorlogo.com/logos/typescript.svg' alt='typescript' width='40' height='40'>
