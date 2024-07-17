import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calcbmi = (e) => {
    e.preventDefault();
    
    // Convert input values to numbers
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    
    if (isNaN(weightNum) || isNaN(heightNum) || weightNum <= 0 || heightNum <= 0) {
      alert("Please enter valid weight and height");
      return;
    }
    
    // Calculate BMI
    const heightInMeters = heightNum / 100; // Convert height from cm to meters
    const bmiValue = weightNum / (heightInMeters * heightInMeters); // BMI formula
    
    setBmi(bmiValue.toFixed(1));
    
    // Set message based on BMI value
    if (bmiValue < 18.5) {
      setMessage("You are underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setMessage("You have a healthy weight");
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setMessage("You are overweight");
    } else {
      setMessage("You are obese");
    }
  };

  const reload = () => {
    // Reset state values to their initial state
    setWeight("");
    setHeight("");
    setBmi("");
    setMessage("");
  };

  return (
    <div className="app">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcbmi}>
          <div>
            <label>Weight (kgs)</label>
            <input
              type="number"
              placeholder="Enter weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (cm)</label>
            <input
              type="number"
              placeholder="Enter height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button
              className="btn btn-outline"
              type="button"
              onClick={reload}
            >
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
