import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";

import styles from "./styles";
// export interface Props {
// 	navigation: any;
// }
export interface State {}
class BlankPage extends React.Component<Props, State> {
	constructor(props) {
		super(props)
		console.log(props)
	}
	render() {
		const param = this.props.navigation.state.params;
		return (
			<Container style={styles.container}>
				<Header>
					<Left style={{ flex: 1 }}>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>
					<Body style={{ flex: 1,  justifyContent: 'center', alignItems: 'center' }}>
						<Title>{param ? param.name.item ? param.name.item : param.name  : "Blank Page"}</Title>
					</Body>
					<Right style={{ flex: 1 }}>
        			</Right>
				</Header>
				<Content padder>
					<Text>{param !== undefined ? param.name.item ? param.name.item : param.name : "Create Something Awesome . . ."}</Text>
				</Content>
			</Container>
		);
	}
}

export default BlankPage;
