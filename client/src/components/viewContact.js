import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { 
    Container,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from '@material-ui/core';
import {Add} from '@material-ui/icons';

const ViewContacts = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:4000/contact').then((response) => {
            setData(response.data.data)
        })
    }, [])

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
                        <Typography variant="h5">
                            Contacts
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button href="/create" variant="contained" color="primary" size="large"><Add className="iconStyling" />Add Contact</Button>
                    </CardActions>
                </Card>

                <TableContainer component={Paper} className="tableStyling">
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell><strong>Created Date</strong></TableCell>
                                <TableCell><strong>First Name</strong></TableCell>
                                <TableCell><strong>Last Name</strong></TableCell>
                                <TableCell><strong>Email</strong></TableCell>
                                <TableCell><strong>Phone Number</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data && data.map((row) => {
                                return (
                                    <TableRow key={row._id}>
                                        <TableCell>{row.createdDate}</TableCell>
                                        <TableCell>{row.firstName}</TableCell>
                                        <TableCell>{row.lastName}</TableCell>
                                        <TableCell>{row.email}</TableCell>
                                        <TableCell>{row.phone}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    )
}

export default ViewContacts;