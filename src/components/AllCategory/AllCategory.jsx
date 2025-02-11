import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllCate from "../AllCate/AllCate";


const AllCategory = () => {
     
    const [allCategories, setAllCategories] = useState([])

    useEffect(() =>{
        fetch('categories.json')
        .then(res =>res.json())
        .then(data =>setAllCategories(data))
    } ,[])
    return (
        <div className="container mx-auto mt-12">
            <h1 className="text-2xl font-medium text-center mb-8">All Categories</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {
                    allCategories.map(allCategory =><AllCate allCategory = {allCategory}></AllCate>)
                }
            </div>
        </div>
    );
};

export default AllCategory;