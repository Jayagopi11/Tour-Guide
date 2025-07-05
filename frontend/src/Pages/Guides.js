import React from "react";

const guides = [
  { name: "John", location: "Paris", experience: "5 years" },
  { name: "Rohit", location: "Tokyo", experience: "3 years" },
  { name: "Vijay", location: "New York", experience: "7 years" },
  { name: "Arun", location: "London", experience: "6 years" },
  { name: "Kumar", location: "Rome", experience: "4 years" },
  { name: "Lalit", location: "Dubai", experience: "8 years" },
  { name: "Suresh", location: "Cairo", experience: "2 years" },
  { name: "Ranjith", location: "Sydney", experience: "5 years" },
  { name: "Prabu", location: "Bali", experience: "3 years" },
  { name: "Priya", location: "Queenstown", experience: "9 years" },
  { name: "Raj", location: "Zermatt", experience: "4 years" },
  { name: "Vinoth", location: "Amalfi Coast", experience: "6 years" },
  { name: "David", location: "Banff", experience: "10 years" },
  { name: "Sathya", location: "Santorini", experience: "5 years" },
  { name: "Pavan", location: "Bora Bora", experience: "7 years" },
  { name: "Vinayak", location: "Havana", experience: "3 years" },
  { name: "Shankar", location: "Edinburgh", experience: "6 years" },
  { name: "Umar", location: "Prague", experience: "4 years" },
  { name: "Krishna", location: "Machu Picchu", experience: "8 years" },
  { name: "Karthik", location: "Alentejo", experience: "3 years" },
  { name: "Madhavan", location: "Hocking Hills", experience: "4 years" },
  { name: "Jeeva", location: "Salzburg", experience: "5 years" },
  { name: "Manoj", location: "Nairobi", experience: "6 years" },
  { name: "Ravi", location: "Reykjavik", experience: "7 years" },
  { name: "Vasanth", location: "Petra", experience: "8 years" },
  { name: "Rajesh", location: "Queenstown", experience: "3 years" },
  { name: "Saravanan", location: "Cappadocia", experience: "5 years" },
  { name: "Faizal", location: "Zanzibar", experience: "4 years" },
  { name: "Elango", location: "Rio de Janeiro", experience: "5 years" },
  { name: "Chandru", location: "Buenos Aires", experience: "5 years" },
];

function Guides() {
  return (
    <div className="container mt-4 bg-secondary">
      <h2 className="mb-4 text-white">Available Guides</h2>
      <ul className="list-group">
        {guides.map((guide, index) => (
          <li key={index} className="list-group-item">
            <strong>{guide.name}</strong> - {guide.location} ({guide.experience})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Guides;
