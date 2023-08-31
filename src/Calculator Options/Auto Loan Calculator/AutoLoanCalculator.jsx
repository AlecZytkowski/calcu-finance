import React, { useState } from 'react';
import './AutoLoanCalculator.css'

export const AutoLoanCalculator = () => {

  const [loanTerm, setLoanTerm] = useState(24);
  const [loanAmount, setLoanAmount] = useState(20000);
  const [downPayment, setDownPayment] = useState(0);
  const [calculatedResult, setCalculatedResult] = useState(null);

  const calculateLoanDetails = (loanAmount, loanTermMonths, annualInterestRate, downPayment) => {
    const monthlyInterestRate = annualInterestRate / 12 / 100;
    
    const totalPayments = loanTermMonths;
    
    const denominations = Math.pow(1 + monthlyInterestRate, totalPayments) - 1;

    const effectiveLoanAmount = loanAmount - downPayment;

    const monthlyPayment = (effectiveLoanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments))) / denominations;

  return { monthlyPayment };
};

  const handleLoanCalculation = () => {
    const result = calculateLoanDetails(loanAmount, loanTerm, 7.292, downPayment);
    setCalculatedResult(result);
  };

  return (
    <div className='autoLoanCalculatorDiv'>
      <h1>Auto Loan Calculator</h1>
      <div className="calculatorItem">
        <label>Vehicle Price: </label>
        <input value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)}>
        </input>
      </div>
      <div className="calculatorItem">
        <label>Loan Term: </label>
        <select value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)}>
          <option value={24}>24 months</option>
          <option value={30}>30 months</option>
          <option value={36}>36 months</option>
          <option value={42}>42 months</option>
          <option value={48}>48 months</option>
          <option value={54}>54 months</option>
          <option value={60}>60 months</option>
          <option value={66}>66 months</option>
          <option value={72}>72 months</option>
          <option value={78}>78 months</option>
          <option value={84}>84 months</option>
          <option value={90}>90 months</option>
        </select>
      </div>
      
      <div className="calculatorItem">
        <label>Down Payment or Value of Trade-In: </label>
        <input value={downPayment} onChange={(e) => setDownPayment(e.target.value)}>
        </input>
      </div>
      <button onClick={handleLoanCalculation}>Calculate</button>
      {calculatedResult && (
        <div>
          <h3>Estimated Monthly Vehicle Payment:</h3>
          <h1>${calculatedResult.monthlyPayment.toFixed(2)}</h1>
        </div>
      )}
    </div>
  );
};