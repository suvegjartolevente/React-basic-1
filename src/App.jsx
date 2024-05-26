import "./App.css";
import { DrinkButtons } from "./components/DrinkButtons";

export const App = () => {
  const greeting = "Hello welcome !!!  Would you like a cup of coffie?";
  const description = (
    <p>This app is going to change your life. - I hope so ! :)</p>
  );
  return (
    <div>
      <h1>Hello user</h1>
      <DrinkButtons />
      <p>{greeting}</p>
      <p>{description}</p>
    </div>
  );
};
