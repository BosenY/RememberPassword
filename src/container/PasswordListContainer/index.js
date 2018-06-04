// @flow
import * as React from "react";
import { observer, inject } from "mobx-react/native";

import PasswordList from '../../stories/screens/PasswordList'

interface Props {
	navigation: any,
	mainStore: any,
}
interface State {}

@inject("passwordStore")
@observer
export default class HomeContainer extends React.Component<Props, State> {
	render() {
        let props = this.props
		return <PasswordList {...props} />;
	}
}
