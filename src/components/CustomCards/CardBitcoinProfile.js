import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';

const CardBitcoinProfile=({icon,profileName,email,bitcoinValue})=>{
    return (
            <div className='container cardBitProfileContainer'>
                <div className='row'>
                    <div className='cardBitProfileContainer avatar'>
                        <Avatar src={icon} />
                    </div>
                    <div className='cardBitProfileContainer profileInfo'> 
                        <span className='cardBitProfileContainer title'>{profileName}</span>
                        <br />
                        <span>{email}</span>
                    </div>
                    <div className='cardBitProfileContainer bitcoinInfo'> 
                        <span className='cardBitProfileContainer title'>Estimated Value</span>
                        <br />
                        <span>{bitcoinValue}</span>
                    </div>
                </div>        
        </div> 
    )
}

CardBitcoinProfile.propTypes = {
    icon: PropTypes.string.isRequired,
    profileName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    bitcoinValue: PropTypes.string.isRequired
}

export default CardBitcoinProfile;