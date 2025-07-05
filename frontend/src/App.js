import { useState } from "react";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [businessData, setBusinessData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/business-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, location }),
      });
      const data = await res.json();
      setBusinessData(data);
    } catch (err) {
      console.error(err);
    }
  };

  const regenerateHeadline = async () => {
    try {
      const res = await fetch(`http://localhost:5000/regenerate-headline?name=${name}&location=${location}`);
      const data = await res.json();
      setBusinessData({ ...businessData, headline: data.headline });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h1>Mini Local Business Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Business Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {businessData && (
        <div className="card">
          <h2>{name} - {location}</h2>
          <p>Google Rating: {businessData.rating}</p>
          <p>Number of Reviews: {businessData.reviews}</p>
          <p>SEO Headline: {businessData.headline}</p>
          <button onClick={regenerateHeadline}>Regenerate SEO Headline</button>
        </div>
      )}
    </div>
  );
}
