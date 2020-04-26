import { observable, action } from "mobx";
class ItemStore {
	@observable itemName = "系统名字";
	@observable id = "";
}
export default ItemStore;