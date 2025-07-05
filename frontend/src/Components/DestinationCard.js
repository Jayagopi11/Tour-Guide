import React from "react";
import { Link } from "react-router-dom";

function DestinationCard({ id, title, image, price }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img
          src={image}
          alt={title}
          className="card-img-top"
          style={{
            width: "100%",
            maxWidth: "700px",
            height: "300px",
            display: "block",
            margin: "0 auto",
            borderRadius: "8px",
          }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-success">₹{price}</p>
          <Link to={`/destination/${id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;

