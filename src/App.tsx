import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { useFetchBreedsQuery } from "./features/dogs/dogsApiSlice";
import { incremented, amountAdded } from "./features/counter/counterSlice";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const [numDogs, setNumDogs] = useState(10);
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

  function handleClick() {
    dispatch(amountAdded(5));
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={handleClick}>count is: {count}</button>
        </p>
        
        <div>
          <p>Dogs to fetch:</p>
          <select value={numDogs} onChange={(e) => setNumDogs(Number(e.target.value))}>
            <option value="5">5</option> 
            <option value="10">10</option> 
            <option value="15">15</option> 
            <option value="20">20</option> 
          </select>
        </div>
        <div>
          <p>Number of dogs fetch is: {data.length}</p>
          {/* {data ? data.map((breed) => {
            <h3 key={breed.id}>{breed.name}</h3>
          }) : <p>No data</p>} */}
          <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {data.map((breed) => (
              <tr key={breed.id}>
                <td>{breed.name}</td>
                <td>
                  <img src={breed.image.url} alt={breed.name} height={250} />
                </td>
              </tr>
            ))};
          </tbody>
        </table>
        </div>
       
        {/* <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p> */}
      </header>
    </div>
  );
}

export default App;
