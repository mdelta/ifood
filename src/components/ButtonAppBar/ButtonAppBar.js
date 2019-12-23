import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

// Material UI components
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

// Icons
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import FeedbackIcon from '@material-ui/icons/Feedback';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import PolicyIcon from '@material-ui/icons/Policy';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import RoomIcon from '@material-ui/icons/Room';
import ListIcon from '@material-ui/icons/List';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import TextsmsIcon from '@material-ui/icons/Textsms';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

class ButtonAppBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            left: false
        };
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;

        let menu;
        if (this.props.loginStatus) {
            menu = <div className={classes.list}>
                <List>
                    <ListItem button key="home" component={Link} to="/">
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button key="order" component={Link} to="/order">
                        <ListItemIcon><LocalDiningIcon /></ListItemIcon>
                        <ListItemText primary="Order" />
                    </ListItem>
                    <ListItem button key="list" component={Link} to="/orderlist">
                        <ListItemIcon><ListIcon /></ListItemIcon>
                        <ListItemText primary="Order list" />
                    </ListItem>
                    <ListItem button key="menu" component={Link} to="/menu">
                        <ListItemIcon><FeaturedPlayListIcon /></ListItemIcon>
                        <ListItemText primary="Menu" />
                    </ListItem>
                    <Divider />
                    <ListItem button key="stats" component={Link} to="/statistics">
                        <ListItemIcon><InsertChartIcon /></ListItemIcon>
                        <ListItemText primary="Statistics" />
                    </ListItem>
                    <Divider />
                    <ListItem button key="about" component={Link} to="/about">
                        <ListItemIcon><FeedbackIcon /></ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItem>
                    <ListItem button key="about" component={Link} to="/legal">
                        <ListItemIcon><TextsmsIcon /></ListItemIcon>
                        <ListItemText primary="Legal notice" />
                    </ListItem>
                    <ListItem button key="privacy" component={Link} to="/privacy">
                        <ListItemIcon><PolicyIcon /></ListItemIcon>
                        <ListItemText primary="Privacy" />
                    </ListItem>
                    <Divider />
                    <ListItem button key="about" component={Link} to="/restaurants">
                        <ListItemIcon><RoomIcon /></ListItemIcon>
                        <ListItemText primary="Restaurants" />
                    </ListItem>
                    <Divider />
                    <ListItem button key="logout" onClick={this.props.logout}>
                        <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItem>
                </List>
            </div>
        }
        else {
            menu = <div className={classes.list}>
                <List>
                    <ListItem button key="login" component={Link} to="/">
                        <ListItemIcon><VpnKeyIcon /></ListItemIcon>
                        <ListItemText primary="Login" />
                    </ListItem>
                    <Divider />
                    <ListItem button key="about" component={Link} to="/about">
                        <ListItemIcon><FeedbackIcon /></ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItem>
                    <ListItem button key="about" component={Link} to="/legal">
                        <ListItemIcon><TextsmsIcon /></ListItemIcon>
                        <ListItemText primary="Legal notice" />
                    </ListItem>
                    <ListItem button key="privacy" component={Link} to="/privacy">
                        <ListItemIcon><PolicyIcon /></ListItemIcon>
                        <ListItemText primary="Privacy" />
                    </ListItem>
                </List>
            </div>
        }

        return (
            <div className={classes.root}>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {menu}
                    </div>
                </Drawer>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            iFood
                        </Typography>
                        {this.props.loginStatus &&
                            <div>
                                <IconButton color="inherit" component={Link} to="/profile">
                                    <AccountCircle color="inherit" />
                                </IconButton>
                            </div>
                        }
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);