import { observable, action } from "mobx";
let timeInterval = 0;
class ItemListStore {
	@observable itemStoreList = [];
	@observable items = [
		{
			name: "item1",
			animation: [
				{
					name: "bounceInUp",
					duration: 1,
					delay: 0,
					repeat: 1,
				},
			],
		},
		{
			name: "item2",
			animation: [
				{
					name: "bounceInUp",
					duration: 1,
					delay: 1,
					repeat: 1,
				},
			],
		},
		{
			name: "item3",
			animation: [
				{
					name: "bounceInUp",
					duration: 1,
					delay: 2,
					repeat: 1,
				},
			],
		},
		{
			name: "item4",
			animation: [
				{
					name: "bounceInUp",
					duration: 1,
					delay: 3,
					repeat: 1,
				},
			],
		},
		{
			name: "item5",
			animation: [
				{
					name: "bounceInUp",
					duration: 1,
					delay: 4,
					repeat: 1,
				},
			],
		},
		{
			name: "item6",
			animation: [
				{
					name: "bounceInUp",
					duration: 1,
					delay: 5,
					repeat: 1,
				},
			],
		},
	];
	@action
	addItemStore = (itemStore) => {
		this.itemStoreList.push(itemStore);
	};
	@action
	clearItemStores = ()=>{
		this.itemStoreList = [];
		this.startTime();
	}
	@action
	startTime = () => {
		clearInterval(this.timeInterval);
		this.timeInterval = setInterval(()=>{
			console.log('this.timeInterval---->>%o',this.timeInterval);
			let i = Math.floor(Math.random()*6);
		    if(i<this.itemStoreList.length){
		        const itemStore = this.itemStoreList[i];
		        itemStore.itemName =Math.floor(Math.random()*100)+"-item"+i;
		    }
		},5000);
	};
	@action
	removeById = (id) => {
		let index = -1;
		let itemName = this.itemStoreList.forEach((element, i) => {
			if (element.id == id) {
				index = i;
				itemName = element.itemName;
			}
		});
		if (index > 0) {
			this.items.splice(this.items.indexOf(itemName), 1);
			this.itemStoreList.slice(index, 1);
		}
	};
}
const itemListStore = new ItemListStore();

export default itemListStore;
