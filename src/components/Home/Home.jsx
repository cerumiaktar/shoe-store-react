;
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import HotItems from '../HotItems/HotItems';
import NewArrivals from '../NewArrivals/NewArrivals';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <HotItems></HotItems>
            <NewArrivals></NewArrivals>
        </div>
    );
};

export default Home;