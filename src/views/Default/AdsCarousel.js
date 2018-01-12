import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import Card,{CardContent} from 'material-ui/Card';
import CardAds from '../../components/CustomCards/CardAds';

export default class AdsCarousel extends React.Component {
    
    createChildren = n => range(n).map(i => (
      <div key={i} style={{ height: '120px' }}>
                <Card>
                   <CardAds 
                     ipAvatar={'/img/avatars/HH_ChanHouNam.jpg'}
                     ipCode={'TDB'}
                     ipName={'Teddy Boy'}
                    />  
                 </Card> 
      </div>
    ));

    changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

    
    componentWillMount() {
        this.setState({
          children: [],
          activeItemIndex: 0,
        });
    
        setTimeout(() => {
          this.setState({
            children: this.createChildren(20),
          })
        }, 100);
    }
    
    
    render(){
        const {
            activeItemIndex,
            children,
          } = this.state;

          return (
            <ItemsCarousel
              // Placeholder configurations
              enablePlaceholder
              numberOfPlaceholderItems={5}
              minimumPlaceholderTime={1000}
              placeholderItem={<div style={{ height: 200 }}>Placeholder</div>}
      
              // Carousel configurations
              numberOfCards={3}
              gutter={12}
              showSlither={true}
              firstAndLastGutter={true}
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