import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import RestaurantItem from "./RestaurantItem";

import styles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

const useListStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        color: 'black',
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));

RestaurantList.propTypes = {
    restaurants: PropTypes.array,
    actions: PropTypes.object,
};
export default function RestaurantList(props) {
    const classes = useStyles();
    const listClasses = useListStyles();
    const { restaurants, hasHadRestaurants, actions } = props;

    return (
        <div
            className={classes.pageHeader}
            style={{
                backgroundImage: "url(" + image + ")",
                backgroundSize: "cover",
                backgroundPosition: "top center"
            }}
        >
            <div className={classes.container}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={12} >
                        <div className={listClasses.demo}>
                            <List>
                                {restaurants.length === 0 && <p></p>}
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

    );
}
