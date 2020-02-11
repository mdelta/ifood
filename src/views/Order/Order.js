import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Material UI components
import { withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Card from 'components/Card/Card.js'
import CardBody from 'components/Card/CardBody.js'
import CardHeader from 'components/Card/CardHeader.js'
import CardFooter from 'components/Card/CardFooter.js'

import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Switch from '@material-ui/core/Switch'
import Slider from '@material-ui/core/Slider'
import Button from '@material-ui/core/Button'

import SendIcon from '@material-ui/icons/Send'

const styles = theme => ({
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
  },
  textField: {
    width: 500
  },
  fullWidth: {
    width: '100%'
  },
  sliderWidth: {
    width: '80%',
    marginLeft: 50
  }
})

const marks = [
  {
    value: 0,
    label: 'small'
  },
  {
    value: 1,
    label: 'normal'
  },
  {
    value: 2,
    label: 'big'
  }
]

class Order extends Component {
  constructor (props) {
    super(props)

    this.state = {
      menu: '',
      value: 'male',
      restaurant: '',
      qty: 1,
      inRestaurant: false
    }
  }

  handleChange (ev) {
    this.setState({
      menu: ev.target.value
    })
  };

  handleChange2 (ev) {
    this.setState({
      restaurant: ev.target.value
    })
  };

  handleChangeQuantity (ev) {
    this.setState({
      qty: ev.target.value
    })
  };

  handleChangeLocation (ev) {
    this.setState({
      inRestaurant: ev.target.checked
    })
  };

  valuetext (value) {
    return `${value}°C`
  }

  render () {
    const { classes, restaurantList } = this.props

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
              <CardBody />
              <FormControl component='fieldset' className={classes.formControl}>
                <Grid container spacing={3}>
                  {/* Restaurant input selection */}
                  <Grid item xs={9}>
                    <TextField
                      className={classes.fullWidth}
                      required
                      select
                      id='restaurant'
                      label='Restaurant'
                      variant='filled'
                      value={this.state.restaurant}
                      onChange={(ev) => this.handleChange2(ev)}
                    >
                      <MenuItem value=''>
                        <em>None</em>
                      </MenuItem>
                      {restaurantList.map((restaurant) => <MenuItem key={restaurant._id.id} value={restaurant.name}>{restaurant.name}</MenuItem>)}
                    </TextField>
                  </Grid>
                  <Grid item xs={3}>
                    <FormControlLabel
                      control={
                        <Switch checked={this.state.inRestaurant} onChange={(ev) => this.handleChangeLocation(ev)} value='inRestaurant' color='primary' />
                      }
                      label='At the restaurant'
                    />
                  </Grid>
                  {/* Menu and Size */}
                  {/* {className={clsx(classes.margin, classes.textField)}} */}
                  <Grid item xs={9}>
                    <TextField
                      className={classes.fullWidth}
                      required
                      error
                      id='menu'
                      label='Menu'
                      variant='filled'
                      placeholder='Enter the menu number or name such as Pizza Hawaii'
                      onChange={(ev) => this.handleChange(ev)}
                      inputProps={{
                        maxlength: 40
                      }}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      className={classes.fullWidth}
                      required
                      id='qty'
                      label='Quantity'
                      variant='filled'
                      type='number'
                      value={this.state.qty}
                      inputProps={{
                        step: 1, min: 1
                      }}
                      onChange={(ev) => this.handleChangeQuantity(ev)}
                    />
                  </Grid>
                  {/* Notes */}
                  <Grid item xs={12} md={12} lg={12}>
                    <TextField
                      className={classes.fullWidth}
                      id='notes'
                      label='Notes'
                      variant='filled'
                      placeholder='Enter additional notes here if you want'
                      inputProps={{
                        maxlength: 60
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormLabel component='legend' id='discrete-slider-custom'>Size</FormLabel>
                    <Slider
                      className={classes.sliderWidth}
                      defaultValue={1}
                      getAriaValueText={this.valuetext}
                      aria-labelledby='discrete-slider-custom'
                      min={0}
                      max={2}
                      step={1}
                      valueLabelDisplay='auto'
                      marks={marks}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant='contained'
                      className={classes.fullWidth}
                      color='primary'
                      endIcon={<SendIcon />}
                    >
                      Send
                    </Button>
                  </Grid>
                </Grid>
              </FormControl>
              <CardFooter />
            </Card>
          </Container>
        </main>
      </div>
    )
  }
}

Order.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Order)
