import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';

// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss'
import 'hamburgers/dist/hamburgers.min.css'
//import 'slick-carousel/slick/slick.scss'
//import 'slick-carousel/slick/slick-theme.scss'

// Containers
import Home from './containers/Home';
//Redux
import createStore from './redux/createStore';
//Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
     <BrowserRouter>
       <MuiThemeProvider>
        <Home />
       </MuiThemeProvider> 
     </BrowserRouter>
  </Provider>
  , document.getElementById('root'));