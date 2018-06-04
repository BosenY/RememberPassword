// @flow
import * as React from "react";
import { observer, inject } from "mobx-react/native";

import AddPassword from "../../stories/screens/AddPassword";
// import data from "./data";

 interface Props {
	navigation: any,
	mainStore: any,
}
interface State {}
export default class AddPasswordContainer extends React.Component<Props, State> {
	render() {
		return <AddPassword navigation={this.props.navigation} />;
	}
}
