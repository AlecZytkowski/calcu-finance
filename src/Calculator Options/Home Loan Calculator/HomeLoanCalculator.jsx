import React, { useState } from 'react';
import './HomeLoanCalculator.css'

export const HomeLoanCalculator = () => {

  const [loanTerm, setLoanTerm] = useState(30);
  const [loanAmount, setLoanAmount] = useState(100000);
  const [downPaymentPercentage, setDownPaymentPercentage] = useState(3);
  const [calculatedResult, setCalculatedResult] = useState(null);

  const calculateLoanDetails = (loanAmount, loanTermYears, annualInterestRate) => {
    const monthlyInterestRate = annualInterestRate / 12 / 100;
    
    const totalPayments = loanTermYears * 12;
    
    const denominations = Math.pow(1 + monthlyInterestRate, totalPayments) - 1;

    const effectiveLoanAmount = loanAmount - (loanAmount * downPaymentPercentage / 100);

    const monthlyPayment = (effectiveLoanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments))) / denominations;

  return { monthlyPayment };
};

  const handleLoanCalculation = () => {
    const result = calculateLoanDetails(loanAmount, loanTerm, 7.292);
    setCalculatedResult(result);
  };

  return (
    <div className="homeLoanCalculatorDiv">
      <h1>Home Loan Calculator</h1>
      <div className="calculatorItem">
        <label>Loan Term: </label>
        <select value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)}>
          <option value={30}>30 year fixed</option>
          <option value={20}>20 year fixed</option>
          <option value={15}>15 year fixed</option>
        </select>
      </div>
      <div className="calculatorItem">
        <label>Price: </label>
        <select value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)}>
          <option value={50000}>$50,000</option>
          <option value={100000}>$100,000</option>
          <option value={200000}>$200,000</option>
          <option value={300000}>$300,000</option>
          <option value={400000}>$400,000</option>
          <option value={500000}>$500,000</option>
          <option value={600000}>$600,000</option>
          <option value={700000}>$700,000</option>
          <option value={800000}>$800,000</option>
          <option value={900000}>$900,000</option>
          <option value={1000000}>$1,000,000</option>
        </select>
      </div>
      <div className="calculatorItem">
        <label>Down Payment: </label>
        <select value={downPaymentPercentage} onChange={(e) => setDownPaymentPercentage(e.target.value)}>
          <option value={3}>3%</option>
          <option value={5}>5%</option>
          <option value={10}>10%</option>
          <option value={15}>15%</option>
          <option value={20}>20%</option>
          <option value={25}>25%</option>
          <option value={30}>30%</option>
          <option value={35}>35%</option>
          <option value={40}>40%</option>
        </select>
      </div>
      <button onClick={handleLoanCalculation}>Calculate</button>
      {calculatedResult && (
        <div>
          <h3>Estimated Monthly Mortgage Payment:</h3>
          <p><i>Based in the current interest rate of ~7%</i></p>
          <h1>${calculatedResult.monthlyPayment.toFixed(2)}</h1>
        </div>
      )}
    </div>
  );
};