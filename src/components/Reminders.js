import React from 'react';

const remindersData = [
  { id: 1, text: 'Take a 5-minute break.', time: '10:00 AM' },
  { id: 2, text: 'Drink water!', time: '11:00 AM' },
  { id: 3, text: 'Stretch your legs.', time: '1:00 PM' },
  { id: 4, text: 'Review your tasks for the day.', time: '3:00 PM' },
];

const Reminders = () => {
  return (
    <div>
      <h2>Reminders</h2>
      <ul>
        {remindersData.map(reminder => (
          <li key={reminder.id}>{reminder.time}: {reminder.text}</li>
        ))}
      </ul>
      <div className='adsense'>
        {/* Google AdSense Ad Placement */}
        <p>Ad placeholder</p>
      </div>
    </div>
  );
};

export default Reminders;