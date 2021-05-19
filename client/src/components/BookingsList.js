import React from 'react';
import BookingItem from './BookingItem'

function BookingsList({bookingsData}){

    
    return(
        <div>
            {bookingsData.map((booking) => {
                return (<BookingItem booking ={booking}/>)
            })}
        </div>    
    )
        
};


export default BookingsList;