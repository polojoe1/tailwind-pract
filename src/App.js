import Filters from "./components/Filters";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div >
      <Navbar/>
      <div>
        <Header/>
      </div>
      <div>
        <div className="top">
          <Filters/>
        </div>
        <div className="bottom">
          <Hero/>
        </div>
      </div>
    </div>
  );
}

export default App;
