import DriverList from "../components/rounds/DriverList";
import { useEffect, useState } from "react";
import axios from "axios";

function RoundResultsPage() {
  const [round, setRound] = useState("");
  const [year, setYear] = useState("");
  const [roundResults, setRoundResults] = useState([]);

  useEffect(() => {
    axios
      .get("http://ergast.com/api/f1/2008/5/results.json")
      .then((response) => {
        setRoundResults(response.data.MRData.RaceTable.Races[0].Results);
        console.log(roundResults);
      });
  }, [year, round]);

  const handleYearChange = (event) => {
    setRound(event.target.value);
  };

  const handleRoundChange = (event) => {
    setRound(event.target.value);
  };

  return (
    <section>
      <h1>Round Results in Year</h1>
      {/* Update year based on user input */}
      <div>
        <label htmlFor="year">Select a Year between 1950 and 2022: </label>
        <input
          type="number"
          min="1950"
          max="2022"
          id="year"
          required
          onChange={handleYearChange}
        />
      </div>
      <div>
        <label htmlFor="round">Select a Round between 1 and 25: </label>
        <input
          type="number"
          id="round"
          min="1"
          max="25"
          onChange={handleRoundChange}
          required
        />
      </div>
      <DriverList roundResults={roundResults} />
    </section>
  );
}

export default RoundResultsPage;
