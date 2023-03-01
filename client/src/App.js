import React from 'react'
import { Grid } from '@material-ui/core';
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui';
import Side from './components/side';
import Main from './components/main';

import useStyles from './css'

const App = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container justify="center">
                <Grid Item xs={12} sm={4}>
                    <Side title="Income"/>
                </Grid>
                <Grid Item xs={12} sm={3}>
                    < Main />
                </Grid>
                <Grid Item xs={12} sm={4}>
                    <Side title="Expense"/>
                </Grid>
            </Grid>
            <PushToTalkButtonContainer>
                <PushToTalkButton/>
                <ErrorPanel/>
            </PushToTalkButtonContainer>
        </div>
    )
}

export default App
