import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';

const styles = {
    cardContainer: {
        height: '380px',
        paddingLeft: '10px'
    },
    icon: {
        paddingTop: '12px',
        width: '150px'
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

const CardIPProfile=({icon,profileName,email,bitcoinValue})=>{
    return (
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2'>
                        <div style={styles.icon}>
                            <img src={icon} style={{width: '150px'}} />
                        </div>
                    </div>

                    <div className='col-sm'>
                        <div className="d-flex flex-row">
                            <div className="p-2">
                                <div > 
                                    <span style={styles.title}>IP Name: </span>
                                    <span>TEDDY BOY</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="p-2">
                                <div > 
                                    <span style={styles.title}>Created by: </span>
                                    <span>Cowman, Inked by Yu-Kwok Lun</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="p-2">
                                <div > 
                                    <span style={styles.title}>Originality: </span>
                                    <span>Hong Kong</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="p-2">
                                <div > 
                                    <span style={styles.title}>First Issue Published: </span>
                                    <span>14 April 1992</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="p-2">
                                <div > 
                                    <span style={styles.title}>Latest Issue to date: </span>
                                    <span>#2093 (published on 4 Jan 2018</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="p-2">
                                <div > 
                                    <span style={styles.title}>Book Format: </span>
                                    <span>A4 Size 32 pages Full Color publishing every 3 days</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="p-2">
                                <div > 
                                    <span style={styles.title}>Digital Format: </span>
                                    <span>Publishing on website &amp; mobile app simultaneously</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="p-2">
                                <div > 
                                    <span style={styles.title}>Genre: </span>
                                    <span>Drama, Adult, Action</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                     <div className='col-sm'>
                        <span style={styles.title}>Introduction: </span>
                        <span>The series follow the adventures of Ho-nam (Andy) Chan in his triad life, from
            being a mere 49er (the lowest position in a gang) to being promoted to a Red Pole (enforcer)
within three years, to finally being the Dragon Head (leader) of the Hung Hing Gang. It explores
the deep bonds of loyalty and brotherhood in underground Chinese society, and has since been a
trademark in defining Hong Kong culture.</span>                 
                     </div>                   
                </div>
            </div>
    )
}

export default CardIPProfile;