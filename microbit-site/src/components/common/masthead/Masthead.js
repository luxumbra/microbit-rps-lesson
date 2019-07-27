import React from 'react';
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { Navigation } from '../Navigation';
//
import styles from '../../../styles/masthead.module.scss';

const Masthead = ({ site, data, logo, logoAlt, children }) => (
  <div className={styles.siteMast}>
    <div className={styles.siteMastLeft}>
        <Link to="/">
            {console.log(logo)}
            {site.logo ?
                <img className={styles.siteLogo} src={logo} alt={logoAlt} />
                : <Img fixed={data.file.childImageSharp.fixed} alt={logoAlt} />
            }
        </Link>
    </div>
    <div className={styles.siteMastRight}>
        <nav className={styles.siteNav}>
            {children}
        </nav>
    </div>
  </div>
)

export default Masthead;
