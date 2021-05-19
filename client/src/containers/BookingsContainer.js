import React, {useState, useEffect} from 'react';
import BookingsList from '../components/BookingsList'
import BookingsForm from '../components/BookingsForm'

function BookingsContainer(){

    const [bookings, setBookings] = useState([])

    useEffect(() => {
        fetchBookings()
    })

    const fetchBookings = () => {
        fetch('http://localhost:5000/api/bookings')
            .then(response => response.json())
            .then(bookings => setBookings(bookings))
    }

    const postBooking = (data) => {
        return fetch('http://localhost:5000/api/bookings', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
    }

    const addBooking = (booking) => {
        const temp = bookings.map(booking => booking);
        temp.push(booking);
        setBookings(temp);
    }    

    // const deleteBooking = (id) => {
    //     fetch('http://localhost:5000/api/bookings/' + id, {
    //         method: 'DELETE'
    //     })}


    // const removeBooking = (booking) => {
    //     booking.pop();
    // };    

    return(
        <div>
            <BookingsForm postBooking = {postBooking} addBooking = {addBooking}/>
            <BookingsList bookingsData = {bookings}/>
        </div>
    );
};


export default BookingsContainer;