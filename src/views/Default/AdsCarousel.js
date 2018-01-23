import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import Card,{CardContent} from 'material-ui/Card';
import CardAds from '../../components/CustomCards/CardAds';
import demoImage from '../ImageAssets/ipAvatar/HH_ChanHouNam.jpg';
import ads1 from '../ImageAssets/demoAds/ads1.jpg';
import ads2 from '../ImageAssets/demoAds/ads2.jpg';
import ads3 from '../ImageAssets/demoAds/ads3.jpg';

const isMobile=(width)=> width <=500;

const demoAds = [
  { id: 1, code: 'ads1', desc: 'First advertisement description for demo....'},
  { id: 2, code: 'ads2', desc: 'Second advertisement description for demo....'},
  { id: 3, code: 'ads3', desc: 'Third advertisement description for demo....'},
  { id: 4, code: 'ads1', desc: 'First advertisement description for demo....'},
]

const getDemoAdsImage=(code)=>{
  switch (code) {
    case 'ads1':
      return ads1;
    case 'ads2':  
      return ads2;
    case 'ads3':
      return ads3;  
    default:
      break;
  }
}
export default class AdsCarousel extends React.Component {
    constructor(){
      super();
      this.state = {
        width: window.innerWidth
      }
    }

    handleWindowSizeChange = () => {
      this.setState({width: window.innerWidth });
    }


    createAds = () => demoAds.map((ads)=> {
       return (
         <div key={ads.id} style={{ height: '120px' }}>
                <Card>
                   <CardAds 
                     adsImage={getDemoAdsImage(ads.code)}
                     adsText={ads.desc}
                    />  
                 </Card> 
          </div>
       )
    })

    createChildren = n => range(n).map(i => (
      <div key={i} style={{ height: '120px' }}>
                <Card>
                   <CardAds 
                     adsImage={demoImage}
                     adsText={'Teddy Boy'}
                    />  
                 </Card> 
      </div>
    ));

    changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

    
    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange)
        this.setState({
          children: [],
          activeItemIndex: 0,
        });
    
        setTimeout(() => {
          this.setState({
            children: this.createAds()
          })
        }, 100);
    }
    
    componentWillUnmount(){
       window.removeEventListener('resize', this.handleWindowSizeChange );
    }

    render(){
        const {
            activeItemIndex,
            children,
            width
          } = this.state;
          console.log('isMobile '+isMobile(width))
          return (
            <ItemsCarousel
              // Placeholder configurations
              enablePlaceholder
              numberOfPlaceholderItems={3}
              minimumPlaceholderTime={1000}
              placeholderItem={<div style={{ height: 200 }}>Placeholder</div>}
      
              // Carousel configurations
              numberOfCards={isMobile(width)?1:3}
              gutter={3}
              //showSlither={true}
              firstAndLastGutter={false}
              freeScrolling={true}
      
              // Active item configurations
              requestToChangeActive={this.changeActiveItem}
              activeItemIndex={activeItemIndex}
              activePosition={'center'}
      
              chevronWidth={24}
              rightChevron={'>'}
              leftChevron={'<'}
              outsideChevron={true}
            >
              {children}
            </ItemsCarousel>
          );  
    }
}