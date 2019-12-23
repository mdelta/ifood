/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
    const classes = useStyles();
    const { whiteFont } = props;
    const footerClasses = classNames({
        [classes.footer]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    const aClasses = classNames({
        [classes.a]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    return (
        <footer className={footerClasses}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <List className={classes.list}>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="https://github.com/mdelta/ifood"
                                className={classes.block}
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={['fab', 'github']} /> Visit us at GitHub
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <Link to="/about" className={classes.block}>About us</Link>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <Link to="/legal" className={classes.block}>Legal notice</Link>
                        </ListItem>
                    </List>
                </div>
                <div className={classes.right}>
                    &copy; {1900 + new Date().getYear()} , made with{" "}
                    <Favorite className={classes.icon} /> by{" "}
                    <a
                        href="https://www.creative-tim.com?ref=mkr-footer"
                        className={aClasses}
                        target="_blank"
                    >
                        Creative Tim
                    </a>{" "}
                    for a better web.
                </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    whiteFont: PropTypes.bool
};
