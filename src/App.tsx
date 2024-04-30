import { FC } from "react";
import { Welcome } from "./components/welcome/welcome";
import "./index.css";

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
