import React from 'react';
import { StyleSheet, View } from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import reducer from './reducers/index';
import AddDeck from './components/AddDeck';
import DeckList from './components/DeckList';
import DeckView from './components/DeckView'
import Quiz from './components/Quiz'
import AddCard from './components/AddCard'
import { purple, white, orange } from './utils/colors';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'

const Tabs = createBottomTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards' size={30} color={tintColor} />
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus' size={30} color={tintColor} />
    },
  },
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({tintColor}) => {
     <FontAwesome name='plus-square' size={100} color={tintColor} />
    },
  }),
  

  tabBarOptions: {
    activeTintColor: white,
    style: {
      height: 56,
      backgroundColor: purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      labelStyle: {
        fontSize: 12,
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  },
  swipeEnabled: true,
})

const AppNavigator = createStackNavigator({
  Tabs: {
    screen: Tabs,
    navigationOptions: {
      header: null,
    },
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
    },
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add Card',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: orange,
      },
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
    },
  },
})

const TabsContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}> 
          <TabsContainer/>
        </View>
      </Provider>
    );
  }
}