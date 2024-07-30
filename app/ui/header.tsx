import { DarkMode } from "@/app/ui/icons/darkMode";

const Header = () => {
    return (
        <div className="bg-[#2B3743] border-0 shadow-blue-50 flex flex-row py-5 px-8 items-center">
            <h1 className="font-black mr-auto">Where in the world?</h1>
            <button className="flex flex-row items-center">
                <DarkMode className="mr-1"/>
                <span>Dark Mode</span>
            </button>
        </div>
     );
}
 
export default Header;
