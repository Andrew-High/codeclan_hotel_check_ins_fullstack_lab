use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        guest_name: "Sam McCoy",
        email_address: "topshagger69@yahoo.co.uk",
        checked_in: false
    }
])