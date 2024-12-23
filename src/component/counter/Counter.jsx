import React, { useEffect, useState } from "react";
import "./Counter.css";

const InputField = ({ disabled, placeholder, type, onChange }) => (
  <input
    disabled={disabled}
    placeholder={placeholder}
    type={type}
    onChange={(e) => onChange(Math.max(0, parseInt(e.target.value) || 0))}
    aria-label={placeholder}
  />
);

const Counter = () => {
  const [start, setStart] = useState(false);
  const [pause, setPause] = useState(false);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    if (!start || pause) return;

    const timerId = setTimeout(() => {
      if (second > 0) {
        setSecond((prevSeconds) => prevSeconds - 1);
      } else if (minute > 0) {
        setMinute((prev) => prev - 1);
        setSecond(59);
      } else if (hour > 0) {
        setHour((prev) => prev - 1);
        setMinute(59);
        setSecond(59);
      } else {
        setStart(false);
      }
    }, 1000);

    return () => clearTimeout(timerId);
  }, [second, start, minute, hour, pause]);

  const handleStart = () => {
    if (hour > 0 || minute > 0 || second > 0) setStart(true);
    else alert("Invalid Time!");
  };

  const handleReset = () => {
    setHour(0);
    setMinute(0);
    setSecond(0);
    setStart(false);
  };

  return (
    <div className="counter">
      <h1>Counter Timer</h1>
      {!start ? (
        <div className="counterInput">
          <InputField disabled={start} placeholder="HH" onChange={setHour} />
          <InputField disabled={start} placeholder="MM" onChange={setMinute} />
          <InputField disabled={start} placeholder="SS" onChange={setSecond} />

          <button onClick={handleStart} className="startBtn">
            Start
          </button>
        </div>
      ) : (
        <div>
          <div className="counterShow" aria-live="polite">
            {String(hour).padStart(2, "0")} : {String(minute).padStart(2, "0")}{" "}
            : {String(second).padStart(2, "0")}
            <div className="counterBtn">
              {!pause ? (
                <button onClick={() => setPause(!pause)} className="pauseBtn">
                  Pause
                </button>
              ) : (
                <button onClick={() => setPause(!pause)} className="startBtn">
                  Resume
                </button>
              )}
              {(hour > 0 || minute > 0 || second > 0) && (
                <button onClick={handleReset} className="resetBtn">
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Counter;
