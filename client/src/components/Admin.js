import React, { useState, useEffect } from 'react';
import Header2 from './Header2';

function Admin() {
  const [contactInfo, setContactInfo] = useState([]);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await fetch('/admin');
        const data = await response.json();
        setContactInfo(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchContactInfo();
  }, []);

  return (
    <>
    <Header2/>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 ">Contact Information</h1>
      {contactInfo.length > 0 ? (
        <ul className="grid  gap-4">
          {contactInfo.map((info) => (
            <li
              key={info.id}
              className="border border-gray-300 w-1/2 bg-purple-100 rounded  p-4  shadow-md"
            >
              <div className="font-bold text-purple-950 mb-2">Name of User: {info.name}</div>
              <div className="font-bold text-purple-950 mb-2">Email: {info.email}</div>
              <div className="text-purple-950">Message: {info.message}</div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-600">No contact information available.</div>
      )}
    </div>
    </>
  );
}

export default Admin;
