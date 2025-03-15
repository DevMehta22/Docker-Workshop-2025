const express = require("express");
const {
  BookAdd,
  SingleBookGet,
  BookGet,
  BookUpdate,
  BookDelete,
} = require("../controllers/BookControllers");

const router = express.Router();

router.post("/addBook", BookAdd);
router.get("/getSingleBook/:id", SingleBookGet);
router.get("/getBooks", BookGet);
router.put("/updateBook/:id", BookUpdate);
router.delete("/deleteBook/:id", BookDelete);

module.exports = router;
