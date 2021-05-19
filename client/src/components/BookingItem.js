import React from 'react';

function BookingItem({booking}){




    return(
        <>
        <li>{booking.guest_name}<br/>
        {booking.email_address}<br/>
        {booking.checked_in ? 'True' : 'False'}<br/>
        <button>Delete</button>
        </li>

        </>
    )
}

export default BookingItem;