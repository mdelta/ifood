import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

export default function About() {
    const classes = useStyles();

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
                        <Card className={classes}>
                            <CardHeader color="primary" className={classes.cardHeader}>
                                <h2>About iFood</h2>
                            </CardHeader>
                            <CardBody>                                
                                <p>
                                  This iFood application is used by employees from <Link href="https://www.epg.com">Ehrhardt + Partner Group</Link> (EPG) to order food in our local restaurants.
                                  This weekly event usually takes place on every Friday. 
                                </p>
                                <p>
                                  Currently, this is done with the IBM i application ESSEN400. The intention for this app is it, to replace the old application with this modern alternative.
                                </p>
                            </CardBody>
                            <CardFooter className={classes.cardFooter}>
                            </CardFooter>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        </div>

    );
}
