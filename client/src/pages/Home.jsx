import ChooseUs from "../components/ChooseUs"
import Banner from "../components/Banner"
import ProductHighlight from "../components/ProductHighlight"
import BrowseCategory from "../components/Category";
import Explore from "../components/Explore";
import NoHeader from "../components/NoHeader";
import NewArrival from "../components/NewArrival"
import Blogs from "../components/Blogs";
import Review from "../components/Reviews";


const Home = () => {
  return (
    <>
      <Banner />
      <Explore />
      <NewArrival />
      <ChooseUs />
      <ProductHighlight />
      <BrowseCategory />
      <NoHeader />
      <Review />
      <Blogs />
    </>
  );
};

export default Home;
