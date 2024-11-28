import React, { useState } from "react";
import "./Mortgage.css";

const InputField = ({
  disabled = false,
  placeholder = "Enter ...",
  type = "number",
  onChange,
}) => (
  <div className="inputField">
    <div>{placeholder}</div>
    <input
      disabled={disabled}
      placeholder={placeholder}
      type={type}
      onChange={(e) => onChange(Math.max(0, parseInt(e.target.value) || 0))}
      aria-label={placeholder}
    />
  </div>
);

const Mortgage = () => {
  const [principalAmt, setPrincipalAmt] = useState(0);
  const [interestRate, setInterestRate] = useState();
  const [length, setLength] = useState(0);

  const [monthlyAmt, setMonthAmt] = useState(0);

  const calulate = () => {
    const r = interestRate / 1200;
    const p = principalAmt;
    const n = length * 12;
    const ans =
      r === 0 ? p / n : (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    setMonthAmt(ans);
  };

  return (
    <div className="mortgage">
      <div className="mortgageBox">
        <h1>Mortgage Calculator</h1>
        <InputField
          placeholder="Principal loan amount"
          onChange={setPrincipalAmt}
        />
        <InputField placeholder="Interest rate %" onChange={setInterestRate} />
        <InputField placeholder="Length of loan(years)" onChange={setLength} />
        <button onClick={calulate}>Calculate</button>

        <div className="mortgageText">
          Your monthly mortgage payment will ${monthlyAmt.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default Mortgage;
