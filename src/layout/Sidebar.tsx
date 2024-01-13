import desktopImg from "../assets/bg-sidebar-desktop.svg";
import mobileImg from "../assets/bg-sidebar-mobile.svg";
import { StepIndicator } from "../components/StepIndicator";

export function Sidebar() {
  return (
    <div className="relative md:w-[275px]">
      <img src={desktopImg} alt="background" className="hidden md:block" />
      <img
        src={mobileImg}
        alt="background"
        className="block w-full md:hidden"
      />
      <div className="absolute top-1/4 left-1/2 translate-y-[-40%] md:translate-y-[-40%] translate-x-[-50%] md:translate-x-[-60%] flex md:flex-col gap-4 md:gap-6">
        <StepIndicator num={1} heading="Your Info" />
        <StepIndicator num={2} heading="Select Plan" />
        <StepIndicator num={3} heading="Add Ons" />
        <StepIndicator num={4} heading="Summary" />
      </div>
    </div>
  );
}
