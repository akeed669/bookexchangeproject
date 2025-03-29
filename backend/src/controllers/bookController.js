import { Book } from "../../database/models/index.js";

export const addBook = async (req, res) => {
  const { title, author, genre } = req.body;
  try {
    const book = await Book.create({
      title,
      author,
      genre,
      userId: req.user.id,
    });
    res.status(201).json({ message: "Book created successfully", book });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll({
      where: { userId: req.user.id }, // Match books by the authenticated user's id
    });

    if (books.length === 0) {
      return res.status(404).json({ message: "No books found for this user" });
    }
    res.status(200).json({ message: "Books retrieved successfully", books });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
