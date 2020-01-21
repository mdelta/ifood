import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Parallax from 'components/Parallax/Parallax.js'

import RestaurantItem from './RestaurantItem'

import styles from 'assets/jss/material-kit-react/views/profilePage.js'
import profile from 'assets/img/icons8_section_96px.png'

const useStyles = makeStyles(styles)

const useListStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    color: 'black',
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  }
}))

RestaurantList.propTypes = {
  restaurants: PropTypes.array,
  actions: PropTypes.object
}
export default function RestaurantList (props) {
  const classes = useStyles()
  const listClasses = useListStyles()
  const imageClasses = classNames(
    // classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  )
  const styles = {
    backgroundColor: 'white'
  }
  const { restaurants } = props

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
                    <h2>Restaurants</h2>
                  </div>
                </div>
                <div className={listClasses.demo}>
                  <List>
                    {restaurants.length === 0 && <p />}
                    {restaurants.map(restaurant => (
                      <RestaurantItem
                        key={restaurant._id.toString()}
                        name={restaurant.name}
                        phone={restaurant.contact.telephone}
                      />
                    ))}
                  </List>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
