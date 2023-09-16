import React, { useState, useEffect } from 'react';
import './EventCalendar.css';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
  addMonths,
  subMonths,
  isValid,
} from 'date-fns';

// Sample event data
const events = [
  {
    date: '2023-09-15',
    title: 'Academic Conference 1',
    topic: 'Advancements in Technology',
    activity: 'Conference',
    venue: 'Virtual',
    time: '10:00 AM - 2:00 PM',
    link: 'https://example.com/event1',
  },
  {
    date: '2023-09-22',
    title: 'Workshop on Data Analysis',
    topic: 'Data Science',
    activity: 'Workshop',
    venue: 'Institution A',
    time: '3:00 PM - 5:00 PM',
    link: 'https://example.com/event2',
  },
  // Add more event data as needed...
];

function EventCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const today = new Date();
  const firstDayOfMonth = startOfMonth(currentMonth);
  const lastDayOfMonth = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: firstDayOfMonth, end: lastDayOfMonth });

  useEffect(() => {
    if (selectedDate) {
      setCurrentMonth(selectedDate);
    }
  }, [selectedDate]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const closePopup = () => {
    setSelectedDate(null);
  };

  const goToNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const goToPrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  return (
    <div className="app-container">
      <div className="event-calendar">
        <div className="calendar-header">
          <button className="prev-month-button" onClick={goToPrevMonth}>
            Previous Month
          </button>
          <h1>{format(currentMonth, 'MMMM yyyy')}</h1>
          <button className="next-month-button" onClick={goToNextMonth}>
            Next Month
          </button>
        </div>
        
        <div className="calendar-grid">
          {daysInMonth.map((date) => (
            <div
              key={date.toString()}
              className={`calendar-day ${date <= today ? 'past' : ''} ${
                events.some((event) => isSameDay(new Date(event.date), date))
                  ? 'has-events'
                  : ''
              }`}
              onClick={() => handleDateClick(date)}
            >
              {format(date, 'd')}
            </div>
          ))}
        </div>
        {selectedDate && (
        <div className="event-popup">
          <button className="close-button" onClick={closePopup}>
            X
          </button>
          <h2>Events on {format(selectedDate, 'MMMM d, yyyy')}</h2>
          {events.filter((event) => isSameDay(new Date(event.date), selectedDate)).length === 0 ? (
            <p>No events scheduled </p>
          ) : (
            <ul className="event-list">
              {events.map((event, index) =>
                isSameDay(new Date(event.date), selectedDate) ? (
                  <li key={index} className="event-item">
                    <h3 className="event-title">{event.title}</h3>
                    <p className="event-detail">Topic: {event.topic}</p>
                    <p className="event-detail">Activity: {event.activity}</p>
                    <p className="event-detail">Venue: {event.venue}</p>
                    <p className="event-detail">Time: {event.time}</p>
                    <a
                      className="event-link"
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More
                    </a>
                  </li>
                ) : null
              )}
            </ul>
          )}
        </div>
      )}
      </div>
    </div>
  );
}

export default EventCalendar;
