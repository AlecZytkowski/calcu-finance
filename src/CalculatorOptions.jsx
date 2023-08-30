import "./CalculatorOptions.css";
import { useState } from "react";
import { OptionCard } from "./OptionCard";
import { HomeLoanCalculator } from "./HomeLoanCalculator";
import { AutoLoanCalculator } from "./AutoLoanCalculator";
import { RefinanceCalculator } from "./RefinanceCalculator";

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
            optionDescription="An efficient and user-friendly solution to quickly estimate the approximate monthly mortgage payment."
          />
        </div>
        <div onClick={(e) => setSelectedOption("autoCalc")}>
          <OptionCard
            optionName="Auto Loan"
            optionDescription="This is your second option"
          />
        </div>
        <div onClick={(e) => setSelectedOption("refinanceCalc")}>
          <OptionCard
            optionName="Refinancing"
            optionDescription="This is your third option"
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

  if (selectedOption === "refinanceCalc") {
    return (
      <>
        <RefinanceCalculator />
        <button onClick={resetSelection}>Go Back</button>
      </>
    );
  }
};
