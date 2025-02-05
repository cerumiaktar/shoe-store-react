import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Accessory from "../Accessory/Accessory";


const Accessories = () => {
    const [accessories, setAccessories] = useState([]);

    const [displayAccessories, setDisplayAccessories] = useState([4])

    useEffect(() =>{
        fetch('accessories.json')
        .then(res =>res.json())
        .then(data =>setAccessories(data))
    } ,[])
    return (
        <div className="container mx-auto mb-12">
            <div className="flex justify-between item-center mb-6">
                <h1 className="text-2xl font-medium">Accessories</h1>
                <p className="text-xl"><Link to='/products'>See all</Link></p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {
                    accessories.slice(0, displayAccessories).map(accessory =><Accessory accessory={accessory}></Accessory>)
                }
            </div>
        </div>
    );
};

export default Accessories;