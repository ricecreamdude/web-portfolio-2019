import React from 'react';
import MenuItem from './MenuItem';
import styles from './Header.module.css';
import SocialBar from './SocialBar';

class Header extends React.Component{

  state = {
    menuItems: [
      {label: 'home'},
      {label: 'about me'},
      {label: 'projects'},
      {label: 'contact'},
    ]
  }
  render(){

    let menu = (
      <div>
        {this.state.menuItems.map( menuItem => {
          return <MenuItem label={menuItem.label.toUpperCase()} />
        })}
      </div>
    )

    return (
      <div className={styles.header}>
        {menu}
        <SocialBar />
      </div>
    )
  }

}

export default Header;