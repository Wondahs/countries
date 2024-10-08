import { DarkMode } from "@/app/ui/icons/darkMode";
import { LightMode } from "./icons/lightMode";
import { clsx } from "clsx";

const Header = ({ nightMode, setNightMode }: { nightMode: boolean, setNightMode: Function }) => {

    const setMode = () => {
        setNightMode(!nightMode);
    }
    return (
        <div className={clsx(" border-0 shadow flex flex-row py-5 px-8 items-center", {
            'bg-[#2B3743] text-white' : nightMode,
            'bg-white text-[#2B3743]' :!nightMode,
        })}>
            <div className="mr-auto"><h1 className="font-black">Where in the world?</h1></div>
            <button onClick={setMode} className="flex flex-row items-center">
                {nightMode ? (
                    <>
                        <DarkMode className="mr-1" />
                        <span className="hidden md:block">Toggle Light Mode</span>
                    </>) : (
                    <>
                        <LightMode className="mr-1" />
                        <span className="hidden md:block">Toggle Dark Mode</span>
                    </>)}
            </button>
        </div>
    );
}

export default Header;
