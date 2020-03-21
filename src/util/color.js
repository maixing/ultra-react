let lessNodesAppended;
const updateTheme = primaryColor => {
	if (!primaryColor) {
		return;
	}
	function buildIt() {
		if (!window.less) {
			return;
		}
		setTimeout(() => {
			window.less
				.modifyVars({
					"@primary-color": primaryColor
				})
				.then(() => {})
				.catch(e => {
					console.log(e);
				});
		}, 200);
	}
	if (!lessNodesAppended) {
		// insert less.js and color.less
		const lessStyleNode = document.createElement("link");
		const commonStyleNode = document.createElement("link");
		const lessConfigNode = document.createElement("script");
		const lessScriptNode = document.createElement("script");
		lessStyleNode.setAttribute("rel", "stylesheet/less");
		lessStyleNode.setAttribute("href", "./resource/Color.less");
		commonStyleNode.setAttribute("rel", "stylesheet/less");
		commonStyleNode.setAttribute("href", "./resource/common.less");
		lessConfigNode.innerHTML = `
      window.less = {
        async: true,
        env: 'production',
        javascriptEnabled: true
      }
    `;
		lessScriptNode.src = "./resource/less.min.js";
		lessScriptNode.async = true;
		lessScriptNode.onload = () => {
			buildIt();
			lessScriptNode.onload = null;
		};
		document.body.appendChild(lessStyleNode);
		document.body.appendChild(commonStyleNode);
		document.body.appendChild(lessConfigNode);
		document.body.appendChild(lessScriptNode);
		lessNodesAppended = true;
	} else {
		buildIt();
	}
};
export { updateTheme };
