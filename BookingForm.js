import React, { useState } from "react";

export default function BookingForm() {
  const MAX_SEATS = 8;
  const monthlySubscribers = 2; // Adjust as needed
  const availableSeats = MAX_SEATS - monthlySubscribers;

  const [bookedCount, setBookedCount] = useState(0);
  const [hasPass, setHasPass] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleBooking = () => {
    if (bookedCount < availableSeats) {
      setBookedCount(bookedCount + 1);
      setBookingConfirmed(true);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      backgroundColor: '#1a202c'
    }}>
      <div style={{
        backgroundColor: '#2d3748',
        padding: '2rem',
        borderRadius: '1rem',
        width: '100%',
        maxWidth: '400px'
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Book Your Seat at Dusk</h2>

        <div style={{ marginTop: '1rem' }}>
          <label style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={hasPass}
              onChange={(e) => setHasPass(e.target.checked)}
              style={{ marginRight: '0.5rem' }}
            />
            <span>I have a multi-day or monthly pass</span>
          </label>
        </div>

        {hasPass ? (
          <p style={{ color: '#68d391', marginTop: '1rem' }}>You're all set! No need to book.</p>
        ) : bookingConfirmed ? (
          <p style={{ color: '#68d391', marginTop: '1rem' }}>Booking confirmed. See you at Dusk!</p>
        ) : (
          <>
            <p style={{ marginTop: '1rem' }}>{availableSeats - bookedCount} seats left today (9am–5pm)</p>
            <button
              onClick={handleBooking}
              disabled={bookedCount >= availableSeats}
              style={{
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                backgroundColor: bookedCount >= availableSeats ? '#a0aec0' : '#4299e1',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: bookedCount >= availableSeats ? 'not-allowed' : 'pointer'
              }}
            >
              Book Now
            </button>
            {bookedCount >= availableSeats && (
              <p style={{ color: '#f56565', marginTop: '1rem' }}>All seats booked for today.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}