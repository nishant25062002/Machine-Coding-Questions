import React, { useEffect, useState } from "react";
import "./Counter.css";
const InputField = ({ disabled, placeholder, type, value, onChange }) => (
  <input
    disabled={disabled}
    placeholder={placeholder}
    type={type}
    value={value}
    onChange={(e) => onChange(Math.max(0, parseInt(e.target.value) || 0))}
    aria-label={placeholder}
  />
);

const Counter = () => {
  const [start, setStart] = useState(false);
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [second, setSecond] = useState('');

  useEffect(() => {
    if (!start) return;

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
  }, [second, start, minute, hour]);

  const handleStart = () => {
    if (hour > 0 || minute > 0 || second > 0) setStart(true);
  };

  const handleReset = () => {
    setHour('');
    setMinute('');
    setSecond('');
    setStart(false);
  };

  return (
    <div className="counter">
      <h1>Counter Timer</h1>
      <div className="counterInput">
        <InputField
          disabled={start}
          placeholder="hour"
          value={hour}
          onChange={setHour}
        />
        <InputField
          disabled={start}
          placeholder="minute"
          value={minute}
          onChange={setMinute}
        />
        <InputField
          disabled={start}
          placeholder="second"
          value={second}
          onChange={setSecond}
        />

        {start ? (
          <button onClick={() => setStart(false)} className="pauseBtn">
            Pause
          </button>
        ) : (
          <button onClick={handleStart} className="startBtn">
            Start
          </button>
        )}

        {(hour > 0 || minute > 0 || second > 0) && (
          <button onClick={handleReset} className="resetBtn">
            Reset
          </button>
        )}
      </div>

      <div className="counterShow" aria-live="polite">
        {String(hour).padStart(2, "0")} : {String(minute).padStart(2, "0")} :{" "}
        {String(second).padStart(2, "0")}
      </div>
    </div>
  );
};

export default Counter;
