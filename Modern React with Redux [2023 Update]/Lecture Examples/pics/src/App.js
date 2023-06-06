import SearchBar from "./components/SearchBar";

function App() {
  const handleSubmit = (term) => {
    console.log("Do a search wtih", term);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
