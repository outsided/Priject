import './App.css';
import Header from './Header/Header'
import Content from './Content/Content.jsx'
import Sidebar from './Sidebar/Sidebar';

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
