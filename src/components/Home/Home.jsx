;
import About from '../About/About';
import Accessories from '../Accessories/Accessories';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import HotItems from '../HotItems/HotItems';
import KidsGalleries from '../KidsGalleries/KidsGalleries';
import NewArrivals from '../NewArrivals/NewArrivals';
import UpperFooter from '../UpperFooter/UpperFooter';
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
            <Accessories></Accessories>
            <About></About>
            <UpperFooter></UpperFooter>
        </div>
    );
};

export default Home;