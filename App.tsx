
import React, { useState, useEffect } from "react";
import MatchCard from "./components/MatchCard";
import mockData from "./mockData";

export default function App() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    setMatches(mockData);
  }, []);

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-xl font-bold text-center mb-4">⚽ Akıllı Maç Tahminleri</h1>
      {matches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
  );
}
