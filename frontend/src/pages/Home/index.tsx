import Banner2 from "./Banner2";
import BannerSection from "./BannerSection";
import BrandLogo from "./BrandLogo";
import FeatureSection from "./FeatureSection";
import FullWidthBanner from "./FullWidthBanner";
import ProductDeal from "./ProductDeal";
import ProductSection from "./ProductSection";
import Slider from "./Slider";

const HomePage = () => {
  return (
    <>
      <Slider />
      <BannerSection />
      <FeatureSection />
      <ProductSection />
      <FullWidthBanner />
      <ProductDeal />
      <Banner2 />
      <BrandLogo />
    </>
  );
};

export default HomePage;
