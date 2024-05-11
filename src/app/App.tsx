import { FC } from "react";
import { Welcome } from "../pages/Welcome/welcome";
import "./styles/index.css";

const App: FC = () => {
  return (
    <>
      <div className="hidden sm-block">
        <Welcome />
      </div>
    </>
  );
};

export default App;

//https://ivr-urfu.vercel.app/
