import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// nodejs library that concatenates classes
import classNames from 'classnames'
import Link from '@material-ui/core/Link'
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Parallax from 'components/Parallax/Parallax.js'

import styles from 'assets/jss/material-kit-react/views/profilePage.js'
import profile from 'assets/img/icons8_info_96px.png'
const useStyles = makeStyles(styles)

export default function Legal () {
  const classes = useStyles()
  const imageClasses = classNames(
    // classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  )
  const styles = {
    backgroundColor: 'white'
  }

  return (
    <div>
      <Parallax tiny filter image={require('assets/img/profile-bg.jpg')} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify='center'>
              <GridItem xs={12} sm={12} md={12}>
                <div className={classes.profile}>
                  <div>
                    <img style={styles} src={profile} alt='...' className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h2>Legal</h2>
                  </div>
                </div>
                <div>
                  <h3>Andreas Pieger</h3>
                  <p>Liesenfelder Str. 2<br />56281 Emmelshausen<br />06747/950441</p>
                  <p><Link color='inherit' href='mailto:ifood@vantero.de'>ifood@vantero.de</Link></p>
                  <h3>Limitation of liability for internal content</h3>
                  <p>The content of our website has been compiled with meticulous care and to the best of our knowledge. However, we cannot assume any liability for the up-to-dateness, completeness or accuracy of any of the pages.</p>
                  <p>Pursuant to section 7, para. 1 of the TMG (Telemediengesetz –  Tele Media Act by German law), we as service providers are liable for our own content on these pages in accordance with general laws. However, pursuant to sections 8 to 10 of the TMG, we as service providers are not under obligation to monitor external information provided or stored on our website. Once we have become aware of a specific infringement of the law, we will immediately remove the content in question. Any liability concerning this matter can only be assumed from the point in time at which the infringement becomes known to us.</p>
                  <h3>Limitation of liability for external links</h3>
                  <p>Our website contains links to the websites of third parties („external links“). As the content of these websites is not under our control, we cannot assume any liability for such external content. In all cases, the provider of information of the linked websites is liable for the content and accuracy of the information provided. At the point in time when the links were placed, no infringements of the law were recognisable to us. As soon as an infringement of the law becomes known to us, we will immediately remove the link in question.</p>
                  <h3>Copyright</h3>
                  <p>The content and works published on this website are governed by the copyright laws of Germany. Any duplication, processing, distribution or any form of utilisation beyond the scope of copyright law shall require the prior written consent of the author or authors in question.</p>
                  <h3>Data protection</h3>
                  <p>A visit to our website can result in the storage on our server of information about the access (date, time, page accessed). This does not represent any analysis of personal data (e.g., name, address or e-mail address). If personal data are collected, this only occurs – to the extent possible – with the prior consent of the user of the website. Any forwarding of the data to third parties without the express consent of the user shall not take place.</p>
                  <p>We would like to expressly point out that the transmission of data via the Internet (e.g., by e-mail) can offer security vulnerabilities. It is therefore impossible to safeguard the data completely against access by third parties. We cannot assume any liability for damages arising as a result of such security vulnerabilities.</p>
                  <p>The use by third parties of all published contact details for the purpose of advertising is expressly excluded. We reserve the right to take legal steps in the case of the unsolicited sending of advertising information; e.g., by means of spam mail.</p>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
