import Header from "../components/Header";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";
import {Routes,Route} from "react-router-dom";
import styles from './styles.module.css';
import Basket from '../components/Sidebar/Basket';
import {useSelector} from "react-redux"
function App() {
  const {products} = useSelector(state => state.basket)
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
       <Routes>
          <Route path='/' element={<Content/>}/>
          <Route path='/Basket' element={<Basket products={products}/>}/>
       </Routes>
      </div>
    </div>
  );
}

export default App;
