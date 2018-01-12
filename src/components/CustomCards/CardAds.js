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

const CardAds=({ipAvatar,ipCode,ipName})=>{
    return (
        <div style={styles.cardContainer}>
            <div className="d-flex flex-row">
                <div className="p-2">
                    <div style={styles.icon}>
                        <Avatar src={ipAvatar} />
                    </div>
                </div>
                <div className="p-2">
                    <div style={styles.profileContainer}> 
                        <span style={styles.title}>{ipCode}</span>
                        <br />
                        <span>{ipName}</span>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row">
                <div className="p-2">
                    <div style={styles.descriptionContainer}> 
                        <span>Description blah blah...</span>
                    </div>
                </div>
            </div>        
        </div> 
    )
}

CardAds.propTypes = {
    ipAvatar: PropTypes.string.isRequired,
    ipCode: PropTypes.string.isRequired,
    ipName: PropTypes.string.isRequired
}

export default CardAds;