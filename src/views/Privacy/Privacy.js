import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// nodejs library that concatenates classes
import classNames from 'classnames'
import Link from '@material-ui/core/Link'
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Parallax from 'components/Parallax/Parallax.js'

import styles from 'assets/jss/material-kit-react/views/profilePage.js'
import profile from 'assets/img/icons8_section_96px.png'
const useStyles = makeStyles(styles)

export default function Privacy () {
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
                    <h2>Privacy policy</h2>
                  </div>
                </div>
                <div>
                  <p>Personal data (usually referred to just as "data" below) will only be processed by us to the extent necessary and for the purpose of providing a functional and user-friendly website, including its contents, and the services offered there.</p>
                  <p>Per Art. 4 No. 1 of Regulation (EU) 2016/679, i.e. the General Data Protection Regulation (hereinafter referred to as the "GDPR"), "processing" refers to any operation or set of operations such as collection, recording, organization, structuring, storage, adaptation, alteration, retrieval, consultation, use, disclosure by transmission, dissemination, or otherwise making available, alignment, or combination, restriction, erasure, or destruction performed on personal data, whether by automated means or not.</p>
                  <p>The following privacy policy is intended to inform you in particular about the type, scope, purpose, duration, and legal basis for the processing of such data either under our own control or in conjunction with others. We also inform you below about the third-party components we use to optimize our website and improve the user experience which may result in said third parties also processing data they collect and control.</p>
                  <p>Our privacy policy is structured as follows:</p>
                  <p>I. Information about us as controllers of your data<br />II. The rights of users and data subjects<br />III. Information about the data processing</p>
                  <h3>I. Information about us as controllers of your data</h3>
                  <p>The party responsible for this website (the "controller") for purposes of data protection law is:</p>
                  <p>Andreas Pieger<br />Liesenfelder Str. 2<br />56281 Emmelshausen<br />Germany</p>
                  <p>Telephone: 06747/950441<br />Email: <Link href='mailto:ifood@vantero.de'>ifood@vantero.de</Link></p>
                  <h3>II. The rights of users and data subjects</h3>
                  <p>With regard to the data processing to be described in more detail below, users and data subjects have the right</p>
                  <ul type='disc'>
                    <li>to confirmation of whether data concerning them is being processed, information about the data being processed, further information about the nature of the data processing, and copies of the data (cf. also Art. 15 GDPR);</li>
                    <li>to correct or complete incorrect or incomplete data (cf. also Art. 16 GDPR);</li>
                    <li>to the immediate deletion of data concerning them (cf. also Art. 17 DSGVO), or, alternatively, if further processing is necessary as stipulated in Art. 17 Para. 3 GDPR, to restrict said processing per Art. 18 GDPR;</li>
                    <li>to receive copies of the data concerning them and/or provided by them and to have the same transmitted to other providers/controllers (cf. also Art. 20 GDPR);</li>
                    <li>to file complaints with the supervisory authority if they believe that data concerning them is being processed by the controller in breach of data protection provisions (see also Art. 77 GDPR).</li>
                  </ul>
                  <p>In addition, the controller is obliged to inform all recipients to whom it discloses data of any such corrections, deletions, or restrictions placed on processing the same per Art. 16, 17 Para. 1, 18 GDPR. However, this obligation does not apply if such notification is impossible or involves a disproportionate effort. Nevertheless, users have a right to information about these recipients.</p>
                  <p><strong>Likewise, under Art. 21 GDPR, users and data subjects have the right to object to the controller's future processing of their data pursuant to Art. 6 Para. 1 lit. f) GDPR. In particular, an objection to data processing for the purpose of direct advertising is permissible.</strong></p>
                  <h3>III. Information about the data processing</h3>
                  <p>Your data processed when using our website will be deleted or blocked as soon as the purpose for its storage ceases to apply, provided the deletion of the same is not in breach of any statutory storage obligations or unless otherwise stipulated below.</p>

                  <h4>Cookies</h4>
                  <h5>a) Session cookies</h5>
                  <p>We use cookies on our website. Cookies are small text files or other storage technologies stored on your computer by your browser. These cookies process certain specific information about you, such as your browser, location data, or IP address. &nbsp;</p>
                  <p>This processing makes our website more user-friendly, efficient, and secure, allowing us, for example, to display our website in different languages or to offer a shopping cart function.</p>
                  <p>The legal basis for such processing is Art. 6 Para. 1 lit. b) GDPR, insofar as these cookies are used to collect data to initiate or process contractual relationships.</p>
                  <p>If the processing does not serve to initiate or process a contract, our legitimate interest lies in improving the functionality of our website. The legal basis is then Art. 6 Para. 1 lit. f) GDPR.</p>
                  <p>When you close your browser, these session cookies are deleted.</p>
                  <h5>b) Third-party cookies</h5>
                  <p>If necessary, our website may also use cookies from companies with whom we cooperate for the purpose of advertising, analyzing, or improving the features of our website.</p>
                  <p>Please refer to the following information for details, in particular for the legal basis and purpose of such third-party collection and processing of data collected through cookies.</p>
                  <h5>c) Disabling cookies</h5>
                  <p>You can refuse the use of cookies by changing the settings on your browser. Likewise, you can use the browser to delete cookies that have already been stored. However, the steps and measures required vary, depending on the browser you use. If you have any questions, please use the help function or consult the documentation for your browser or contact its maker for support. Browser settings cannot prevent so-called flash cookies from being set. Instead, you will need to change the setting of your Flash player. The steps and measures required for this also depend on the Flash player you are using. If you have any questions, please use the help function or consult the documentation for your Flash player or contact its maker for support.</p>
                  <p>If you prevent or restrict the installation of cookies, not all of the functions on our site may be fully usable.</p>

                  <h4>Customer account/registration</h4>
                  <p>If you create a customer account with us via our website, we will use the data you entered during registration (e.g. your name, your address, or your email address) exclusively for services leading up to your potential placement of an order or entering some other contractual relationship with us, to fulfill such orders or contracts, and to provide customer care (e.g. to provide you with an overview of your previous orders or to be able to offer you a wishlist function). We also store your IP address and the date and time of your registration. This data will not be transferred to third parties.</p>
                  <p>During the registration process, your consent will be obtained for this processing of your data, with reference made to this privacy policy. The data collected by us will be used exclusively to provide your customer account.&nbsp;</p>
                  <p>If you give your consent to this processing, Art. 6 Para. 1 lit. a) GDPR is the legal basis for this processing.</p>
                  <p>If the opening of the customer account is also intended to lead to the initiation of a contractual relationship with us or to fulfill an existing contract with us, the legal basis for this processing is also Art. 6 Para. 1 lit. b) GDPR.</p>
                  <p>You may revoke your prior consent to the processing of your personal data at any time under Art. 7 Para. 3 GDPR with future effect. All you have to do is inform us that you are revoking your consent.</p>
                  <p>The data previously collected will then be deleted as soon as processing is no longer necessary. However, we must observe any retention periods required under tax and commercial law.</p>

                  <h4>Google Fonts</h4>
                  <p>Our website uses Google Fonts to display external fonts. This is a service provided by Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland (hereinafter: Google).</p>
                  <p>Through certification according to the EU-US Privacy Shield</p>
                  <p><Link href='https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active' target='_blank' rel='noopener'>https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active</Link></p>
                  <p>Google guarantees that it will follow the EU's data protection regulations when processing data in the United States.</p>
                  <p>To enable the display of certain fonts on our website, a connection to the Google server in the USA is established whenever our website is accessed.</p>
                  <p>The legal basis is Art. 6 Para. 1 lit. f) GDPR. Our legitimate interest lies in the optimization and economic operation of our site.</p>
                  <p>When you access our site, a connection to Google is established from which Google can identify the site from which your request has been sent and to which IP address the fonts are being transmitted for display.</p>
                  <p>Google offers detailed information at</p>
                  <p><Link href='https://adssettings.google.com/authenticated' target='_blank' rel='noopener'>https://adssettings.google.com/authenticated</Link></p>
                  <p><Link href='https://policies.google.com/privacy' target='_blank' rel='noopener'>https://policies.google.com/privacy</Link></p>
                  <p>in particular on options for preventing the use of data.</p>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
