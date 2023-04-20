import './app.css';
import React, { useState } from 'react';

function App() {
  const [fullName, setFullName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [studentData, setStudentData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const student = { fullName, emailId, phoneNumber, birthPlace };
    setStudentData([...studentData, student]);
  };

  return (
    <div className="App">
      <div>
        <h1>Student Form</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Full Name"
            type="text"
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />{' '}
          <br /> <br />
          <input
            placeholder="Email Id"
            type="email"
            onChange={(e) => {
              setEmailId(e.target.value);
            }}
          />{' '}
          <br /> <br />
          <input
            placeholder="Phone Number"
            type="tel"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />{' '}
          <br /> <br />
          <input
            placeholder="Birth Place"
            type="text"
            onChange={(e) => {
              setBirthPlace(e.target.value);
            }}
          />{' '}
          <br /> <br />
        </form>
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <h1>Student's Data</h1>
      <div className="down">
        <table style={{ width: '70%' }}>
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Full Name</th>
              <th>Email Id</th>
              <th>Phone Number</th>
              <th>Birth Place</th>
            </tr>
          </thead>

          <tbody>
            {studentData.map((data, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{data.fullName}</td>
                <td>{data.emailId}</td>
                <td>{data.phoneNumber}</td>
                <td>{data.birthPlace}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
