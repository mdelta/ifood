import React, { Component } from 'react'

import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'

import FolderIcon from '@material-ui/icons/Folder'
import ViewIcon from '@material-ui/icons/Visibility'
import CallIcon from '@material-ui/icons/Call'

class RestaurantItem extends Component {
  render () {
    let menuIcon
    let telPhone

    if (this.props.menu) {
      menuIcon =
        <IconButton href={this.props.menu} edge='end' aria-label='view'>
          <ViewIcon />
        </IconButton>
    }

    if (this.props.phone) {
      const helpPhone = 'tel:' + this.props.phone
      telPhone =
        <IconButton href={helpPhone} edge='end' aria-label='call'>
          <CallIcon />
        </IconButton>
    }

    return (
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={this.props.name}
          secondary={this.props.phone}
        />
        <ListItemSecondaryAction>
          {menuIcon}
          {telPhone}

        </ListItemSecondaryAction>
      </ListItem>
    )
  }
}

export default RestaurantItem
