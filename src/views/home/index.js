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
import ItemStore from "./item/ItemStore";
import Item from "./item/item";
import { uuid } from "@/util/UUID";
import PreviewAnimation from "@/components/PreviewAnimation";

@inject("MainStore")
@inject("itemListStore")
@observer
export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.removById = this.removById.bind(this);
	}
	state = {
		themes: ["red", "green", "blue"],
		index: 1,
	};
	themeClick = (color) => {
		updateTheme(color);
	};
	removById = (store) => {
		console.log("store---->>%o", store);
		const { removeById } = this.props.itemListStore;
		removeById(store.id);
	};
	componentDidMount = () => {};
	render() {
		const { changeAppName } = this.props.MainStore;
		const { items, addItemStore, clearItemStores } = this.props.itemListStore;
		clearItemStores();
		return (
			<div className="homeback">
				<Button
					onClick={() => {
						changeAppName("home");
					}}
				>
					Home{this.state.index}
				</Button>
				<div className="themes-wrap">
					{this.state.themes.map((item) => {
						return (
							<div
								style={{ backgroundColor: item }}
								className="theme-item"
								onClick={this.themeClick.bind(this, item)}
							></div>
						);
					})}
				</div>
				{items.map((i, index) => {
					const itemStore = new ItemStore();
					itemStore.itemName = i.name;
					itemStore.id = uuid();
					addItemStore(itemStore);
					const animateList = i.animation || [];
					return (
						<PreviewAnimation list={animateList}>
							<Item store={itemStore} key={itemStore.id} callBack={this.removById}></Item>
						</PreviewAnimation>
					);
				})}
			</div>
		);
	}
}
