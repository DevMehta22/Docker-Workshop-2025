import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateBook = () => {
  const [book_name, setbook_name] = useState("");
  const [book_author, setbook_author] = useState("");
  const [book_price, setbook_price] = useState();
  const [date_of_issue, setdate_of_issue] = useState();
  const [error, seterror] = useState("");
  const [msg, setmsg] = useState("");

  const { id } = useParams();
  const handleSubmit = async () => {
    try {
      const UpdatedBook = { book_name, book_author, book_price, date_of_issue };
      const response = await axios.put(
        `http://localhost:4000/api/book/UpdateBook/${id}`,
        UpdatedBook,
        { withCredentials: true }
      );

      setbook_name("");
      setbook_author("");
      setbook_price();
      setdate_of_issue();
      setmsg("Book Updated Successfully!");
      setTimeout(() => {
        setmsg("");
      }, 2000);
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  const getSingleBook = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/book/getSingleBook/${id}`,
        { withCredentials: true }
      );
      const a = response.data.GetOneBook;
      setbook_name(a[0].book_name);
      setbook_author(a[0].book_author);
      setbook_price(a[0].book_price);
    } catch (error) {
      seterror("Error fetching book details: " + error.message);
    }
  };
  useEffect(() => {
    getSingleBook();
  }, []);

  return (
    <div className="container my-3">
      <h1 style={{ fontFamily: "cursive", color: "whitesmoke" }}>
        <center>Edit Book details</center>
      </h1>
      {error && <div className="alert alert-danger">{error}</div>}
      {msg && <div className="alert alert-success">{msg}</div>}
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          #
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Book-Name"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={book_name}
          onChange={(e) => {
            setbook_name(e.target.value);
          }}
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Mr/Miss
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Author-Name"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={book_author}
          onChange={(e) => {
            setbook_author(e.target.value);
          }}
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">Rs</span>
        <input
          type="text"
          className="form-control"
          aria-label="Amount (to the nearest ruppee)"
          value={book_price}
          onChange={(e) => {
            setbook_price(e.target.value);
          }}
        />
        <span className="input-group-text">.00</span>
      </div>

      <div className="container my-3">
        <label
          style={{
            backgroundColor: "lightgray",
            borderRadius: "4px",
            padding: "3px",
          }}
        >
          Date-of-issue:
          <input
            type="date"
            value={date_of_issue}
            onChange={(e) => {
              setdate_of_issue(e.target.value);
            }}
          />
        </label>
      </div>
      <center>
        <button
          type="submit"
          className="btn btn-success"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </center>
    </div>
  );
};

export default UpdateBook;
