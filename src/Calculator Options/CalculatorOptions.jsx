import "../Calculator Options/CalculatorOptions.css";
import { useState } from "react";
import { OptionCard } from "./OptionCard";
import { HomeLoanCalculator } from "../Calculator Options/Home Loan Calculator/HomeLoanCalculator";
import { AutoLoanCalculator } from "../Calculator Options/Auto Loan Calculator/AutoLoanCalculator";

export const CalculatorOptions = () => {
  const [selectedOption, setSelectedOption] = useState("defaultOption");

  const resetSelection = () => {
    setSelectedOption("defaultOption");
  };

  if (selectedOption === "defaultOption") {
    return (
      <div className="calculatorOptionsDiv">
        <div onClick={(e) => setSelectedOption("financeCalc")}>
          <OptionCard
            optionName="Home Finance"
            optionDescription="An efficient and user-friendly solution to quickly estimate your approximate monthly mortgage payment."
          />
        </div>
        <div onClick={(e) => setSelectedOption("autoCalc")}>
          <OptionCard
            optionName="Auto Loan"
            optionDescription="A  tool designed to provide you with quick and accurate insights into your potential monthly auto loan payments."
          />
        </div>
      </div>
    );
  }

  if (selectedOption === "financeCalc") {
    return (
      <>
        <HomeLoanCalculator />
        <button onClick={resetSelection}>Go Back</button>
      </>
    );
  }

  if (selectedOption === "autoCalc") {
    return (
      <>
        <AutoLoanCalculator />
        <button onClick={resetSelection}>Go Back</button>
      </>
    );
  }
};
