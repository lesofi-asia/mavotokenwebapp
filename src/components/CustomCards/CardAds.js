import React from 'react';
import PropTypes from 'prop-types';

const CardAds=({adsImage, adsText})=>{
    return (
        <div className='cardAdsContainer'>
            <img src={adsImage} className='adsImage' />
            <div className='adsText'>{adsText}</div>
        </div>   
     )
}

CardAds.propTypes = {
    adsImage: PropTypes.string.isRequired,
    adsText: PropTypes.string.isRequired
}

export default CardAds;