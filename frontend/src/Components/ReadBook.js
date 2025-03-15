import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ReadBook = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/book/getBooks", { withCredentials: true });
      setBooks(response.data.GetBook);
    } catch (error) {
      setMessage({ type: "error", text: "Error fetching books: " + error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this book?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:4000/api/book/deleteBook/${id}`, { withCredentials: true });

      // Optimistically update state
      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));

      setMessage({ type: "success", text: "Book deleted successfully!" });

      // Remove success message after 3 seconds
      setTimeout(() => setMessage({ type: "", text: "" }), 3000);
    } catch (error) {
      setMessage({ type: "error", text: "Error deleting book: " + (error.response?.data?.error || error.message) });
    }
  };

  return (
    <div className="container my-3">
      <h2
        style={{
          fontFamily: "cursive",
          color: "white",
          textShadow: "0px 0px 10px aqua",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Books Available
      </h2>

      {message.text && (
        <div className={`alert ${message.type === "success" ? "alert-success" : "alert-danger"}`}>
          {message.text}
        </div>
      )}

      {loading ? (
        <p className="text-center text-light">Loading books...</p>
      ) : books.length === 0 ? (
        <p className="text-center text-light">No books available.</p>
      ) : (
        <div className="row">
          {books.map((book) => (
            <div key={book._id} className="card mx-3 my-3" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title" style={{ fontFamily: "serif", textShadow: "0px 0px 2px red" }}>
                  {book.book_name}
                </h5>
                <p className="card-text">Author: {book.book_author}</p>
                <p className="card-text">MRP: {book.book_price}</p>
                <Link to={`/${book._id}`} className="btn btn-primary mx-2">
                  Update
                </Link>
                <button className="btn btn-danger mx-2" onClick={() => handleDelete(book._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReadBook;