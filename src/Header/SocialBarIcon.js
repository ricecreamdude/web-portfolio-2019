import React from 'react';

import styles from './SocialBarIcon.module.css';

function SocialBarIcon (props){


  return(
      <a 
        href= {props.href}
        target="_blank"
        rel="noopener noreferrer">
          <img 
            className={styles.logo}
            src={props.img} 
            alt={props.alt}
            onMouseOver={ e => (e.currentTarget.src = props.hover) }
            onMouseOut={ e => (e.currentTarget.src = props.img) } 
          />
      </a>
  );
}


export default SocialBarIcon;