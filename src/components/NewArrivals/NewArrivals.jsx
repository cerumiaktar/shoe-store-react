import { useEffect, useState } from "react";
import NewArrival from "../NewArrival/NewArrival";
import { Link } from "react-router-dom";


const NewArrivals = () => {
    const [newArrivals, setNewArrivals] = useState([]);

    const [displayNew, setDisplayNew] = useState([4])

    useEffect(() => {
        fetch('new.json')
            .then(res => res.json())
            .then(data => setNewArrivals(data))
    }, [])
    return (
        <div className="container mx-auto mb-12">
            <div className="flex justify-between item-center mb-6">
                <h1 className="text-2xl font-medium">New Arrivals</h1>
                <p className="text-xl"><Link to='/products'>See all</Link></p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {
                    newArrivals.slice(0, displayNew).map(newArrival =><NewArrival newArrival={newArrival}></NewArrival>)
                }
            </div>
        </div>
    );
};

export default NewArrivals;