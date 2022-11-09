/**
 * vue 基本配置
 */

export interface VueConfig {
  // 开发或生产环境服务的公共基础路径
  base?: string;
  // 生产环境得文件夹目录
  outDir?: string;
  // 静态文件目录
  assetsDir?: string;
  // 开发环境每次保存时是否输出eslint警告
  lintOnSave?: boolean;
  // 进行编译的依赖
  transpileDependencies?: string[];
  title?: string;
  titleSeparator?: string;
  titleReverse?: boolean;
  version?: string;
  // 开发环境端口号
  devPort?: string;
}

const _vueDefaultConfig: VueConfig = {
  base: "",
  outDir: "dist",
  assetsDir: "static",
  lintOnSave: true,
  transpileDependencies: ["vue-echarts", "resize-detector"],
  title: "vue3-ts-antd-admin-template",
  titleSeparator: " - ",
  titleReverse: false,
  devPort: "9999",
  version: "1.0",
};

export default _vueDefaultConfig;
