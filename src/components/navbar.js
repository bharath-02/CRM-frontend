import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Link
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Link href="/" color="inherit" className="linkStyling">
                            Contact Keeper
                        </Link>
                    </Typography>
                    <Button href="/view" color="inherit">
                       View
                    </Button>
                    <Button href="/create" color="inherit">
                        Create
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;