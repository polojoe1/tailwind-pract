import Filters from "./components/Filters";
import Header from "./components/Header";
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
        <div className="bottom"></div>
      </div>
    </div>
  );
}

export default App;
