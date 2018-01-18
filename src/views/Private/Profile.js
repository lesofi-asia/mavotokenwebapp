import React from 'react';
import Card,{CardContent} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import CardBitcoinProfile from '../../components/CustomCards/CardBitcoinProfile';
import CardAction from '../../components/CustomCards/CardAction';
import LastLogin from './LastLogin';
import profileAvatar from '../ImageAssets/stevejobs_avatar.jpg';
import action2FAGoogleAuthImage from '../ImageAssets/actions/2fa_google_auth_icon.png';
import action2FASMSImage from '../ImageAssets/actions/2fa_sms_icon.png';
import actionAPIImage from '../ImageAssets/actions/api_icon.png';
import actionChangePwdImage from '../ImageAssets/actions/change_pwd_icon.png';
import actionKycImage from '../ImageAssets/actions/kyc_icon.png';

const Profile=props=>{
    return (
        <div className='container'>
            <div className='row'>
                <br />
            </div> 
            <div className='row'>
               <div className='col-sm'>
                <h2>Profile</h2>
               </div> 
            </div>
            <div className='row'>
               <div className='col-sm'>
                 <Card>
                   <CardBitcoinProfile 
                     icon={profileAvatar}
                     profileName={'Guest 201'}
                     email={'guest@mavotoken.com'}
                     bitcoinValue={'1000BTC'}
                    />  
                 </Card> 
               </div>    
            </div>
            <div className='row'>
                <br />
            </div>    
            <div className='row'>
                 <div className='col-sm'>
                    <Card>
                        <CardContent>
                             <Typography type='headline'>Login Password & KYC</Typography>
                        </CardContent>     
                         
                        <CardAction 
                            icon={actionChangePwdImage} 
                            title={'Change Password'}
                            subtitle={'To change login password to access this system.'}
                            buttonText={'Change'}
                            />
                        <CardAction 
                            icon={actionKycImage} 
                            title={'Identity Authentication'}
                            subtitle={'To increase withdrawal limit.'}
                            buttonText={'Verify'}
                            />    
                    </Card> 
                 </div>    
                 <div className='col-sm'>
                    <Card>
                       <CardContent>
                             <Typography type='headline'>Two Factor Authentication</Typography>
                       </CardContent>    
                       <CardAction 
                            icon={action2FASMSImage} 
                            title={'SMS Authentication'}
                            subtitle={'Used for withdrawals and security modifications.'}
                            buttonText={'Enable'}
                            />
                       <CardAction 
                            icon={action2FAGoogleAuthImage} 
                            title={'Google Authentication'}
                            subtitle={'Used for withdrawals and security modifications.'}
                            buttonText={'Enable'}
                            />
                    </Card> 
                 </div> 
            </div>
            <div className='row'>
                <br />
            </div>   
            <div className='row'>
                 <div className='col-sm'>
                    <Card>
                       <CardContent>
                             <Typography type='headline'>API</Typography>
                       </CardContent>    
                         <CardAction 
                            icon={actionAPIImage} 
                            title={'API Setting'}
                            subtitle={'Use API to get more access and real time market.'}
                            buttonText={'Enable'}
                            />
                    </Card> 
                 </div>    
             </div>
             <div className='row'>
                <br />
             </div>
             <div className='row'>
                 <div className='col-sm'>
                    <Card>
                        <CardContent>
                             <Typography type='headline'>Last Login</Typography>
                        </CardContent>   
                        <LastLogin />
                    </Card> 
                 </div>    
             </div>  
             <div className='row'>
                <br />
             </div>   
        </div>    
    )
}

export default Profile;