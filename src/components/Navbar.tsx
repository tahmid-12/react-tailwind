import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const handleNav = () => {
        setOpen(!open);
    }

    return (
        <>
            <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
                <h1 className="w-full text-3xl font-bold text-[#00df9a]">Navbar</h1>
                <ul className="hidden md:flex ">
                    <li className="p-4">Company</li>
                    <li className="p-4">Home</li>
                    <li className="p-4">Resources</li>
                    <li className="p-4">About</li>
                    <li className="p-4">Contact</li>
                </ul>
                {/* Mobile View */}
                <div onClick={handleNav} className="block md:hidden">
                    {
                        !open ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />
                    }
                </div>
                <div className={!open ? 'fixed left-[-100%] ease-in-out duration-300 md:hidden' : 'fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-600 bg-[#000300] ease-in-out duration-300 md:hidden'}>
                    <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Navbar</h1>
                    <ul className="flex flex-col uppercase p-4">
                        <li className="p-4 border-b border-gray-600">Company</li>
                        <li className="p-4 border-b border-gray-600">Home</li>
                        <li className="p-4 border-b border-gray-600">Resources</li>
                        <li className="p-4 border-b border-gray-600">About</li>
                        <li className="p-4">Contact</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar