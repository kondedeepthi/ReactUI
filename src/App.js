import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import BookMovie from './main/webapp/app/modules/featuredMovies/BookMovie';

const App = props => {

  return (
    <>
      < Router >
        <div className="App">
          <BookMovie />
        </div>
      </Router>
    </>
  );
};

export default App;
