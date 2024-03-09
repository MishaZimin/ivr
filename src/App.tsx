import { FC } from "react";
import { Button } from "./components/button";
// import { WebcamComponent } from "./components/webcam";

import { PageHeader } from "./layouts/page-header";

const App: FC = () => {
    return (
        <div className=" max-h-screen flex flex-col">
            <PageHeader />
            {/* <WebcamComponent /> */}
            <Button />
        </div>
    );
};

export default App;
