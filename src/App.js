import React from 'react';
import Header from './Header/index'
import styles from './index.css';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
          <Header/>
      </header>
    </div>
  );
}

export default App;
