;
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import HotItems from '../HotItems/HotItems';
import KidsGalleries from '../KidsGalleries/KidsGalleries';
import NewArrivals from '../NewArrivals/NewArrivals';
import WomenGalleries from '../WomenGalleries/WomenGalleries';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <HotItems></HotItems>
            <NewArrivals></NewArrivals>
            <WomenGalleries></WomenGalleries>
            <KidsGalleries></KidsGalleries>
        </div>
    );
};

export default Home;