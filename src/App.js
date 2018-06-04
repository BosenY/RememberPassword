// @flow
import React from 'react'
import { Image, View, Text } from 'react-native'
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons' // 4.4.2
import { Root, Icon, Button } from 'native-base'

// import Login from "./container/LoginContainer";
import Home from './container/HomeContainer'
import BlankPage from './container/BlankPageContainer'
import Sidebar from './container/SidebarContainer'
import AddPassword from './container/AddPasswordContainer'
import PasswordList from './container/PasswordListContainer'
import PokeList from './container/PokeListContaner'
import About from './stories/screens/About'
import PasswordDetail from './stories/screens/PasswordDetail'

import { StatusBar } from 'react-native'
const App = TabNavigator(
  {
    Home: { screen: Home },
    PokeList: { screen: PokeList },
    About: {
      screen: About
    },
    BlankPage: { screen: BlankPage },
    // AddPassword: { screen: AddPassword },
    PokemonDetail: { screen: PasswordDetail }

    // Drawer: { screen: Drawer },
  },
  {
    initialRouteName: 'PokeList',
    mode: 'modal',
    headerMode: 'none', //这里是因为是使用了整个native-base 的组件，所以不需要使用react-navigation自己的header功能
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
      style: {
        display: 'none'
      }
    }
  }
)
const CreateIcon = (name, icon) => {
  return {
    tabBarLabel: name,
    icon: ({ tintColor, focused }) => <Icon name="camera" />
  }
}
// const App1 = TabNavigator(
// 	{
// 		Home: {
// 			screen: Home,
// 			navigationOptions: CreateIcon('主页', 'home')
// 		},
// 		BlankPage: {
// 			screen: BlankPage,
// 			navigationOptions: CreateIcon('空白页', 'home')
// 		},
// 		AddPassword: {
// 			screen: AddPassword,
// 			navigationOptions: CreateIcon('添加密码', 'home')
// 		}

// 		// Drawer: { screen: Drawer },
// 	}, {
// 		tabBarComponent: (...props) => {
// 			return (
// 				<View>
// 					<Icon name="person" />
//               		<Text></Text>
// 				</View>
// 			)
// 		},
// 		initialRouteName: "Home",
// 		tabBarPosition: "bottom",
// 		animationEnabled: true,
// 		swipeEnabled: true,
// 		tabBarOptions: {
// 			tabStyle: {
// 				height: 49
// 			  },
// 			indicatorStyle: { backgroundColor: 'transparent', },
// 			activeTintColor: '#e91e63',
// 			inactiveTintColor: "#000",
// 			labelStyle: {
// 			  fontSize: 12,
// 			},
// 			style: {
// 			  backgroundColor: 'white',
// 			},
// 		  }
// 		  ,
// 	}
// )

export default () => (
  <Root>
    <StatusBar backgroundColor="black" barStyle="light-content" />
    <App />
  </Root>
)
