import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from "react-navigation"; 
import Home from './components/Home'; 
import ReviewDetail from './components/ReviewDetail'; 
import About from './components/About'; 
import Detail from './components/Detail'; 



const screens = { 
    Home: { 
        screen: Home 
    }, 
    ReviewDetail: { 
        screen:ReviewDetail
    }, 
    About: { 
        screen:About 
    } ,
    Detail: { 
        screen:Detail
    } ,
} 


const HomeStack = createStackNavigator(screens, {defaultNavigationOptions:{ headerStyle:{backgroundColor:'pink'} }});  



export default createAppContainer(HomeStack);