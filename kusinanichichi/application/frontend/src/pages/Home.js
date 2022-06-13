import '../assets/css/Home.css'
import ReviewSection from '../components/ReviewSection'
import BestSellerSection from '../components/BestSellerSection'




function Home() {
  return (
    <div className="homepage">
      <div className="text-center text-muted mb-5">** <u>Please order through our <a className="text-decoration-none" href="https://www.facebook.com/kusinanichichipromisesalasa" target="_blank">Facebook</a> page</u> **</div>
      <BestSellerSection />
      <ReviewSection />
    </div>
  );
};


export default Home;
