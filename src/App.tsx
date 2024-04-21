import { FC } from "react";
import { Welcome } from "./components/Welcome/welcome";

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
