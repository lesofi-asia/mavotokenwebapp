import React from 'react';
import Card,{CardContent} from 'material-ui/Card';
import CardIPProfile from '../../../components/CustomCards/CardIPProfile';
import ipAvatarChanHouNam from '../../ImageAssets/ipAvatar/HH_ChanHouNam.jpg'

const IPBio=props=>{
    return (
        <div >
            <Card>
                <CardIPProfile 
                    icon={ipAvatarChanHouNam}
                    profileName={'Guest 201'}
                    email={'guest@mavotoken.com'}
                    bitcoinValue={'1000BTC'}
                />  
            </Card>  
        </div>
        
    )
}

export default IPBio;