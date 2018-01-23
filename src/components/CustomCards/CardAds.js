import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';

const styles = {
    cardContainer: {
        height: '120px',
        paddingLeft: '10px'
    },
    icon: {
        paddingTop: '12px'
    },
    profileContainer: {
        paddingTop: '15px',
        width: '150px'
    },
    title: {
        fontWeight: 'bold'
    },
    descriptionContainer: {
        paddingBottom: '5px'
    }
}

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