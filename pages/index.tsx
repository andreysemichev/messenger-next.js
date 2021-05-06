import Welcome from "components/registration/Welcome";
import EnterUsername from "components/registration/EnterUsername";
import Twitter from "components/registration/Twitter";
import ChooseAvatar from "components/registration/ChooseAvatar";
import EnterPhone from "components/registration/EnterPhone";
import EnterCode from "components/registration/EnterCode";
import { createContext, useState } from "react";

const stepsComponents = {
    0: Welcome,
    1: EnterUsername,
    2: Twitter,
    3: ChooseAvatar,
    4: EnterPhone,
    5: EnterCode,
};

type MainContextProps = {
    onNextStep: () => void,
    step: number,
};

export const MainContext = createContext<MainContextProps>({} as MainContextProps);

function Home() {
    const [step, setStep] = useState<number>(0);
    const Step = stepsComponents[step];

    const onNextStep = () => {
        setStep(step + 1);
    };

    return (<>
        <MainContext.Provider value={{step, onNextStep}}>
            <Step />
        </MainContext.Provider>
    </>);
}

export default Home;
