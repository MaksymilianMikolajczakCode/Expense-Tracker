import React, { useContext } from 'react';
import {Card, CardHeader, CardContent, Typography, Grid, IconButton} from '@material-ui/core';
import Form from './form';
import List from './list';
import { ExpenseTrackerContext } from '../context/context';
import useStyles from './css';
import Modal from './modal';

const Main = () => {
    const { balance } =useContext(ExpenseTrackerContext);
    const classes = useStyles();
    return (
    <Card className={classes.main}>
        <CardHeader title="Expense Tracker"  subheader="Powered by Speechly" action={
            <IconButton>
                <Modal/>
            </IconButton>
        } />
        <CardContent>
            <Typography variant="h5">Total Balance</Typography>
            <Typography variant="subtitle1" >£{balance}</Typography>
            <Form/>
        </CardContent>
        <CardContent className={classes.main2} >
            <Grid container spacing={3} >
                <Grid item xs={12}>
                    <List/>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
    );
    }

export default Main;