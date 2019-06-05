import React from 'react'
import SocialBarIcon from './SocialBarIcon';

import styles from './SocialBar.module.css';

import logoLinkedIn from '../images/linkedInLogo_48x48.png';
import logoLinkedInHover from '../images/linkedInLogoHover_48x48.png';
import logoGithub from '../images/gitIcon_48x48_white.png';
import logoGithubHover from '../images/gitIconHover_48x48.png';

class SocialBar extends React.Component{

  state = {
    logos: [
      {
        href: "https://www.linkedin.com/in/joshua-ho-80b6a251/",
        img: logoLinkedIn,
        hover: logoLinkedInHover,
        alt: "Link to Joshua Ho's Linked In account"
      },
      {
        href: "https://github.com/ricecreamdude",
        img: logoGithub,
        hover: logoGithubHover,
        alt: "Link to Joshua Ho's Git Hub account"
      }
    ]
  }

  render(){

    let logos = (
      <div className={styles.socialBar}>
        {this.state.logos.map( logo => {
          return <SocialBarIcon
            href={logo.href}
            img={logo.img}
            hover={logo.hover}
            alt={logo.alt}
          />
        })}
      </div>
    )

    return (
      <div>
        {logos}
      </div>
    )
  }
}

export default SocialBar;