import React, {useState} from 'react';

function BookingsForm({addBooking, postBooking}){

    const [formData, setFormData] = useState({})

    const onChange = (event) => {
        formData[event.target.id] = event.target.value;
        setFormData(formData);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        postBooking(formData)
        .then(data => addBooking(data))
    }
    
    return(
        <form onSubmit={onSubmit}>
            <label>Name</label>
            <input onChange={onChange} type='text' id='guest_name'/>
            <label>Email</label>
            <input onChange={onChange} type='email' id='email_address'/>
            <label>Checked In?</label>
            <input type='checkbox' onChange = {onChange} id="checked_in"></input>
            <input type='Submit' value='Add'></input>
        </form>
    )
}


export default BookingsForm;