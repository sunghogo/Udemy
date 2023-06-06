import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList.";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    if (title === "") return;

    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 99999), title },
    ];
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);

    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
