import React from 'react';
import { 
    Container,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography
} from '@material-ui/core';
import {Add} from '@material-ui/icons';

const ViewContacts = () => {
    return (
        <div className="dashboardPage">
            <Container>
                <Typography variant="h4" className="dashboardHeading">
                    Contacts
                </Typography>
                <Typography variant="h6" className="dashboardDesc">
                    Here you can manage your contacts.
                </Typography>

                <Card className="cardFlex">
                    <CardContent>
                        <Typography variant="h6">
                            Contacts
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button href="/create" variant="contained" color="primary" size="large"><Add className="iconStyling" />Add Contact</Button>
                    </CardActions>
                </Card>
            </Container>
        </div>
    )
}

export default ViewContacts;