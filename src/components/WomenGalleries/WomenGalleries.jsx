import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WomenGallery from "../WomenGallery/WomenGallery";


const WomenGalleries = () => {
    const [womens, setWomens] = useState([]);

    const [displayProduct, setDisplayProduct] = useState([4])

    useEffect(() => {
        fetch('women.json')
            .then(res => res.json())
            .then(data => setWomens(data))
    }, [])
    return (
        <div className="container mx-auto mb-12">
            <div className="flex justify-between item-center mb-6">
                <h1 className="text-2xl font-medium">Women’s Gallery</h1>
                <p className="text-xl"><Link to='/women'>See all</Link></p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {
                    womens.slice(0, displayProduct).map(women =><WomenGallery women = {women}></WomenGallery>)
                }
            </div>
        </div>
    );
};

export default WomenGalleries;