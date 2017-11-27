import * as React from "react";
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
} from "native-base";

import styles from "./styles";
interface Props { //这里的只是一个接口的功能 为了确定下面使用的方法的类型 但是是any 所以注释掉也没关系啦~
  navigation : any,
  list : any
}
interface State {
  number: number
}
class Home extends React.Component <Props, State> {
  constructor(props: any) {
    super(props: any)
    this.state = {
      number: "1"
    }
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                active
                name="menu"
                onPress={() => this.props.navigation.navigate("DrawerOpen")}/>
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          <List>
            {this
              .props
              .list
              .map((item, i) => (
                <ListItem
                  key={i}
                  onPress={() => this.props.navigation.navigate("BlankPage", {name: {
                    item
                  }})}>
                  <Text>{item}</Text>
                </ListItem>
              ))}
          </List>
          <List>
          <ListItem
                  key={"todoList"}
                  onPress={() => this.props.navigation.navigate("BlankPage", {name: "todoList"})}>
                  <Text>{"todoList"}</Text>
                </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default Home;
