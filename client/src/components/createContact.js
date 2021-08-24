import React, {useState} from 'react';
import axios from 'axios';
import {
    Button,
    TextField,
    Typography
} from '@material-ui/core';

const CreateContact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [company, setCompany] = useState('');

    const createContact = async (object) => {
        await axios.post('http://localhost:4000/contact', object)
            .then((response) => {
                console.log(response)
            })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await createContact({firstName, lastName, email, phoneNumber, company})
        console.log(firstName, lastName, email, phoneNumber, company)
    }

    return (
        <div className="positionCenter">
            <form onSubmit={handleSubmit} className="formPosition" autoComplete="off">
                <Typography variant="h3" color="primary" className="heading">Create your Contact</Typography>
                <TextField
                    id="outlined-basic" 
                    value={firstName} 
                    onChange={e => {setFirstName(e.target.value)}} 
                    label="First Name" 
                    variant="outlined" 
                    className="textFieldPosition" 
                    required 
                /><br />
                <TextField 
                    id="outlined-basic" 
                    value={lastName} 
                    onChange={e => {setLastName(e.target.value)}} 
                    label="Last Name" 
                    variant="outlined" 
                    className="textFieldPosition" 
                    required 
                /><br />
                <TextField 
                    id="outlined-basic" 
                    value={email} 
                    onChange={e => {setEmail(e.target.value)}} 
                    label="Email" 
                    variant="outlined" 
                    type="email"
                    className="textFieldPosition" 
                    required 
                /><br />
                <TextField 
                    id="outlined-basic" 
                    value={phoneNumber} 
                    onChange={e => {setPhoneNumber(e.target.value)}} 
                    label="Phone Number" 
                    variant="outlined" 
                    className="textFieldPosition" 
                    required 
                /><br />
                <TextField 
                    id="outlined-basic" 
                    value={company} 
                    onChange={e => {setCompany(e.target.value)}} 
                    label="Company" 
                    variant="outlined" 
                    className="textFieldPosition" 
                    required 
                /><br />

                <div>
                    <Button type="submit" variant="contained" color="primary" className="createButton">
                        Create
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default CreateContact;