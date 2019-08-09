import { Route, IndexRoute, IndexRedirect } from "react-router";
import { Router, hashHistory, browserHistory } from "react-router";
import React from "react";

function onEnter(nextState, replace, callback) {
	callback();
}
function onChange(prevState, nextState, replace, callback) {
	callback();
}
const routes = [
	{
		path: "/",
		onEnter: onEnter,
		onChange: onChange,
		getComponent(nextState, cb) {
			require.ensure([], function(require) {
				cb(null, require("views/main").default);
			});
		},
		indexRoute: { onEnter: (nextState, replace) => replace("/home") },
		childRoutes: [
			{
				path: "/home",
				onEnter: onEnter,
				onChange: onChange,
				getComponent(nextState, cb) {
					require.ensure([], function(require) {
						cb(null, require("views/home").default);
					});
				}
			},
			{
				path: "/chart",
				onEnter: onEnter,
				onChange: onChange,
				getComponent(nextState, cb) {
					require.ensure([], function(require) {
						cb(null, require("views/chart").default);
					});
				}
			}
		]
	}
];
export default class Routers extends React.Component {
	render() {
		return <Router history={hashHistory}>{routes}</Router>;
	}
}
