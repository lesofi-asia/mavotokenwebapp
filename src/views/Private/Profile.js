import React from 'react';
import Card,{CardContent} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import CardBitcoinProfile from '../../components/CustomCards/CardBitcoinProfile';
import CardAction from '../../components/CustomCards/CardAction';
import LastLogin from './LastLogin';

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
                     icon={'/img/avatars/stevejobs_avatar.jpg'}
                     profileName={'Steve Jobs'}
                     email={'steve@mavotoken.com'}
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
                            icon={'/img/avatars/change_pwd_icon.png'} 
                            title={'Change Password'}
                            subtitle={'To change login password to access this system.'}
                            buttonText={'Change'}
                            />
                        <CardAction 
                            icon={'/img/avatars/kyc_icon.png'} 
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
                            icon={'/img/avatars/2fa_sms_icon.png'} 
                            title={'SMS Authentication'}
                            subtitle={'Used for withdrawals and security modifications.'}
                            buttonText={'Enable'}
                            />
                       <CardAction 
                            icon={'/img/avatars/2fa_google_auth_icon.png'} 
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
                            icon={'/img/avatars/api_icon.png'} 
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