/**
 *
 * Created by maixing on 2019/08/07 17:26:36
 *
 */

import React from "react";
import { observer, inject } from "mobx-react";
import { Button } from "antd";

@inject("MainStore")
@observer
export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}
	render() {
		const { changeAppName } = this.props.MainStore;
		return (
			<div>
				<Button
					onClick={() => {
						changeAppName("home");
					}}
				>
					Home
				</Button>
			</div>
		);
	}
}
