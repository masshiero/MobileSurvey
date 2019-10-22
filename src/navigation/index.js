import { createStackNavigator } from "react-navigation";
import Login from '../screens/login'
import Home from '../screens/home'
import DataContainer from '../screens/datacontainer'

const AppNavigator = createStackNavigator(
    {
        Login: {
            screen: Login
        },
        Home: {
            screen: Home
        },
        DataContainer: {
            screen: DataContainer
        }

    },
    {
        initialRouteName:"Login",
        headerMode:'none'
    }
);

export default AppNavigator;