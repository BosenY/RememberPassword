import React, { Component } from 'react'
import { Footer, FooterTab, Button, Icon, Text } from 'native-base'
interface Props {
  active: any;
  navigation: any;
}
export default class FooterTabs extends Component {
  render() {
    console.log(this.props)
    return (
      <Footer>
        <FooterTab>
          <Button
            vertical
            full
            active={this.props.active == 'home'}
            onPress={() => this.props.navigation.navigate('Home')}
          >
            <Icon name="home" active={this.props.active == 'home'} />
            <Text>主页</Text>
          </Button>
          <Button
            vertical
            full
            active={this.props.active == 'list'}
            onPress={() => this.props.navigation.navigate('PokeList')}
          >
            <Icon active={this.props.active == 'list'} name="list" />
            <Text>列表</Text>
          </Button>
          <Button
            vertical
            full
            active={this.props.active == 'about'}
            onPress={() => this.props.navigation.navigate('About')}
          >
            <Icon name="person" active={this.props.active == 'about'} />
            <Text>关于</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
  }
}
