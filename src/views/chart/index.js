/**
 *
 * Created by maixing on 2019/08/07 18:15:34
 *
 */

import React from "react";
import { observer, inject } from "mobx-react";
import { Button } from "antd";

@inject("MainStore")
@observer
export default class Chart extends React.Component {
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
						changeAppName("chart");
					}}
				>
					chart
				</Button>
			</div>
		);
	}
}
