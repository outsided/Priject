import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content.jsx";
import Sidebar from "./components/Sidebar/Sidebar";

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
