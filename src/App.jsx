import './App.css'
import NavigationBar from './Components/NavigationBar';
import Movies from './Components/Movies';
import MovieDetails from './Components/MovieDetails';
import Wishlist from './Components/Wishlist';
import NotFound from './Components/NotFound';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './store';

function App() {

  return (
    <>
    <Provider store={store}>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <Hello/>
      <h1>Atelier 0</h1>

      <Form labelle="FirstName : " type="text" namee="FirstName" name="Firstname"/>
      <Form labelle="LastName : "/>
      <div className="App">
      <ComponentClass />
     </div>
     <div className="App">
      <ComponentFonct />
     </div>
     <div className="App">
      <ComponentEffect />
     </div>
     <div className="App">
      <ComponentTimer />
     </div>

     <h1>Exercice 1</h1>
     <div className="App">
      <Counter />
     </div>

     <h1>Exercice 2</h1>
     <div className="App">
      <ListManager />
     </div>

     <h1>Exercice 3</h1>
     <div className="App">
      <ColorBox />
     </div>

     <h1>Exercice 4</h1>
     <div className="App">
      <NoteManager />
     </div>

     <h1>Exercice 5</h1>
     <div className="App">
      <TodoList />
     </div>
     <h1>Atelier Composant Fonctionnels</h1>
     <div className="App">
      <h1 className="text-center my-4">Event Management System</h1>
      <Events/>
    </div> */}


    {/*<h1>Exercice Product</h1>
     <div className="App">
      <h1 className="text-center my-4">Product</h1>
      <Products/>
    </div>*/}



    </>
  )
}

export default App