import { addLocaleData, IntlProvider } from "react-intl";
import { ConfigProvider } from 'antd';
import { Provider } from "mobx-react";
import intl from "intl";
import promis from "es6-promise";
import React from "react";

import "antd/dist/antd.less";
import "font-awesome/css/font-awesome.min.css";
import appstore from "./stores/AppStore";
import cnLocale from "./local/zh-CN";
import Routes from "./router/routes";

import "./style/customer_ant.less";
import "./style/magic.css";

global.Intl = intl; //解决react intl的ie问题
promis.polyfill(); //
addLocaleData(cnLocale.data);
export default (
	<IntlProvider locale={cnLocale.locale} messages={cnLocale.messages}>
		<ConfigProvider>
			<Provider {...appstore}>
				<Routes />
			</Provider>
		</ConfigProvider>
	</IntlProvider>
);
