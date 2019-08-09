/**
 *
 * Created by maixing on 2019/08/09 14:14:16
 *
 */
import serverconfig from "../../resource/serverconfig/server.json";
import config from "./FacadeConfig";
let baseUrl = "";
if (production) {
	baseUrl = "http://" + serverconfig.pro.serverIp + ":" + serverconfig.pro.serverPort + serverconfig.pro.serverBaseUrl;
} else {
	baseUrl = "http://" + serverconfig.dev.serverIp + ":" + serverconfig.dev.serverPort + serverconfig.dev.serverBaseUrl;
}
let facade = {};
export default facade;
