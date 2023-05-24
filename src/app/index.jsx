import Header from "../components/Header";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";

import styles from './styles.module.css';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Content />
      </div>
    </div>
  );
}

export default App;
