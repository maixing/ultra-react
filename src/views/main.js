/**
 *
 * Created by maixing on 2019/08/07 17:29:37
 *
 */

import React from "react";
import { Link } from "react-router";

import { Layout, Menu, Icon } from "antd";
const { Header, Sider, Content } = Layout;
import "views/style.less";
import { observer, inject } from "mobx-react";

@inject("MainStore")
@observer
export default class Main extends React.Component {
	constructor(props) {
		super(props);
		console.log("props---->>%o", this.props);
		this.mainStroe = this.props.MainStore;
	}
	state = {
		collapsed: false
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed
		});
	};

	render() {
		return (
			<Layout>
				<Sider trigger={null} collapsible collapsed={this.state.collapsed}>
					<div className="logo" />
					<Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
						<Menu.Item key="1">
							<Icon type="home" />
							<Link to={"/home"} className="link">
								首页
							</Link>
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="bar-chart" />
							<Link to={"/chart"} className="link">
								图表
							</Link>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Header style={{ background: "#fff", padding: 0 }}>
						<Icon className="trigger" type={this.state.collapsed ? "menu-unfold" : "menu-fold"} onClick={this.toggle} />
						<span className="title">{this.mainStroe.appName}2020</span>
					</Header>
					<Content
						style={{
							margin: "24px 16px",
							padding: 24,
							background: "#fff",
							minHeight: 280
						}}
					>
						{this.props.children}
					</Content>
				</Layout>
			</Layout>
		);
	}
}
