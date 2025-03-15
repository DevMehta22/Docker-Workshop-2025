const booksch = require("../model/booksch");

const BookAdd = async (req, res) => {
  const { book_name, book_price, book_author, date_of_issue } = req.body;
  try {
    const book = await booksch.create({
      book_name,
      book_price,
      book_author,
      date_of_issue,
    });
    res.status(200).json({ book });
  } catch (err) {
    console.log(err);
    res.status(500).status({ msg: err.message });
  }
};

const SingleBookGet = async (req, res) => {
  const { id } = req.params;
  try {
    const GetOneBook = await booksch.find({ _id: id });
    res.status(200).json({ GetOneBook });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err.message });
  }
};

const BookGet = async (req, res) => {
  try {
    const GetBook = await booksch.find();
    res.status(200).json({ GetBook });
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "not found" });
  }
};

const BookUpdate = async (req, res) => {
  const { id } = req.params;
  try {
    const UpdateBook = await booksch.findByIdAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );

    res.status(200).json({ UpdateBook });
  } catch {
    console.log(err);
    res.status(500).json({ msg: err.message });
  }
};

const BookDelete = async (req, res) => {
  const { id } = req.params;
  try {
    const DeleteBook = await booksch.findByIdAndDelete({ _id: id });
    if (!DeleteBook) {
      res.status(404).json({ msg: "Book Not Found" });
    }
    res.status(200).json({ msg: "Book Deleted Successfully" });
  } catch {
    console.log(err);
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  BookAdd,
  SingleBookGet,
  BookGet,
  BookUpdate,
  BookDelete,
};
