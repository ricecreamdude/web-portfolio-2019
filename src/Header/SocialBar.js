import React from 'react'


import styles from './SocialBar.module.css';

class SocialBar extends React.Component{

  render(){
    return (
      <div className={styles.socialBar}>
        <div>WHOOP</div>
        <div>BOOP</div>
        <div>SHOOP</div>
        Hi I'm a social bar
      </div>
    )
  }
}

export default SocialBar;