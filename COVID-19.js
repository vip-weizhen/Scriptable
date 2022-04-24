// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: feather-alt;
/*
// 抖音搜索：大舅哥科技
// 微信搜索小程序「大舅哥科技」
// 获取更多精美实用 iOS 桌面组件！
// 更多免费精选快捷指令、壁纸，等你！
// ***************************
// 环境框架   ：@ DmYY
// script	 ：@ DJG
*/

FILE = FileManager.local()
FILEPATH = FILE.joinPath(FILE.libraryDirectory(), "/DJG.js")
const { DJG, Runing } = importModule(FILEPATH);

// @组件代码开始
class Widget extends DJG {
  constructor(arg) {
    super(arg);
    this.name = '国内疫情';
    this.widget_ID = "DJG-101";
    this.version = "V3.5";
    this.coviddataUrl = "https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf";
    this.covidurl = 'https://voice.baidu.com/act/newpneumonia/newpneumonia/?from=osari_aladin_top1#tab0';
    this.citys = [
      '江苏','云南','广东','湖南','湖北','上海','四川','天津','河南','山东','福建','陕西','北京','黑龙江','浙江',
      '河北','安徽','新疆','江西','重庆','吉林','辽宁','内蒙古','广西','山西','甘肃','海南','贵州','宁夏','青海'];
	this.cityCode = [
      'jiangsu','yn','gd','hn','hb','sh','cd','tj','henan','sd','fj','xian','bj','helongjiang','zj','hebei','ah',
      'xinjiang','jiangxi','cq','jilin','ln','neimenggu','guangxi','shanxi','gansu','hainan','guizhou','ningxia','qinghai','xizang'];
    this.Run();
  }
  
  /**
   * 渲染函数，函数名固定
   * 可以根据 this.widgetFamily 来判断小组件尺寸，以返回不同大小的内容
   */
  async render () {
    let widget = this.getWidget();
    await this.getWidgetBackgroundImage(widget);
    try{
      switch (this.widgetFamily) {
        case 'small':
        	await this.renderSmall(widget);
        	break;
        case 'medium':
        	await this.renderMedium(widget);
        	break;
        default:
        	await this.renderMedium(widget, true);
        	break;
      }
    }catch(e){
      this.ERROR.push({error:e.toString()});
    }
    return widget;
  }
  
  formatr(str) {
    return (str<0 ? "较昨日"+str : "较昨日+"+str)
  }
  
  // 小组件
  async renderSmall(widget){
    widget.setPadding(10, 15, 10, 15);
    let coviddata = await this.httpGet(this.coviddataUrl);
    coviddata = coviddata.data.diseaseh5Shelf.areaTree[0].children.splice(0, 3);
    this.addText(widget, `🦠   国内疫情`, 12, {font:'bold', opaciry:0.8});
    widget.addSpacer();
    for(let i = 0; i < coviddata.length; i++){
      let confirm = coviddata[i].today.confirm;
      if(confirm > 0) confirm = '+' + confirm;
      const covidArr = [coviddata[i].name, coviddata[i].total.confirm, confirm];
      this.addText(widget, `${covidArr[0]}  ${covidArr[1]}`, 13);
      this.addText(widget, `新增：${covidArr[2]}`, 10, {font:'bold', opaciry:0.8, color:'FF8247'});
      widget.addSpacer(3)
    }
    widget.addSpacer(5);
    this.addText(widget, coviddata[0].total.mtime, 9, {opaciry:0.8, align:'center'})
  }
  
  // 中组件
  async renderMedium(w, bool=false){
    let coviddata = await this.httpGet(this.coviddataUrl)
    coviddata = coviddata.data.diseaseh5Shelf;
    let chinaTotal = coviddata.chinaTotal;
    let chinaAdd = coviddata.chinaAdd;
    w.addSpacer(5)
    this.addText(w, '🦠 '+this.name, 12, {font:'bold', opacity:0.8});
    w.addSpacer(8)
    
    let upStack = w.addStack()
    upStack.layoutHorizontally()
    upStack.url = this.covidurl;
    const titles = ["本土现有确诊","现有确诊","累计确诊"]
    const newsdatas = [`${chinaTotal.localConfirmH5}`,`${chinaTotal.nowConfirm}`,`${chinaTotal.confirm}`]
    const colors = ['FF4500', 'FF00FF', 'FFA500']
    const newAdd = [chinaAdd.localConfirmH5,chinaAdd.nowConfirm,chinaAdd.confirm]
    
    const titles2 = ["无症状感染者","境外输入","累计死亡"]
    const cityNewsdata = [`${chinaTotal.noInfect}`,`${chinaTotal.importedCase}`,`${chinaTotal.dead}`]
    const cityCor = ['FF0000', '00CD00', '666666'];
    const cityNewAdd = [chinaAdd.noInfect,chinaAdd.importedCase,chinaAdd.dead]
    
    for(let i = 0; i < 3; i++){
      let stack = upStack.addStack()
      stack.layoutVertically()
      
      this.addText(stack, titles[i], 14)
      stack.addSpacer(1)
      this.addText(stack, this.numFormatr(newsdatas[i]), 14, {font:'bold', color:colors[i]})
      stack.addSpacer(1)
      this.addText(stack, this.formatr(newAdd[i]), 9, {font:'bold', opacity:0.8})
      i != 2 ? upStack.addSpacer(): ""
      stack.addSpacer(8)
      this.addText(stack, titles2[i], 14)
      stack.addSpacer(1)
      this.addText(stack, this.numFormatr(cityNewsdata[i]), 14, {font:'bold', color:cityCor[i]})
      stack.addSpacer(1)
      this.addText(stack, this.formatr(cityNewAdd[i]), 9, {font:'bold', opacity:0.8})
      i != 2 ? upStack.addSpacer(): "";
    }
    if(bool) {
      w.addSpacer(8)
      const body = w.addStack()
      body.layoutVertically()
      const news = await this.covidNews() || [];
      if(news.length != 0){
        this.addText(body, `${this.settings.city||'国内'}疫情最新资讯`, 14, {font:'light'})
        body.addSpacer(7)
        for(let i = 0; i < 7; i++){
          this.addText(body, `${i+1}. ${news[i].title}`, 13, {font:'light', url:news[i].news_url})
          if(i !=6) body.addSpacer(6)
        }
      }
    }
    
    w.addSpacer(5)
    this.addText(w, coviddata.lastUpdateTime, 9, {opacity:0.8,align:'right'})
  }

  // 疫情资讯
  async covidNews(){
    if(!this.settings.city){
      let date = new Date();
      let covidNewsURL = "https://channel.chinanews.com/cns/s/5013.shtml?pager=0&_="+Math.floor(date.getTime());
      let data = (await this.httpGet2(covidNewsURL, false)).slice(17,-29);
      return JSON.parse(data).docs
    } else {
      if(this.citys.indexOf(this.settings.city) != -1){
      	let cityID = this.cityCode[this.citys.indexOf(this.settings.city)];
      	if(cityID){
          let covidNewsURL = `https://api.dreamreader.qq.com/news/v1/province/news/list?province_code=${cityID}&page_size=10`;
          let covidNews = await this.httpGet(covidNewsURL);
          return covidNews.data.items
        }
      }else {logError("Error：疫情资讯地区设置错误！")};
    }
  }
  
  async httpGet2 (url, json = true, useCache = true, options = null, method = 'GET') {
    let cacheKey = this.hash('channel.chinanews.com');
    let cacheData = null, error = null;
    if (this.isUpdate(cacheKey.slice(-8), useCache) || !Keychain.contains(cacheKey)){
      try {
        let req = new Request(url)
        req.method = method
        if(options){
          Object.keys(options).forEach((key) => {
            req[key] = options[key];
          });
        }
        cacheData = await (json ? req.loadJSON() : req.loadString());
      } catch (e) {
        error = {url:url, error:e.toString()};
        this.writeError(error);
      };
    }
    if(cacheData && useCache) {
      this.saveCacheKey(cacheKey);
      Keychain.set(cacheKey, json ? JSON.stringify(cacheData) : cacheData)
    }else if (!cacheData && Keychain.contains(cacheKey)) {
      let cache = Keychain.get(cacheKey)
      cacheData = json ? JSON.parse(cache) : cache
    }else {this.ERROR.push(error);}
    return cacheData;
  }
  
  // 添加设置信息
  Run() {
    if (config.runsInApp) {
      this.registerAction("基础设置", this.setWidgetConfig);
    }
    this.registerAction("地区设置", async () => {
      await this.setCustomAction("地区设置", "设置地区疫情最新资讯\n正确输入省份地区\n例如：北京、上海、广东", {
        city: "港澳台地区不支持",
      },this.city);
    }, { name: 'location.circle', color: '#66CD00' });
  }
}
// @组件代码结束
await Runing(Widget)
