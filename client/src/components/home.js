import React from 'react'
import { 
    Typography,
    Button
} from '@material-ui/core';
import {PermContactCalendarSharp} from '@material-ui/icons';

const Home = () => {
    return (
        <div className="flex-items">
            <PermContactCalendarSharp color="primary" style={{ fontSize: 250, marginTop: 50 }} />

            <Typography variant="h3" color="primary" style={{ marginTop: 30 }}>
                Manage your contacts here
            </Typography>

            <div style={{ marginTop: 30 }}>
                <Button href="/view" variant="contained" color="primary" size="large" style={{ marginRight: 30 }}>
                    View
                </Button>
                <Button href="/create" variant="contained" color="primary" size="large">
                    Create
                </Button>
            </div>
        </div>
    )
}

export default Home;