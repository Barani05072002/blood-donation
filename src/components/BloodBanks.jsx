const BloodBanks = () => {
    const bloodBanks = [
      { name: "City Blood Bank", location: "Downtown", contact: "123-456-7890" },
      { name: "HealthCare Blood Center", location: "Uptown", contact: "987-654-3210" },
    ];
  
    return (
      <div>
        <h2>Blood Banks</h2>
        <ul>
          {bloodBanks.map((bank, index) => (
            <li key={index}>
              <h3>{bank.name}</h3>
              <p>Location: {bank.location}</p>
              <p>Contact: {bank.contact}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default BloodBanks;