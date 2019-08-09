/**
 *
 * Created by maixing on 2019/08/09 11:39:36
 * 系统store装载
 */
import ViewStores from "views/ViewStores";
import MainStore from "./MainStore";
let appstore = {
	...ViewStores,
	MainStore
};
export default appstore;
