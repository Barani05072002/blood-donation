const DonationEvents = () => {
    const events = [
      { title: "Blood Drive 2024", date: "Jan 20, 2024", location: "Community Center" },
      { title: "Emergency Donation Camp", date: "Feb 10, 2024", location: "City Hall" },
    ];
  
    return (
      <div>
        <h2>Donation Events</h2>
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              <h3>{event.title}</h3>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default DonationEvents;