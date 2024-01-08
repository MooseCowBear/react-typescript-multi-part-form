import desktopImg from "../assets/bg-sidebar-desktop.svg";
import mobileImg from "../assets/bg-sidebar-mobile.svg";
import { SidebarButton } from "../components/SidebarButton";

type SidebarProps = {
  currentStep: number;
};

export function Sidebar({ currentStep }: SidebarProps) {
  return (
    <div className="relative">
      <img src={desktopImg} alt="background" className="hidden md:block" />
      <img src={mobileImg} alt="background" className="block md:hidden" />
      <div className="absolute top-1/4 left-1/2 md:translate-y-[-40%] translate-x-[-50%] md:translate-x-[-60%] flex md:flex-col gap-6">
        <SidebarButton currentStep={currentStep} num={1} heading="Your Info" />
        <SidebarButton
          currentStep={currentStep}
          num={2}
          heading="Select Plan"
        />
        <SidebarButton currentStep={currentStep} num={3} heading="Add Ons" />
        <SidebarButton currentStep={currentStep} num={4} heading="Summary" />
      </div>
    </div>
  );
}
