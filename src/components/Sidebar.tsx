import desktopImg from "../assets/bg-sidebar-desktop.svg";
import mobileImg from "../assets/bg-sidebar-mobile.svg";
import { SidebarButton } from "./SidebarButton";

type SidebarProps = {
  screen: number;
};

export function Sidebar({ screen }: SidebarProps) {
  return (
    <div className="relative">
      <img src={desktopImg} alt="background" className="hidden md:block" />
      <img src={mobileImg} alt="background" className="block md:hidden" />
      <div className="absolute top-1/4 left-1/2 md:translate-y-[-40%] translate-x-[-50%] md:translate-x-[-60%] flex md:flex-col gap-6">
        <SidebarButton screen={screen} num={1} heading="Your Info" />
        <SidebarButton screen={screen} num={2} heading="Select Plan" />
        <SidebarButton screen={screen} num={3} heading="Add Ons" />
        <SidebarButton screen={screen} num={4} heading="Summary" />
      </div>
    </div>
  );
}
