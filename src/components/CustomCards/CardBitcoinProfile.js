import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';

const styles = {
    cardContainer: {
        height: '80px',
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
    buttonContainer: {
        paddingTop: '5px',
        width: '100px'
    }
}

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
            {/*
            <div className="d-flex flex-row">
                <div className="p-2">
                    <div className='cardBitProfileContainer avatar'>
                        <Avatar src={icon} />
                    </div>
                </div>
                <div className="p-2">
                    <div style={styles.profileContainer}> 
                        <span style={styles.title}>{profileName}</span>
                        <br />
                        <span>{email}</span>
                    </div>
                </div>
                <div className="p-2">
                    <div style={styles.profileContainer}> 
                        <span style={styles.title}>Estimated Value</span>
                        <br />
                        <span>{bitcoinValue}</span>
                    </div>
                </div>        
            </div> 
            */}   
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