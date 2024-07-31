import Link from "next/link";

const Footer = () => {
    return (
        <div className="fixed bottom-0 bg-[#2B3743] py-3 mt-10 text-center">
            <p className="font-thin text-xs">Built with NextJs</p>
            <p className="text-xs">by</p>
            <div className="flex flex-col">
                <Link className="text-xs" href={'https://github.com/Wondahs'}>
                    Wonders Victor
                </Link>
                {/* <span className="text-xs">{new Date().getFullYear()}</span> */}
            </div>
        </div>
    );
}

export default Footer;
