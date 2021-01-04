const SERVE = false; // 是否使用线上服务器

const HOST = ""; // 线上服务器地址，如果不使用请留空

const BLOG_NAME = "Zhu-Blog"; // 个人网站名字

const BLOG_URL = "https://blog.gofor.live"; // 个人网站链接（请填写完整链接）

const GITHUB = "https://github.com/git-zhu"; // 右上角 Github 图标链接，留空不显示

const BACKGROUND_IMG_URL = "https://yun.gofor.live/Pic/bing/bing.php"; // 背景图片url，留空默认为必应每日图片

const SORT_DATA = [
  { sortId: 1, title: "项目" },
  { sortId: 2, title: "关于我" }
]; // 网站分类列表，请按照API.md中'/getSort'接口中返回的data格式填写

const RECORD_NUMBER = "粤ICP备19068355"; // 网站备案号，留空不显示

const PAGES_DATA = [
  {
    pageId: 1,
    sortId: 1,
    title: "阿卡西斯",
    subtitle: "仿站",
    url: "http://www.acasis.com.cn",
    icon: "https://yun.gofor.live/Pic/show/zhu.png"
  },
  {
    pageId: 1,
    sortId: 1,
    title: "安比科技",
    subtitle: "",
    url: "http://an-bi.com",
    icon: "https://yun.gofor.live/Pic/show/zhu.png"
  },
  {
    pageId: 1,
    sortId: 1,
    title: "来米零售",
    subtitle: "无人零售机",
    url: "https://m.client.letmelife.com",
    icon: "https://yun.gofor.live/Pic/show/zhu.png"
  },
  {
    pageId: 1,
    sortId: 1,
    title: "来米生鲜",
    subtitle: "生鲜自提柜",
    url: "https://wx.wfbest.top",
    icon: "https://yun.gofor.live/Pic/show/zhu.png"
  },
  {
    pageId: 1,
    sortId: 1,
    title: "网约车小程序",
    subtitle: "微擎后台",
    url: "http://car.wfbest.top",
    icon: "https://yun.gofor.live/Pic/show/zhu.png"
  },
  {
    pageId: 1,
    sortId: 2,
    title: "博客",
    subtitle: "博客首页",
    url: "http://blog.gofor.live",
    icon: "https://yun.gofor.live/Pic/show/zhu.png"
  },
  {
    pageId: 1,
    sortId: 2,
    title: "简历",
    subtitle: "简历页面",
    url: "http://me.gofor.live",
    icon: "https://yun.gofor.live/Pic/show/zhu.png"
  }
]; // 网站分类列表，请按照API.md中'/getPages'接口中返回的data格式填写

const SLOGAN = [
  "欢迎拜访",
  "歡迎拜訪",
  "Welcome, my friend!",
  "訪問へようこそ",
  "嗨，别来无恙",
  "不忘初心，砥砺前行",
  "最近还好吗？",
  "期待与你相见",
]; // 在Logo下方显示的标题

const FOOTER_INFO = true; // 是否显示抽屉右下角的文字信息

export default {
  SERVE,
  HOST,
  BLOG_URL,
  BLOG_NAME,
  SORT_DATA,
  PAGES_DATA,
  SLOGAN,
  GITHUB,
  FOOTER_INFO,
  BACKGROUND_IMG_URL,
  RECORD_NUMBER
};
