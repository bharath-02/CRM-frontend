import React, {useState} from 'react';
import axios from 'axios';
import {
    Button,
    TextField,
    Snackbar
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const EditContact = ({editID, rowValue, closeModal}) => {
    const [open, setOpen] = useState(false);
    const [firstName, setFirstName] = useState(rowValue.firstName);
    const [lastName, setLastName] = useState(rowValue.lastName);
    const [email, setEmail] = useState(rowValue.email);
    const [phoneNumber, setPhoneNumber] = useState(rowValue.phoneNumber);
    const [company, setCompany] = useState(rowValue.company);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    const editContact = async (object) => {
        await axios.put(`http://localhost:4000/contact/${editID}`, object)
            .then((response) => {
                closeModal(false)
            })
            .then(() => {
                setTimeout(() => {
                    setOpen(true)
                }, 1000)
            })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await editContact({firstName, lastName, email, phoneNumber, company})
    }

    return(
        <div>
            <form onSubmit={handleSubmit} autoComplete="off">
                <TextField
                    id="outlined-basic" 
                    value={firstName} 
                    onChange={e => {setFirstName(e.target.value)}} 
                    label="First Name" 
                    variant="outlined" 
                    className="textFieldPosition" 
                /><br />
                <TextField 
                    id="outlined-basic" 
                    value={lastName} 
                    onChange={e => {setLastName(e.target.value)}} 
                    label="Last Name" 
                    variant="outlined" 
                    className="textFieldPosition" 
                /><br />
                <TextField 
                    id="outlined-basic" 
                    value={email} 
                    onChange={e => {setEmail(e.target.value)}} 
                    label="Email" 
                    variant="outlined" 
                    type="email"
                    className="textFieldPosition" 
                /><br />
                <TextField 
                    id="outlined-basic" 
                    value={phoneNumber} 
                    onChange={e => {setPhoneNumber(e.target.value)}} 
                    label="Phone Number" 
                    variant="outlined" 
                    className="textFieldPosition" 
                /><br />
                <TextField 
                    id="outlined-basic" 
                    value={company} 
                    onChange={e => {setCompany(e.target.value)}} 
                    label="Company" 
                    variant="outlined" 
                    className="textFieldPosition" 
                /><br />

                <div>
                    <Button type="submit" variant="contained" color="primary" className="updateButton">
                        Update
                    </Button>
                </div>
            </form>


            {/*************     Snackbar for editing     ***********/}
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="info">
                    Contact Updated successfully!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default EditContact;