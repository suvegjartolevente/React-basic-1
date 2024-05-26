import "./DrinkButtons.css";

export const DrinkButtons = () => {
  const button = "Push me!!";

  return (
    <>
      <header>Would you like a tee?</header>
      <div className="button-group">
        <p className="button">Tea</p>
        <p className="buttontwo">Coffe</p>
      </div>

      <p>{button}</p>
    </>
  );
};
