import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    cardContainer: {
        height: '80px',
        paddingLeft: '10px'
    },
    icon: {
        width: '50px'
    },
    titleContainer: {
        paddingTop: '5px',
        width: '310px'
    },
    title: {
        fontWeight: 'bold'
    },
    buttonContainer: {
        paddingTop: '5px',
        width: '100px'
    }
}

const CardAction=({icon,title,subtitle,buttonText})=>{
    return (
        <div className='container cardActionContainer'>
            <div className='row'>
                <div className='col-2'>
                    <div className='cardActionContainer iconContainer'>
                        <img src={icon} alt="" className='icon' />
                    </div>
                </div>
                <div className='col-10'>
                    <div className='container'>
                        <div className='row'>
                            <div className='cardActionContainer descContainer'>
                                <span className='title'>{title}</span>
                                <br />
                                <span className='desc'>{subtitle}</span>
                            </div>
                            <div className='cardActionContainer actionContainer'>  
                                <button type="button" className="btn btn-primary">{buttonText}</button> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       )
        {/*
        <div style={styles.cardContainer}>
            <div className="d-flex flex-row">
                <div className="p-2">
                    <img src={icon} alt="" style={styles.icon} />
                </div>
                <div className="p-2">
                    <div style={styles.titleContainer}> 
                        <span style={styles.title}>{title}</span>
                        <br />
                        <span>{subtitle}</span>
                    </div>
                </div>
                <div className="p-2">
                    <div style={styles.buttonContainer}>  
                    <button type="button" className="btn btn-primary">{buttonText}</button> 
                    </div> 
                </div>        
            </div>    
        </div> 
        */}
    
}

CardAction.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired
}

export default CardAction;