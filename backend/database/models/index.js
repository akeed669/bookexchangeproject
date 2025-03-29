import User from "./User.js";
import Book from "./Book.js";

// Define the associations after both models are imported
User.hasMany(Book, { foreignKey: "userId" });
Book.belongsTo(User, { foreignKey: "userId" });

export { User, Book };
