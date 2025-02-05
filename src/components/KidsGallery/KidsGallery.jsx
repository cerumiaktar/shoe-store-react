

const KidsGallery = ({ kidGallery }) => {
    const { id, img, title, price } = kidGallery;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm ">
                <figure>
                    <img
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="text-xl font-medium">{title}</h2>
                    <p className="text-lg font-medium text-[#D21F34]">${price}</p>
                    <div className="card-actions justify-center">
                        <button className="btn w-full bg-[#FAD7DB]">Add to Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KidsGallery;