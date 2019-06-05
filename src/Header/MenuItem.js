import React from 'react';
import styles from './MenuItem.module.css';

function MenuItem(props){
  return (
    <div className={styles.menuItem}>
      <a href="#">{props.label}</a>
    </div>
  )
}

export default MenuItem;