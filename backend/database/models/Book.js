import { DataTypes } from "sequelize";
import sequelize from "../../src/config/db.js";

const Book = sequelize.define("Book", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    // Foreign key for the User who created the book
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Book;
