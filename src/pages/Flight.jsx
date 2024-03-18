import React, { useState, useEffect } from "react";
import axios from "axios";
import citiesData from "../assets/Cities.json";
function FlightSearch() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // Set cities data when component mounts
    setCities(Object.entries(citiesData));
  }, []);

  const handleSearch = async () => {
    try {
      let url =
        "http://ec2-16-16-169-211.eu-north-1.compute.amazonaws.com:8000/flights?";

      const response = await axios.get(url);
      if (response.status === 200) {
        setResults(response.data);
        setError(null);
      } else {
        setError("API request failed");
        setResults(null);
      }
    } catch (error) {
      setError(error.message);
      setResults(null);
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>Flight Search</h2>
      <div style={{ marginBottom: "10px" }}>
        <label
          style={{
            display: "block",
            marginBottom: "5px",
            fontWeight: "bold",
            color: "#555",
          }}
        >
          From:
        </label>
        <input
          style={{
            width: "100%",
            padding: "8px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "3px",
          }}
          type="text"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          list="citiesList"
        />
        <datalist id="citiesList">
          <option value="">All Cities</option>
          {cities.map(([code, name]) => (
            <option key={code} value={name}></option>
          ))}
        </datalist>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label
          style={{
            display: "block",
            marginBottom: "5px",
            fontWeight: "bold",
            color: "#555",
          }}
        >
          To:
        </label>
        <input
          style={{
            width: "100%",
            padding: "8px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "3px",
          }}
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          list="citiesList"
        />
        <datalist id="citiesList">
          <option value="">All Cities</option>
          {cities.map(([code, name]) => (
            <option key={code} value={name}></option>
          ))}
        </datalist>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label
          style={{
            display: "block",
            marginBottom: "5px",
            fontWeight: "bold",
            color: "#555",
          }}
        >
          Travel Date:
        </label>
        <input
          style={{
            width: "100%",
            padding: "8px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "3px",
          }}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button
        style={{
          display: "block",
          width: "100%",
          padding: "10px",
          marginTop: "20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "3px",
          cursor: "pointer",
        }}
        onClick={handleSearch}
      >
        Search
      </button>
      {error && (
        <p style={{ color: "#ff0000", fontWeight: "bold" }}>Error: {error}</p>
      )}
      {results && (
        <div>
          <h3 style={{ marginTop: "20px", color: "#333" }}>Results:</h3>
          <pre
            style={{
              maxHeight: "200px",
              overflowY: "auto",
              padding: "10px",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "3px",
            }}
          >
            {JSON.stringify(results, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default FlightSearch;
