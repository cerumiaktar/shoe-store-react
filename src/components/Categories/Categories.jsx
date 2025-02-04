import { useEffect, useState } from "react";
import Category from "../Category/Category";
import { Link } from "react-router-dom";


const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [categoryLength, setCategoryLength] = useState(6);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="container mx-auto mb-12 mt-12">
            <div>
                <div className="flex justify-between item-center">
                    <h1 className="text-2xl font-medium">Categories</h1>
                    <p className="text-xl"><Link to='/allCategory'>See all</Link></p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mt-8 ">
                    {
                        categories.slice(0, categoryLength).map(category => <Category category={category}></Category>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;