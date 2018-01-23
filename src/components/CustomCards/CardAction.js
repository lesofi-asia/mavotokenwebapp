import React from 'react';
import PropTypes from 'prop-types';

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
}

CardAction.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired
}

export default CardAction;