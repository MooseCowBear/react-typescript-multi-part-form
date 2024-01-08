import desktopImg from "../assets/bg-sidebar-desktop.svg";
import mobileImg from "../assets/bg-sidebar-mobile.svg";
import { SidebarButton } from "../components/SidebarButton";

type SidebarProps = {
  currentStep: number;
  setStep: (stepNum: number) => void;
};

export function Sidebar({ currentStep, setStep }: SidebarProps) {
  return (
    <div className="relative">
      <img src={desktopImg} alt="background" className="hidden md:block" />
      <img src={mobileImg} alt="background" className="block md:hidden" />
      <div className="absolute top-1/4 left-1/2 md:translate-y-[-40%] translate-x-[-50%] md:translate-x-[-60%] flex md:flex-col gap-6">
        <SidebarButton
          currentStep={currentStep}
          num={1}
          heading="Your Info"
          setStep={setStep}
        />
        <SidebarButton
          currentStep={currentStep}
          num={2}
          heading="Select Plan"
          setStep={setStep}
        />
        <SidebarButton
          currentStep={currentStep}
          num={3}
          heading="Add Ons"
          setStep={setStep}
        />
        <SidebarButton
          currentStep={currentStep}
          num={4}
          heading="Summary"
          setStep={setStep}
        />
      </div>
    </div>
  );
}
