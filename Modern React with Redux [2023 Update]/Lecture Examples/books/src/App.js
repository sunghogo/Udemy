import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [...books, { id: 123, title }];
    setBooks(updatedBooks);
  };
  const handleBook = () => {};
  const deleteBook = () => {};

  return (
    <div>
      {books.map((e) => e.title).join(" ")}
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
