// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const PlaceSearch = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);
//   const [selectedPlace, setSelectedPlace] = useState(null);
//   const [error, setError] = useState(null);
//   const navigate =useNavigate();

//   const handleChange = async (e) => {
//     const value = e.target.value;
//     setQuery(value);

//     if (value.length < 2) {
//       setResults([]);
//       setSelectedPlace(null);
//       setError(null);
//       return;
//     }

//     try {
//       const res = await fetch(`http://localhost:5000/search?query=${encodeURIComponent(value)}`);
//       const data = await res.json();

//       if (Array.isArray(data)) {
//         setResults(data);
//         setError(null);
//       } else {
//         setResults([]);
//         setError(data.error || 'Unexpected response');
//       }
//     } catch (err) {
//       console.error('Fetch error:', err);
//       setResults([]);
//       setError('Failed to fetch locations');
//     }
//   };

//   const handlePlaceClick = (place) => setSelectedPlace(place);

//   // Auto-generate detailed tour info with additional fields
//   const generateTourDetails = (placeName) => {
//     const durations = ['2 Days / 1 Night', '3 Days / 2 Nights', '4 Days / 3 Nights', '5 Days / 4 Nights'];
//     const prices = ['₹40,000', '₹40,000', '₹45,000', '₹50,000', '₹65,000'];
//     // const locations = ['Paris, France', 'Tokyo, Japan', 'New York, USA', 'Sydney, Australia'];
//     const ratings = ['★★★★★', '★★★★☆', '★★★★☆', '★★★★★'];
//     const highlights = [
//       'Eiffel Tower Visit', 'Cultural Walking Tours', 'Beach Relaxation',
//       'City Landmark Exploration', 'Adventure Sports', 'Heritage Sites'
//     ];
//     const bestTimes = ['Winter (Nov–Feb)', 'Spring (Mar–May)', 'Summer (Jun–Aug)', 'Monsoon (Sep–Oct)'];
//     const thingsToDo = [
//       'Visit the museums', 'Try local cuisine', 'Take a boat tour',
//       'Go on a sightseeing hike', 'Attend cultural events', 'Explore local markets'
//     ];

//     const title = `${placeName} Tour`;
//     const description =
//       `Experience the highlights of ${placeName} with this specially curated tour. ` +
//       `Enjoy comfortable accommodation, local cuisine, and expert guidance as you explore top attractions.`;

//     const rand = arr => arr[Math.floor(Math.random() * arr.length)];

//     return {
//       title,
//       description,
//       price: rand(prices),
//       // location: rand(locations),
//       duration: rand(durations),
//       rating: rand(ratings),
//       highlights: highlights,
//       bestTime: rand(bestTimes),
//       thingsToDo: thingsToDo,
//       imageUrl: `https://source.unsplash.com/800x400/?${encodeURIComponent(placeName)}`
//     };
//   };

//   // Placeholder booking action
//   const handleBookNow = () => {
//     // alert(`Booking started for: ${selectedPlace.display_name}`);
//     // e.g., navigate('/booking', { state: { selectedPlace, tourDetails } });
//     navigate('/login', { state: { from: '/book' } });
//   };

//   return (

//     <div style={{ maxWidth: 700, margin: '40px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
//       <h2>🌍 Find & Book Your Next Destination</h2>

//       <input
//         type="text"
//         value={query}
//         onChange={handleChange}
//         placeholder="Search Your destination Place....."
//         style={{
//           padding: '10px 12px',
//           width: '90%',
//           fontSize: '16px',
//           borderRadius: '4px',
//           border: '1px solid #ccc',
//           marginTop: '10px'
//         }}
//       />

//       {error && <p style={{ color: 'red', marginTop: '8px' }}>{error}</p>}

//       <ul style={{ listStyle: 'none', padding: 0, marginTop: '12px' }}>
//         {results.map((item, idx) => (
//           <li
//             key={idx}
//             onClick={() => handlePlaceClick(item)}
//             style={{
//               padding: '8px',
//               borderBottom: '1px solid #eee',
//               cursor: 'pointer'
//             }}
//           >
//             {item.display_name}
//           </li>
//         ))}
//       </ul>

//       {selectedPlace && (
//         <div
//           style={{
//             marginTop: '24px',
//             padding: '20px',
//             borderRadius: '6px',
//             boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//             background: '#fff'
//           }}
//         >
//           <h3>📍 {selectedPlace.display_name}</h3>
//           <p><strong>Lat:</strong> {selectedPlace.lat}  <strong>Lon:</strong> {selectedPlace.lon}</p>

//           <img
//             src={generateTourDetails(selectedPlace.display_name).imageUrl}
//             alt={selectedPlace.display_name}
//             style={{ width: '100%', height: 'auto', borderRadius: '6px', marginTop: '16px' }}
//           />

//           <div style={{ marginTop: '20px' }}>
//             <h4>🧳 Tour Details</h4>
//             {(() => {
//               const details = generateTourDetails(selectedPlace.display_name);
//               return (
//                 <>
//                   <p><strong>Title:</strong> {details.title}</p>
//                   <p><strong>Description:</strong> {details.description}</p>
//                   <p><strong>Price:</strong> {details.price}</p>
//                   {/* <p><strong>Location:</strong> {details.location}</p> */}
//                   <p><strong>Duration:</strong> {details.duration}</p>
//                   <p><strong>Rating:</strong> {details.rating}</p>

//                   <p><strong>Highlights:</strong></p>
//                   <ul>
//                     {details.highlights.map((highlight, i) => (
//                       <li key={i}>{highlight}</li>
//                     ))}
//                   </ul>

//                   <p><strong>Best Time to Visit:</strong> {details.bestTime}</p>

//                   <p><strong>Things to Do:</strong></p>
//                   <ul>
//                     {details.thingsToDo.map((thing, i) => (
//                       <li key={i}>{thing}</li>
//                     ))}
//                   </ul>
//                 </>
//               );
//             })()}
//           </div>

//           <button
//             onClick={handleBookNow}
//             style={{
//               marginTop: '20px',
//               padding: '12px 24px',
//               fontSize: '16px',
//               color: '#fff',
//               backgroundColor: '#007bff',
//               border: 'none',
//               borderRadius: '4px',
//               cursor: 'pointer'
//             }}
//           >
//             Book Now
//           </button>

//         </div>
//       )}
//     </div>
//   );
// };

// export default PlaceSearch;

// import React, { useState } from 'react';
// import axios from 'axios';

// const PlaceSearch = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);
//   const [selectedPlace, setSelectedPlace] = useState(null);
//   const [tourDetails, setTourDetails] = useState(null);
//   const [error, setError] = useState(null);

//   //=== API keys and URL====//
//   const UNSPLASH_API_KEY = 't68f2L57whfUZtHJtJHnfj8wrjt8YmbtE3xwjS00VVc';
//   const UNSPLASH_URL = 'https://api.unsplash.com/search/photos';

//   const fetchPlaces = async (value) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/search?query=${encodeURIComponent(value)}`);
//       const data = response.data;

//       if (Array.isArray(data)) {
//         setResults(data);
//         setError(null);
//       } else {
//         setResults([]);
//         setError(data.error || 'Unexpected response');
//       }
//     } catch (err) {
//       setResults([]);
//       setError('Failed to fetch locations');
//     }
//   };

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setQuery(value);

//     if (value.length < 2) {
//       setResults([]);
//       setSelectedPlace(null);
//       setError(null);
//       return;
//     }

//     fetchPlaces(value);
//   };

//   const fetchImage = async (placeName) => {
//     try {
//       const response = await axios.get(UNSPLASH_URL, {
//         params: {
//           query: placeName,
//           client_id: UNSPLASH_API_KEY,
//           per_page: 1,
//         },
//       });

//       const imageUrl = response.data.results[0]?.urls?.regular || '';

//       return imageUrl;
//     } catch (err) {
//       console.error("Error fetching image:", err);
//       return 'https://via.placeholder.com/800x400?text=Image+Not+Found';
//     }
//   };

//   const handlePlaceClick = async (place) => {
//     setSelectedPlace(place);

//     const imageUrl = await fetchImage(place.display_name);

//     const details = generateTourDetails(place.display_name, imageUrl);
//     setTourDetails(details);
//   };

//   const generateTourDetails = (placeName, imageUrl) => {
//     const durations = ['2 Days / 1 Night', '3 Days / 2 Nights', '4 Days / 3 Nights', '5 Days / 4 Nights'];
//     const prices = ['₹8,000', '₹12,000', '₹15,500', '₹20,000', '₹25,000'];
//     const locations = ['Paris, France', 'Tokyo, Japan', 'New York, USA', 'Sydney, Australia'];
//     const ratings = ['★★★★★', '★★★★☆', '★★★☆☆', '★★☆☆☆'];
//     const highlights = [
//       'Eiffel Tower Visit', 'Cultural Walking Tours', 'Beach Relaxation',
//       'City Landmark Exploration', 'Adventure Sports', 'Heritage Sites'
//     ];

//     const title = `${placeName} Tour`;
//     const description =
//       `Experience the highlights of ${placeName} with this specially curated tour. ` +
//       `Enjoy comfortable accommodation, local cuisine, and expert guidance as you explore top attractions.`;

//     return {
//       title,
//       description,
//       price: prices[0],
//       location: locations[0],
//       duration: durations[0],
//       rating: ratings[0],
//       highlights,
//       imageUrl
//     };
//   };

//   return (
//     <div style={{ maxWidth: 700, margin: '40px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
//       <h2>🌍 Find & Book Your Next Destination</h2>

//       <input
//         type="text"
//         value={query}
//         onChange={handleChange}
//         placeholder="Search your destination place..."
//         style={{
//           padding: '10px 12px',
//           width: '90%',
//           fontSize: '16px',
//           borderRadius: '4px',
//           border: '1px solid #ccc',
//           marginTop: '10px'
//         }}
//       />

//       {error && <p style={{ color: 'red', marginTop: '8px' }}>{error}</p>}

//       <ul style={{ listStyle: 'none', padding: 0, marginTop: '12px' }}>
//         {results.map((item, idx) => (
//           <li
//             key={idx}
//             onClick={() => handlePlaceClick(item)}
//             style={{
//               padding: '8px',
//               borderBottom: '1px solid #eee',
//               cursor: 'pointer'
//             }}
//           >
//             {item.display_name}
//           </li>
//         ))}
//       </ul>

//       {selectedPlace && tourDetails && (
//         <div
//           style={{
//             marginTop: '24px',
//             padding: '20px',
//             borderRadius: '6px',
//             boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//             background: '#fff'
//           }}
//         >
//           <h3>📍 {selectedPlace.display_name}</h3>
//           <p><strong>Lat:</strong> {selectedPlace.lat}  <strong>Lon:</strong> {selectedPlace.lon}</p>

//           <img
//             src={tourDetails.imageUrl}
//             alt={selectedPlace.display_name}
//             style={{ width: '100%', height: '800px', borderRadius: '6px', marginTop: '16px' }}
//           />

//           <div style={{ marginTop: '20px' }}>
//             <h4>🧳 Tour Details</h4>
//             <p><strong>Title:</strong> {tourDetails.title}</p>
//             <p><strong>Description:</strong> {tourDetails.description}</p>
//             <p><strong>Price:</strong> {tourDetails.price}</p>
//             <p><strong>Location:</strong> {tourDetails.location}</p>
//             <p><strong>Duration:</strong> {tourDetails.duration}</p>
//             <p><strong>Rating:</strong> {tourDetails.rating}</p>

//             <p><strong>Highlights:</strong></p>
//             <ul>
//               {tourDetails.highlights.map((highlight, i) => (
//                 <li key={i}>{highlight}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PlaceSearch;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PlaceSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [tourDetails, setTourDetails] = useState(null);
  const [error, setError] = useState(null);

  //=== API keys and URL====//
  const UNSPLASH_API_KEY = "t68f2L57whfUZtHJtJHnfj8wrjt8YmbtE3xwjS00VVc";
  const UNSPLASH_URL = "https://api.unsplash.com/search/photos";

  const navigate = useNavigate();

  const fetchPlaces = async (value) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/search?query=${encodeURIComponent(value)}`
      );
      const data = response.data;

      if (Array.isArray(data)) {
        setResults(data);
        setError(null);
      } else {
        setResults([]);
        setError(data.error || "Unexpected response");
      }
    } catch (err) {
      setResults([]);
      setError("Failed to fetch locations");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length < 2) {
      setResults([]);
      setSelectedPlace(null);
      setError(null);
      return;
    }

    fetchPlaces(value);
  };

  const fetchImage = async (placeName) => {
    try {
      const response = await axios.get(UNSPLASH_URL, {
        params: {
          query: placeName,
          client_id: UNSPLASH_API_KEY,
          per_page: 1,
        },
      });

      const imageUrl = response.data.results[0]?.urls?.regular || "";

      return imageUrl;
    } catch (err) {
      console.error("Error fetching image:", err);
      return "https://via.placeholder.com/800x400?text=Image+Not+Found";
    }
  };

  const handlePlaceClick = async (place) => {
    setSelectedPlace(place);

    const imageUrl = await fetchImage(place.display_name);

    const details = generateTourDetails(place.display_name, imageUrl);
    setTourDetails(details);
  };

  const generateTourDetails = (placeName, imageUrl) => {
    const durations = [
      "4 Days / 3 Night",
      "5 Days / 4 Nights",
      "6 Days / 5 Nights",
      "3 Days / 2 Nights",
    ];
    const prices = ["₹40,000", "₹45,000", "₹50,000", "₹55,000", "₹60,000"];
    const locations = [
      "Paris, France",
      "Tokyo, Japan",
      "New York, USA",
      "Sydney, Australia",
    ];
    const ratings = ["★★★★★", "★★★★☆", "★★★★☆", "★★★★★"];
    const highlights = [
      "Eiffel Tower Visit",
      "Cultural Walking Tours",
      "Beach Relaxation",
      "City Landmark Exploration",
      "Adventure Sports",
      "Heritage Sites",
    ];

    const title = `${placeName} Tour`;
    const description =
      `Experience the highlights of ${placeName} with this specially curated tour. ` +
      `Enjoy comfortable accommodation, local cuisine, and expert guidance as you explore top attractions.`;

    return {
      title,
      description,
      price: prices[0],
      location: locations[0],
      duration: durations[0],
      rating: ratings[0],
      highlights,
      imageUrl,
    };
  };

  const handleBookNow = () => {
    // =====Navigate to login page with place and tour details=====//
    navigate("/login", { state: { selectedPlace, tourDetails } });
  };

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "40px auto",
        padding: "0 20px",
        fontFamily: "sans-serif",
      }}
    >
      <h2>🌍 Find & Book Your Next Destination</h2>

      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search your destination place..."
        style={{
          padding: "10px 12px",
          width: "90%",
          fontSize: "16px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          marginTop: "10px",
        }}
      />

      {error && <p style={{ color: "red", marginTop: "8px" }}>{error}</p>}

      <ul style={{ listStyle: "none", padding: 0, marginTop: "12px" }}>
        {results.map((item, idx) => (
          <li
            key={idx}
            onClick={() => handlePlaceClick(item)}
            style={{
              padding: "8px",
              borderBottom: "1px solid #eee",
              cursor: "pointer",
            }}
          >
            {item.display_name}
          </li>
        ))}
      </ul>

      {selectedPlace && tourDetails && (
        <div
          style={{
            marginTop: "24px",
            padding: "20px",
            borderRadius: "6px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            background: "#fff",
          }}
        >
          <h3>📍 {selectedPlace.display_name}</h3>
          <p>
            <strong>Lat:</strong> {selectedPlace.lat} <strong>Lon:</strong>
            {selectedPlace.lon}
          </p>

          <img
            src={tourDetails.imageUrl}
            alt={selectedPlace.display_name}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "6px",
              marginTop: "16px",
            }}
          />

          <div style={{ marginTop: "20px" }}>
            <h4>🧳 Tour Details</h4>
            <p>
              <strong>Title:</strong> {tourDetails.title}
            </p>
            <p>
              <strong>Description:</strong> {tourDetails.description}
            </p>
            <p>
              <strong>Price:</strong> {tourDetails.price}
            </p>
            <p>
              <strong>Location:</strong> {tourDetails.location}
            </p>
            <p>
              <strong>Duration:</strong> {tourDetails.duration}
            </p>
            <p>
              <strong>Rating:</strong> {tourDetails.rating}
            </p>

            <p>
              <strong>Highlights:</strong>
            </p>
            <ul>
              {tourDetails.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          </div>

          <button
            onClick={handleBookNow}
            style={{
              marginTop: "20px",
              padding: "12px 24px",
              fontSize: "16px",
              color: "#fff",
              backgroundColor: "#007bff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Book Now
          </button>
        </div>
      )}
    </div>
  );
};

export default PlaceSearch;
