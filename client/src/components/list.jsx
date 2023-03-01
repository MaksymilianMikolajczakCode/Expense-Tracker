import React, { useContext } from 'react'
import { List as MULIist, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import  { Delete, MoneyOff } from '@material-ui/icons';
import { ExpenseTrackerContext } from '../context/context';
import useStyles from './css';


const List = () => {
    const classes = useStyles();
    const { contracts, deleteContract } = useContext(ExpenseTrackerContext);

    return (
        <MULIist dense={false} className={classes.list} >
            {contracts.map((contract) =>  
            <Slide direction="down" in mountOnEnter unmountOnExit key={contract.id} >
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={contract.type === 'Income' ? classes.iconIncome: classes.iconExpense} >
                            <MoneyOff />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={contract.category} secondary={`$${contract.amount} - ${contract.date}`} />
                    <ListItemSecondaryAction >
                        <IconButton edge="end" aria-label="delete" onClick={() => deleteContract(contract.id)} >
                            <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </Slide> )}
        </MULIist>
    )
}

export default List
