import React from 'react';
import BookingItem from './BookingItem'

function BookingsList({bookingsData, deleteBooking, removeBooking}){

    
    return(
        <div>
            {bookingsData.map((booking) => {
                return (<BookingItem booking ={booking} deleteBooking = {deleteBooking} removeBooking = {removeBooking}/>)
            })}
        </div>    
    )
        
};


export default BookingsList;