import { useEffect, useState } from "react";
import HotItem from "../HotItem/HotItem";


const HotItems = () => {
    const [hotItems, setHotItems] = useState([]);

    const [displayData, setDisplayData] = useState([4])
 
    useEffect(() => {
        fetch('hot.json')
            .then(res => res.json())
            .then(data => setHotItems(data))
    }, [])
    return (
        <div className="container mx-auto mb-12">
            <div className="flex justify-between item-center mb-6">
                <h1 className="text-2xl font-medium">Hot Item</h1>
                <p className="text-xl">See all</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {
                    hotItems.slice(0,displayData).map(hotItem =><HotItem hotItem={hotItem}></HotItem>)
                }
            </div>
        </div>
    );
};

export default HotItems;