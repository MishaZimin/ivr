import { FC } from "react";
// import { RandomWebcam } from "./components/random-webcamera";
import { StendCamera } from "./components/stend-camera";

// import { WebcamComponent } from "./components/webcam";

import { PageHeader } from "./components/layouts/header/page-header";

const App: FC = () => {
    return (
        <div className="flex flex-col">
            <PageHeader />
            {/* <RandomWebcam /> */}
            <StendCamera />
        </div>
    );
};

export default App;
