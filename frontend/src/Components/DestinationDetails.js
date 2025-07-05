import React from "react";
import { useParams, Link } from "react-router-dom";
import destinations from "../Data/Destinations";

function DestinationDetails() {
  const { id } = useParams();
  const place = destinations.find((d) => d.id === parseInt(id));

  if (!place) {
    return <h2 className="mt-4 text-center">Destination not found.</h2>;
  }

  return (
    <div className="container mt-4">
      <h2>{place.title}</h2>
      <img
        src={place.image}
        alt={place.title}
        className="img-fluid rounded w-100 mb-3"
      />
      <h4 className="text-success">Price: ₹{place.price}</h4>
      <p><strong>Description:</strong> {place.description}</p>
      <p><strong>Location:</strong> {place.location}</p>
      <p><strong>Duration:</strong> {place.duration}</p>
      <p><strong>Rating:</strong> ⭐ {place.rating}</p>
      <p><strong>Best Time to Visit:</strong> {place.bestTimeToVisit}</p>

      <div className="mb-3">
        <strong>Highlights:</strong>
        <ul>
          {place.highlights.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      <div className="mb-3">
        <strong>Things to Do:</strong>
        <ul>
          {place.thingsToDo.map((thing, index) => (
            <li key={index}>{thing}</li>
          ))}
        </ul>
      </div>

      <Link to="/" className="btn btn-secondary mt-3 mb-4 m-3">
        ← Back to Destinations
      </Link>
      <Link
        to="/login"
        className="btn btn-primary mt-3 mb-4"
        state={{ place }}
      >
        Book Now
      </Link>
    </div>
  );
}

export default DestinationDetails;
