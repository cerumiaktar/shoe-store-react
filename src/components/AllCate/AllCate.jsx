

const AllCate = ({ allCategory }) => {
    const { img, title } = allCategory;
    return (
        <div>
            <div className='border border-[#FAD7DB] bg-white shadow-xl text-center py-8 rounded-xl'>
                <img className='w-20 h-20 mx-auto' src={img} alt="" />
                <h1 className='font-medium text-2xl'>{title}</h1>
            </div>
        </div>
    );
};

export default AllCate;