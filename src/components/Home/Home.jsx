
import Banner from './Banner';
import CardDonate from './CardDonate';
import Faq from './Faq';
import LearnCareHub from './LearnCareHub';

const Home = () => {
     return (
          <div>
               <Banner></Banner>
               <div className='max-w-7xl mx-auto'>
               <CardDonate></CardDonate>
               <LearnCareHub></LearnCareHub>
               <Faq></Faq>
               </div>
          </div>
     );
};

export default Home;