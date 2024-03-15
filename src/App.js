import './App.css';
import Lists from './Lists';
import Book from './Book';
function App() {
  const books=[
    {"sr":"1","title":"IKIGAI"},
    {"sr":"2","title":"THIS IS NOT YOUR STORY"},
    {"sr":"3","title":"ATOMIC HABITS"},
    {"sr":"4","title":"THE GIRL IN ROOM NO 105"},
  ]
  return (
    <div className="App">
      {
        books.map((book)=>{
          return(
            <Book serial={book.sr} book={book.title} ></Book>
          )
        })
      }
    </div>
  );
}

export default App;
