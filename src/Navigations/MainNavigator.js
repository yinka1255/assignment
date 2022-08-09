
import { createStackNavigator } from 'react-navigation-stack';
import Posts from '../screens/Posts/Posts';
import Post from '../screens/Post/Post';


console.disableYellowBox = true;

const MainNavigator = createStackNavigator({ 
  Posts: {
    screen: Posts,
    navigationOptions: {
      headerShown: false
    }
  },
  Post: {
    screen: Post,
    navigationOptions: {
      headerShown: false
    }
  },

})

export default MainNavigator;