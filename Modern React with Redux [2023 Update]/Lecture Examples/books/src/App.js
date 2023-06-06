import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 99999), title },
    ];
    setBooks(updatedBooks);
  };
  const handleBook = () => {};
  const deleteBook = () => {};

  return (
    <div>
      {books.map((e) => e.id).join(" ")}
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
