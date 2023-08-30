import "../Calculator Options/OptionCard.css";

export const OptionCard = ({ optionName, optionImage, optionDescription }) => {
  return (
    <div
      className="optionCardDiv"
      style={{
        backgroundColor: optionImage
      }}
    >
      <h3 className="optionCardHeader">{optionName}</h3>
      <p className="optionCardDescription">{optionDescription}</p>
    </div>
  );
};
