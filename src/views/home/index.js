/**
 *
 * Created by maixing on 2019/08/07 17:26:36
 *
 */

import React from "react";
import { observer, inject } from "mobx-react";
import { Button } from "antd";
import "./style.less";
import { updateTheme } from "@/util/color";

@inject("MainStore")
@observer
export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}
	state = {
		themes: ["red", "green", "blue"]
	};
	themeClick = color => {
		updateTheme(color);
	};
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
				<div className="themes-wrap">
					{this.state.themes.map(item => {
						return (
							<div
								style={{ backgroundColor: item }}
								className="theme-item"
								onClick={this.themeClick.bind(this, item)}
							></div>
						);
					})}
				</div>
			</div>
		);
	}
}
