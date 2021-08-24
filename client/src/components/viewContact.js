import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Button,
    Container,
    Card,
    CardActions,
    CardContent,
    Typography,
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from '@material-ui/core';
import {
    Add,
    Delete,
    Edit
} from '@material-ui/icons';

const ViewContacts = () => {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get('http://localhost:4000/contact')
            .then((response) => {
                setData(response.data.data)
            })
    })

    const handleEdit = (e) => {
        console.log(e)
    }

    const handleDelete = (e, id) => {
        axios.delete(`http://localhost:4000/contact/${id}`)
            .then((response) => {
                console.log(response)
            })
    }

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
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><strong>Created Date</strong></TableCell>
                                <TableCell><strong>First Name</strong></TableCell>
                                <TableCell><strong>Last Name</strong></TableCell>
                                <TableCell><strong>Email</strong></TableCell>
                                <TableCell><strong>Company</strong></TableCell>
                                <TableCell><strong>Phone Number</strong></TableCell>
                                <TableCell><strong></strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data && data.map((row) => {
                                return (
                                    <TableRow key={row._id} className="rowHover">
                                        <TableCell>{row.createdDate}</TableCell>
                                        <TableCell>{row.firstName}</TableCell>
                                        <TableCell>{row.lastName}</TableCell>
                                        <TableCell>{row.email}</TableCell>
                                        <TableCell>{row.company}</TableCell>
                                        <TableCell>{row.phone}</TableCell>
                                        <TableCell>
                                            <Button
                                                variant="contained"
                                                className="actionButton edit"
                                                color="primary"
                                                onClick={handleEdit}
                                                startIcon={<Edit />}
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                variant="contained"
                                                className="actionButton delete"
                                                color="secondary"
                                                onClick={(e) => {handleDelete(e, row._id)}}
                                                startIcon={<Delete />}
                                            >
                                                Delete
                                            </Button>
                                        </TableCell>
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