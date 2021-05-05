import Welcome from "components/registration/Welcome";
import EnterUsername from "components/registration/EnterUsername";
import Twitter from "components/registration/Twitter";
import ChooseAvatar from "components/registration/ChooseAvatar";
import EnterPhone from "components/registration/EnterPhone";
import EnterCode from "components/registration/EnterCode";
import { useState } from "react";

const stepsComponents = {
    0: Welcome,
    1: EnterUsername,
    2: Twitter,
    3: ChooseAvatar,
    4: EnterPhone,
    5: EnterCode,
};

function Home() {
    const [step, setStep] = useState<number>(5);
    const Step = stepsComponents[step];

    return (<>
        <Step />
    </>);
}

export default Home;
