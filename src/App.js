import logo from './logo.svg';
import './App.css';
import Review from './Review';

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Reviews</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Review></Review>
    </main>
  );
}

export default App;
