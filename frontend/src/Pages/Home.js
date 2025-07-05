import React, { useState } from "react";
import DestinationCard from "../Components/DestinationCard";
import destinations from "../Data/Destinations";
import PlaceSearch from "./PlaceSearch";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDestinations = destinations.filter((dest) =>
    dest.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
    <PlaceSearch/>
      <h2 className="mb-4">Popular Destinations</h2>

      {/*==== Search Input ==== */}
      <input
        type="text"
        className="form-control mb-4 w-25"
        placeholder="Search destinations..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="row">
        {filteredDestinations.map((dest) => (
          <DestinationCard key={dest.id} {...dest} />
        ))}
      </div>
    </div>
  );
}

export default Home;
