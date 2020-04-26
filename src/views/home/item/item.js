/**
 *
 * Created by maixing on 2020/04/18 16:51:04
 *
 */

import React from "react";
import ItemStore from "./ItemStore";
import { observer } from "mobx-react";

@observer
export default class item extends React.Component {
	constructor(props) {
		super(props);
	}
	static defaultProps = {
		store: {},
		callBack:null
	};
	componentDidMount() {}
	remove = ()=>{
		if(this.props.callBack){
			this.props.callBack(this.props.store);
		}
	}
	render() {
		return <div onClick={this.remove}>{this.props.store.itemName}</div>;
	}
}
