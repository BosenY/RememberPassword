import * as React from 'react'
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  List,
  ListItem
} from 'native-base'
import {
  View,
  Image,
  NativeModules,
  StatusBar,
  FlatList,
  TouchableOpacity,
  TextInput
} from 'react-native'
import imgList from '../../../utils/imgList.js'
import { FooterTabs } from '../../../components'
import styles from './styles'
interface Props {
  navigation: any;
  pokelistStore: any;
}
interface State {
  number: number;
}
class PokeList extends React.Component<Props, State> {
  constructor(props: any) {
    super((props: any))
    this.state = {
      number: '1',
      todo: {
        item: 'todoList'
      },
      text: ''
    }
  }

  renderType(types, cnTypes) {
    return cnTypes.map((item, index) => (
      <View key={index} style={styles[types[index]]}>
        <Text style={styles.itemText}>{item}</Text>
      </View>
    ))
  }
  toDetail(id, item) {
    this.props.navigation.navigate('PokemonDetail')
  }

  render() {
    let { list } = this.props.pokelistStore
    console.log(list)
    return (
      <Container style={styles.container}>
        <StatusBar backgroundColor="#ff0000" />
        <Header>
          <Left style={{ flex: 1 }} />
          <Body
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Title style={{ color: '#ffffff' }}>宝可梦列表</Title>
          </Body>
          <Right style={{ flex: 1 }} />
        </Header>
        <Content>
          <TextInput
            style={styles.searchInput}
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            placeholder="请输入宝可梦的名称/属性/序号等"
          />
          <List style={styles.List}>
            <FlatList
              data={imgList}
              renderItem={({ item, index }) => (
                <ListItem
                  key={index}
                  onPress={() => {
                    this.toDetail(index + 1, item)
                  }}
                >
                  <Text>{item.key + 1}.</Text>
                  <Image
                    resizeMode="contain"
                    style={styles.pokeListImg}
                    source={item.uri}
                  />
                  <Text style={styles.itemListName}>{list[index].cnName}</Text>

                  {this.renderType(list[index].type, list[index].cnTypes)}
                </ListItem>
              )}
            />
          </List>
        </Content>
        <FooterTabs active="list" navigation={this.props.navigation} />
      </Container>
    )
  }
}

export default PokeList
