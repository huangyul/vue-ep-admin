/**
 * 主题基本配置
 */

// 布局
enum Layout {
  Horizontal,
  Vertical,
  Gallery, // 画廊
  Comprehensive, // 综合
  Common, // 常见
}

// 主题分类
enum ThemeName {
  Default,
  Ocean,
  Green,
  Glory,
  White,
}

export interface Theme {
  layout?: Layout;
  themeName?: ThemeName;
  // 是否固定头部
  isFixedHeader?: boolean;
  // 是否显示顶部进度条
  isShowProgressBar?: boolean;
  // 是否显示多标签页
  isShowTabsBar?: boolean;
  // 是否显示语言选择组件
  isShowLanguage?: boolean;
  // 是否显示刷新组件
  isShowRefresh?: boolean;
  // 是否显示主题组件
  isShowTheme?: boolean;
  // 是否显示通知组件
  isShowNotice?: boolean;
  // 是否显示全屏
  isShowFullScreen?: boolean;
}

const _themeConfig: Theme = {
  layout: Layout.Horizontal,
  themeName: ThemeName.Default,
  isFixedHeader: true,
  isShowProgressBar: true,
  isShowTabsBar: true,
  isShowFullScreen: true,
  isShowLanguage: true,
  isShowNotice: true,
  isShowRefresh: true,
  isShowTheme: true,
};

export default _themeConfig;
