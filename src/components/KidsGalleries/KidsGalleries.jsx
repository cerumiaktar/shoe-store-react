import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import KidsGallery from "../KidsGallery/KidsGallery";


const KidsGalleries = () => {
    const [kidsGalleries, setKidsGalleries] = useState([]);

    const [displayKids, setDisplayKids] = useState([4])

    useEffect(() =>{
        fetch('kids.json')
        .then(res =>res.json())
        .then(data =>setKidsGalleries(data))
    } ,[])
    return (
        <div className="container mx-auto mb-12">
            <div className="flex justify-between item-center mb-6">
                <h1 className="text-2xl font-medium">Kids Gallery</h1>
                <p className="text-xl"><Link to='/kids'>See all</Link></p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {
                    kidsGalleries.slice(0, displayKids).map(kidGallery =><KidsGallery kidGallery ={kidGallery}></KidsGallery>)
                }
            </div>
        </div>
    );
};

export default KidsGalleries;