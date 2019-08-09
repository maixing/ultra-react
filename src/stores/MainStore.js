/**
* 
* Created by maixing on 2019/08/09 14:16:17
*
*/
import { observable, action } from "mobx";
class MainStore {
	@observable appName = "系统名字";
	@action
	changeAppName = appName => {
		this.appName = appName;
	};
}
const mainStore = new MainStore();

export default mainStore;
