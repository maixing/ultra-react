/**
* 
* Created by maixing on 2019/08/09 14:17:26
*
*/
import React from "react";
import { render } from "react-dom";

import app from "./app";

render(app, document.getElementById("app"));
if (module.hot) {
	module.hot.accept();
}
