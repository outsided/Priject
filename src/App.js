import "./App.css";
import Header from "./conponents/Header/Header";
import Content from "./conponents/Content/Content.jsx";
import Sidebar from "./conponents/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div className="Sidebar">
        <Sidebar />
      </div>
      <div className="Content">
        <Content />
      </div>
    </div>
  );
}

export default App;
