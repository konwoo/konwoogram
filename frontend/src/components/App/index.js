import React, { Component } from 'react';
import styles from './style.scss';
import Footer from '../Footer';

class App extends Component {
  render() {
    return (
      <div className={styles.body}>
        <Footer/>
      </div>
    );
  }
}

export default App;
