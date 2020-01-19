import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Card from 'components/Card/Card.js'
import CardBody from 'components/Card/CardBody.js'
import CardHeader from 'components/Card/CardHeader.js'
import CardFooter from 'components/Card/CardFooter.js'
import PropTypes from 'prop-types'

import RestaurantMenuItem from './RestaurantMenuItem'

RestaurantList.propTypes = {
  restaurants: PropTypes.array,
  actions: PropTypes.object
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // height: '100vh',
    overflow: 'auto'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  card: {
    paddingLeft: 10,
    paddingRight: 10
  }
}))

export default function RestaurantList(props) {
  const classes = useStyles();
  const { restaurants } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth='lg' className={classes.container}>
          <Card className={classes.card}>
            <CardHeader color='primary' className={classes.cardHeader}>
              <h2>Menu</h2>
            </CardHeader>
            <CardBody>
              <p>
                See the restaurant menu or call the restaurant directly.
              </p>
            </CardBody>
            <CardFooter className={classes.cardFooter} />
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12}>
                  <List>
                    {restaurants.length === 0 && <p />}
                    {restaurants.map(restaurant => (
                      <RestaurantMenuItem
                        key={restaurant._id.toString()}
                        name={restaurant.name}
                        phone={restaurant.contact.telephone}
                        menu={restaurant.menu}
                      />
                    ))}
                  </List>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  {/* <Orders /> */}
                </Paper>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </main>
    </div>
  )
}
