import React, { useState } from "react";
import axios from "axios";

const CreateBook = () => {
  const [book_name, setbook_name] = useState("");
  const [book_author, setbook_author] = useState("");
  const [book_price, setbook_price] = useState();
  const [date_of_issue, setdate_of_issue] = useState();
  const [error, seterror] = useState("");
  const [msg, setmsg] = useState("");

  const handleSubmit = async () => {
    try {
      const AddBook = { book_name, book_author, book_price, date_of_issue };
      const response = await axios.post(
        "http://localhost:4000/api/book/addBook",
        AddBook,
        { withCredentials: true }
      );

      setbook_name("");
      setbook_author("");
      setbook_price();
      setdate_of_issue();
      setmsg("Book Added Successfully!");
      setTimeout(() => {
        setmsg("");
      }, 2000);
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  return (
    <div className="container my-5">
      <h1
        style={{
          fontFamily: "cursive",
          color: "white",
          textShadow: "0px 5px 10px aqua",
        }}
      >
        <center>Enter Book details</center>
      </h1>
      {error && <div className="alert alert-danger">{error}</div>}
      {msg && <div className="alert alert-success">{msg}</div>}
      <div className="input-group mb-3 my-4">
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

export default CreateBook;
