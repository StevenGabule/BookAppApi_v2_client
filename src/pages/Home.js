import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookService from "../api/books";
import "../App.css";

export default function Home() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function fetchBooks() {
      const { data } = await BookService.getBooks();
      setBooks(data.data);
    }
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>All the books</h2>
      <div className="row row-cols-1 row-cols-md-4">
        {books.map(({ id, title, description, price, User }) => (
          <div className="col mb-4" key={id}>
            <div className="card" style={{ height: 277 }}>
              <div className="card-body">
                <h5 className="card-title text-capitalize">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted  text-capitalize">
                  {price}
                </h6>
                <p className="card-text format-text">{description}</p>
                <Link className="card-link  text-capitalize">{User.name}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
