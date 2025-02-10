
import Banner from './Banner';
import Brand from './Brand';
import CardDonate from './CardDonate';
import Faq from './Faq';
import LearnCareHub from './LearnCareHub';
import Stats from './Stats';
import StopPoverty from './StopPoverty';
import TrendingCauses from './TrendingCauses';

const Home = () => {
     return (
          <div>

               <Banner></Banner>

               <div className='max-w-7xl mx-auto'>
               <CardDonate></CardDonate>
               <LearnCareHub></LearnCareHub>
               <TrendingCauses></TrendingCauses>
               </div>

               <div className=''>
               <StopPoverty></StopPoverty>
               </div>

               <div className='max-w-7xl mx-auto'>
               <Faq></Faq>
               <Brand></Brand>
               <Stats></Stats>
               </div>

          </div>
     );
};

export default Home;