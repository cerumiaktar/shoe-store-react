import { PiMapPinAreaFill } from "react-icons/pi";
import { RiExchangeLine } from "react-icons/ri";
import { GiRunningShoe } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";

const UpperFooter = () => {
    return (
        <div className="container mx-auto mb-12 mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="border bg-white shadow-lg py-8 rounded-lg text-[#D21F34]">
                    <span className="text-5xl flex justify-center"><PiMapPinAreaFill /></span>
                    <h1 className="text-2xl font-medium">Made in Bangladesh</h1>
                </div>
                <div className="border bg-white shadow-lg py-8 rounded-lg text-[#D21F34]">
                    <span className="text-5xl flex justify-center"><RiExchangeLine /></span>
                    <h1 className="text-2xl font-medium">Hassle Free Exchange</h1>
                </div>
                <div className="border bg-white shadow-lg py-8 rounded-lg text-[#D21F34]">
                    <span className="text-5xl flex justify-center"><GiRunningShoe /></span>
                    <h1 className="text-2xl font-medium">Life Long Lasting</h1>
                </div>
                <div className="border bg-white shadow-lg py-8 rounded-lg text-[#D21F34]">
                    <span className="text-5xl flex justify-center"><FaShippingFast /></span>
                    <h1 className="text-2xl font-medium">Cash on Delivery</h1>
                </div>
            </div>
        </div>
    );
};

export default UpperFooter;