import React from 'react';
import Carousel from '../../components/Carousel';
import AdsCarousel from './AdsCarousel';
import IPsList from './IPsList';

// Data for carousel
const carouselSlidesData = [
  {
    content:
      "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.",
    author: "Bane",
    source: "facebook",
    avatar: '/img/avatars/3TT.jpg'
  }, {
    content:
      "You have learn to bury your guilt with anger. I will teach you to confront it and to face the truth.",
    author: "Ra's Al Ghul",
    source: "Snapchat",
    avatar: '/img/avatars/DS_DingYao.jpg'
  }, {
    content:
      "Introduce a little anarchy, upset the established order and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair.",
    author: "Joker",
    source: "facebook"
  }, {
    content:
      "I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.",
    author: "Bruce Wayne",
    source: "facebook"
  }, {
    content:
      "But it's not who you are underneath... it's what you do that defines you.",
    author: "Rachel Dawes",
    source: "twitter"
  }, {
    content:
      "When their enemies were at the gates the Romans would suspend democracy and appoint one man to protect the city. It wasn't considered an honor, it was a public service.",
    author: "John Blake",
    source: "Google+"
  }, {
    content:
      "Master Wayne, you've been gone a long time. You look very fashionable. Apart from the mud.",
    author: "Alfred Pennyworth",
    source: "twitter"
  }
];

export class Default extends React.Component {

    render(){
          return (
            <div className="container" >
                <div className='row'>
                   <br />
                </div>
                {/*
                <div className='row' style={{backgroundColor: '#202020'}}  >
                    <Carousel slides={carouselSlidesData}  />
                </div>  
                */}
                <div className='row'>
                   <AdsCarousel />
                </div>  
                <div className='row'>
                   <br />
                </div>
                <div className='row'>
                   <IPsList />
                </div>
                <div className='row'>
                   <br />
                </div>
            </div>
        )
    }
}

export default Default;