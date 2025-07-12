
import React, { useState } from "react";

export default function MatchCard({ match }) {
  const [show, setShow] = useState(false);

  const predict = () => {
    const homeScore = match.form.home.split("W").length - 1;
    const awayScore = match.form.away.split("W").length - 1;
    if (homeScore > awayScore) return "1 (Ev Sahibi)";
    if (awayScore > homeScore) return "2 (Deplasman)";
    return "X (Beraberlik)";
  };

  return (
    <div className="border p-4 my-2 rounded-md shadow">
      <h2 className="font-semibold text-lg">
        {match.homeTeam} vs {match.awayTeam}
      </h2>
      <p className="text-sm text-gray-600">{match.date}</p>
      <button onClick={() => setShow(!show)} className="mt-2 px-4 py-1 bg-blue-500 text-white rounded">
        {show ? "Gizle" : "Tahmini Göster"}
      </button>
      {show && (
        <div className="mt-2 text-sm space-y-1">
          <p><strong>Form:</strong> {match.homeTeam}: {match.form.home} | {match.awayTeam}: {match.form.away}</p>
          <p><strong>H2H:</strong> {match.h2h}</p>
          <p><strong>Goller:</strong> {match.homeTeam}: {match.goals.homeAvg} - {match.awayTeam}: {match.goals.awayAvg}</p>
          <p><strong>Sakatlar:</strong> {match.injuries.join(", ")}</p>
          <p className="font-bold text-green-600">Tahmin: {predict()}</p>
        </div>
      )}
    </div>
  );
}
