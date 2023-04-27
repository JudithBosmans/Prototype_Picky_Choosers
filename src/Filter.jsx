import React, { useState } from "react";
import PollCard from "./Filter";
import { dummyData } from "./data";

function PollList() {
  // Maakt de array polls and vult die me data dummyData
  const [polls] = useState(dummyData);
  const [loading] = useState(false);

  // Drei functies hieronder filteren polls data met find method, passen da nr setshowpolls en die zetten showpolls variable nr een array die da object heeft
  function showA() {
    const A = polls.find((e) => e.name === "Ponyo");
    setShowPolls([A]);
  }

  function showB() {
    const B = polls.filter((e) => e.name === "Spirited Away");
    setShowPolls(B);
  }

  function showC() {
    const C = polls.filter((e) => e.name === "My Neighbour Totoro");
    setShowPolls(C);
  }

  // State om data te filteren en showpolls te updaten
  const [showPolls, setShowPolls] = useState([]);

  if (loading) {
    return <div>Loading...</div>;
  }

  // displayed A, B of C wnr geclicked. Gebruikt map function om PollCard te renderen. Rendert div me info uit eerste object in showpolss array.
  return (
    <div className="polls">
      <button onClick={() => showA()}>A</button>
      <button onClick={() => showB()}>B</button>
      <button onClick={() => showC()}>C</button>
      {showPolls.map((poll) => (
        <div key={poll.name}>
          <PollCard poll={poll} />
          <hr style={{ opacity: ".1" }} />
        </div>
      ))}

      <div className="card">
        <h1>{showPolls[0]?.name}</h1>
        <h2>{showPolls[0]?.director}</h2>
        <img src={showPolls[0]?.img} />
      </div>
    </div>
  );
}

export default PollList;
