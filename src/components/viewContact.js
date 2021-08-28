import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Button,
    Container,
    Card,
    CardActions,
    CardContent,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography,
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Snackbar
} from '@material-ui/core';
import {
    Add,
    Delete,
    Edit
} from '@material-ui/icons';
import MuiAlert from '@material-ui/lab/Alert';

import EditContact from './editContact';

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ViewContacts = () => {
    const [id, setId] = useState();
    const [data, setData] = useState();
    const [rowData, setRowData] = useState();
    const [open, setOpen] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:4000/contact')
            .then((response) => {
                setData(response.data.data)
            })
    }, [openEditModal, openDeleteModal])

    const deleteContact = () => {
        axios.delete(`http://localhost:4000/contact/${id}`)
            .then(() => {
                setOpenDeleteModal(false)
                setOpen(true)
            })
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    const handleEdit = () => {
        setOpenEditModal(false)
    }

    const handleDelete = () => {
        setOpenDeleteModal(false)
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
                                let isoDate = new Date(row.createdDate);
                                let year = isoDate.getFullYear();
                                let month = isoDate.getMonth()+1;
                                let date = isoDate.getDate();

                                return (
                                    <TableRow key={row._id} className="rowHover">
                                        <TableCell>{date+' - ' + month + ' - '+year}</TableCell>
                                        <TableCell>{row.firstName}</TableCell>
                                        <TableCell>{row.lastName}</TableCell>
                                        <TableCell>{row.email}</TableCell>
                                        <TableCell>{row.company}</TableCell>
                                        <TableCell>{row.phoneNumber}</TableCell>
                                        <TableCell>
                                            <Button
                                                variant="contained"
                                                className="actionButton edit"
                                                color="primary"
                                                onClick={() => {
                                                    setId(row._id)   
                                                    setRowData(row)
                                                    setOpenEditModal(true)
                                                }}
                                                startIcon={<Edit />}
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                variant="contained"
                                                className="actionButton delete"
                                                color="secondary"
                                                onClick={() => {
                                                    setOpenDeleteModal(true)
                                                    setId(row._id)
                                                }}
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

                {/*************     Snackbar for deleting     ***********/}
                <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error">
                        Contact Deleted successfully!
                    </Alert>
                </Snackbar>
                
                {/*************     Edit Contact Modal     ***********/}
                <Dialog
                    open={openEditModal}
                    onClose={handleEdit}
                >
                    <DialogTitle>{"Edit Contact?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Update your Contact.
                        </DialogContentText>
                        <EditContact editID={id} rowValue={rowData} closeModal={setOpenEditModal} />
                    </DialogContent>
                </Dialog>

                {/*************     Delete Contact Modal     ***********/}
                <Dialog
                    open={openDeleteModal}
                    onClose={handleDelete}
                >
                    <DialogTitle>{"Delete Contact?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to delete this contact. This cannot be undone.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button  onClick={handleDelete} autoFocus color="primary">
                            Cancel
                        </Button>
                        <Button onClick={deleteContact} autoFocus color="primary">
                            Confirm
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </div>
    )
}

export default ViewContacts;