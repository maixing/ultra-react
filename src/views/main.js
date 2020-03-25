/**
* 
* Created by maixing on 2020/03/25 14:20:47
*
*/
import React from "react";
import { Link } from "react-router";
import { MenuUnfoldOutlined, MenuFoldOutlined, HomeOutlined, AreaChartOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import "views/style.less";
import { observer, inject } from "mobx-react";

const { Header, Sider, Content } = Layout;

@inject("MainStore")
@observer
export default class Main extends React.Component {
	constructor(props) {
		super(props);
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
							<Link to={"/home"} className="link">
								<HomeOutlined />
								<span> 首页</span>
							</Link>
						</Menu.Item>
						<Menu.Item key="2">
							<Link to={"/chart"} className="chart">
								<AreaChartOutlined />
								<span>图表</span>
							</Link>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Header style={{ background: "#fff", padding: 0 }}>
						{React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
							className: "trigger",
							onClick: this.toggle
						})}
						<span className="title testtheme1">{this.mainStroe.appName}2020</span>
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
