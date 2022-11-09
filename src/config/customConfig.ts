import { NetworkConfig } from "./default/net.config";
import { VueConfig } from "./default/vue.default.config";
import { Theme } from "./default/theme.config";
import { Settings } from "./default/setting.config";

type CustomConfig = NetworkConfig & VueConfig & Theme & Settings;

const _customConfig: CustomConfig = {};

export default _customConfig;
