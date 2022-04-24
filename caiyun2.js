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
// script 	 ：@ LSP https://gitee.com/enjoyee/scriptable/raw/master/%E6%96%B0%E7%B3%BB%E5%88%97/material_weather.js
*/

FILE = FileManager.local()
FILEPATH = FILE.joinPath(FILE.libraryDirectory(), "/DJG.js")
const { DJG, Runing } = importModule(FILEPATH);

// @组件代码开始
class Widget extends DJG {
  constructor(arg) {
    super(arg);
    this.name = "彩云天气 2";
    this.widget_ID = "DJG-121";
    this.version = "V3.5";
    this.logo = 'https://gitee.com/scriptxx_djg/imgebed/raw/master/menu/Imported_Image.png';
    this.icoUrl = 'https://gitee.com/scriptxx_djg/script/raw/master/script/script_image/multiCaiyun/'
    this.Run();
    this.widgetConfigs = {
      // 天气描述
      weatherDesc: {
        CLEAR_DAY: "天晴",
        CLEAR_NIGHT: "天晴",
        PARTLY_CLOUDY_DAY: "多云",
        PARTLY_CLOUDY_NIGHT: "多云",
        CLOUDY: "多云",
        CLOUDY_NIGHT: "多云",
        LIGHT_HAZE: "雾霾",
        LIGHT_HAZE_NIGHT: "雾霾",
        MODERATE_HAZE: "雾霾",
        MODERATE_HAZE_NIGHT: "雾霾",
        HEAVY_HAZE: "雾霾",
        HEAVY_HAZE_NIGHT: "雾霾",
        LIGHT_RAIN: "下雨",
        MODERATE_RAIN: "下雨",
        HEAVY_RAIN: "下雨",
        STORM_RAIN: "下雨",
        FOG: "有雾",
        LIGHT_SNOW: "下雪",
        MODERATE_SNOW: "下雪",
        HEAVY_SNOW: "下雪",
        STORM_SNOW: "下雪",
        DUST: "浮尘",
        SAND: "沙尘",
        WIND: "大风",
      },
      weatherIcon: {
        CLEAR_DAY: "CLEAR_DAY", // 晴（白天） 
        CLEAR_NIGHT: "CLEAR_NIGHT", // 晴（夜间） 
        PARTLY_CLOUDY_DAY: "PARTLY_CLOUDY_DAY", // 多云（白天）  
        PARTLY_CLOUDY_NIGHT: "PARTLY_CLOUDY_NIGHT", // 多云（夜间）  
        CLOUDY: "CLOUDY", // 阴（白天）  
        CLOUDY_NIGHT: "CLOUDY", // 阴（夜间）  
        LIGHT_HAZE: "LIGHT_HAZE", // 轻度雾霾   
        LIGHT_HAZE_NIGHT: "LIGHT_HAZE_NIGHT", // 轻度雾霾   
        MODERATE_HAZE: "LIGHT_HAZE", // 中度雾霾  
        MODERATE_HAZE_NIGHT: "LIGHT_HAZE_NIGHT", // 中度雾霾  
        HEAVY_HAZE: "LIGHT_HAZE", // 重度雾霾   
        HEAVY_HAZE_NIGHT: "LIGHT_HAZE_NIGHT", // 重度雾霾   
        LIGHT_RAIN: "LIGHT_RAIN", // 小雨 
        MODERATE_RAIN: "MODERATE_RAIN", // 中雨 
        HEAVY_RAIN: "HEAVY_RAIN", // 大雨  
        STORM_RAIN: "HEAVY_RAIN", // 暴雨 
        FOG: "FOG", // 雾 FOG
        LIGHT_SNOW: "SNOW", // 小雪  
        MODERATE_SNOW: "SNOW", // 中雪 
        HEAVY_SNOW: "SNOW", // 大雪  
        STORM_SNOW: "SNOW", // 暴雪 
        DUST: "DUST", // 浮尘  
        SAND: "DUST", // 沙尘  
        WIND: "WIND", // 大风  
    },
      weatherBg: {
        CLEAR_DAY: "CLEAR_DAY", // 晴（白天）
        CLEAR_NIGHT: "CLEAR_NIGHT", // 晴（夜间）
        PARTLY_CLOUDY_DAY: "PARTLY_CLOUDY_DAY", // 多云（白天）
        PARTLY_CLOUDY_NIGHT: "PARTLY_CLOUDY_NIGHT", // 多云（夜间）
        CLOUDY: "PARTLY_CLOUDY_DAY", // 阴（白天）
        CLOUDY_NIGHT: "PARTLY_CLOUDY_NIGHT", // 阴（夜间）
        LIGHT_HAZE: "LIGHT_HAZE", // 轻度雾霾 
        LIGHT_HAZE_NIGHT: "LIGHT_HAZE", // 轻度雾霾 
        MODERATE_HAZE: "LIGHT_HAZE", // 中度雾霾 
        MODERATE_HAZE_NIGHT: "LIGHT_HAZE", // 中度雾霾 
        HEAVY_HAZE: "LIGHT_HAZE", // 重度雾霾 
        HEAVY_HAZE_NIGHT: "LIGHT_HAZE", // 重度雾霾 
        LIGHT_RAIN: "RAIN", // 小雨 
        MODERATE_RAIN: "RAIN", // 中雨 
        HEAVY_RAIN: "RAIN", // 大雨 
        STORM_RAIN: "RAIN", // 暴雨 
        FOG: "FOG", // 雾 
        LIGHT_SNOW: "SNOW", // 小雪 
        MODERATE_SNOW: "SNOW", // 中雪
        HEAVY_SNOW: "SNOW", // 大雪 
        STORM_SNOW: "SNOW", // 暴雪
        DUST: "LIGHT_HAZE", // 浮尘  
        SAND: "LIGHT_HAZE", // 沙尘 
        WIND: "WIND", // 大风 
      },
      weatherSFIcos: {
        CLEAR_DAY: "sun.max.fill", // 晴（白天） CLEAR_DAY 
        CLEAR_NIGHT: "moon.stars.fill", // 晴（夜间） CLEAR_NIGHT 
        PARTLY_CLOUDY_DAY: "cloud.sun.fill", // 多云（白天）  PARTLY_CLOUDY_DAY 
        PARTLY_CLOUDY_NIGHT: "cloud.moon.fill", // 多云（夜间）  PARTLY_CLOUDY_NIGHT 
        CLOUDY: "cloud.fill", // 阴（白天）  CLOUDY 
        CLOUDY_NIGHT: "cloud.fill", // 阴（夜间）  CLOUDY 
        LIGHT_HAZE: "sun.haze.fill", // 轻度雾霾   LIGHT_HAZE 
        LIGHT_HAZE_NIGHT: "sun.haze.fill", // 轻度雾霾   LIGHT_HAZE 
        MODERATE_HAZE: "sun.haze.fill", // 中度雾霾  MODERATE_HAZE 
        MODERATE_HAZE_NIGHT: "sun.haze.fill", // 中度雾霾  MODERATE_HAZE 
        HEAVY_HAZE: "sun.haze.fill", // 重度雾霾   HEAVY_HAZE 
        HEAVY_HAZE_NIGHT: "sun.haze.fill", // 重度雾霾   HEAVY_HAZE 
        LIGHT_RAIN: "cloud.drizzle.fill", // 小雨 LIGHT_RAIN 
        MODERATE_RAIN: "cloud.drizzle.fill", // 中雨 MODERATE_RAIN 
        HEAVY_RAIN: "cloud.rain.fill", // 大雨  HEAVY_RAIN 
        STORM_RAIN: "cloud.heavyrain.fill", // 暴雨 STORM_RAIN 
        FOG: "cloud.fog.fill", // 雾 FOG 
        LIGHT_SNOW: "cloud.snow.fill", // 小雪  LIGHT_SNOW 
        MODERATE_SNOW: "cloud.snow.fill", // 中雪 MODERATE_SNOW 
        HEAVY_SNOW: "cloud.snow.fill", // 大雪  HEAVY_SNOW 
        STORM_SNOW: "cloud.snow.fill", // 暴雪 STORM_SNOW 
        DUST: "sun.dust.fill", // 浮尘  DUST 
        SAND: "smoke.fill", // 沙尘  SAND 
        WIND: "wind", // 大风  WIND 
    },
      // 英文字体
    enFontUrl: "https://mashangkaifa.coding.net/p/coding-code-guide/d/coding-code-guide/git/raw/master/HelveticaNeue-Thin.otf",
    }
  }
  
  /**
   * 渲染函数，函数名固定
   * 可以根据 this.widgetFamily 来判断小组件尺寸，以返回不同大小的内容
   */
  async render () {
    let widget = this.getWidget();
    if (!this.settings.caiyunKEY) {
      if(config.runsInWidget) return await this.renderAlert('需要申请彩云天气key');
      return await this.inputKey();
  	}
    try{
      switch (this.widgetFamily) {
        case 'small':
        	await this.renderSmall(widget);
        	break;
        case 'medium':
        	await this.renderMedium(widget);
        	break;
        default:
        	return await this.renderAlert();
      }
    }catch(e){
      this.ERROR.push({error:e.toString()});
    }
    return widget;
  }
  
  async http_get (url, json = true, useCache = true, options = null, method = 'GET') {
    let cacheKey = this.hash('caiyunWeather'+this.settings.caiyunKEY);
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
  
  /**
  * 获取彩云天气信息
  */
  async getWeather(dailysteps = 7) {
    // 小时
    const hour = new Date().getHours()
    // 天气数据
    let weatherInfo = {};
    let key = this.settings.caiyunKEY;
    const locData = await this.getLocation();
    const lon = locData.location.longitude;
    const lat = locData.location.latitude;
    let district = locData.postalAddress.subLocality || locData.locality;
    weatherInfo.city = district; // 当前位置
    // 彩云天气域名
    const caiyunUrl = `https://api.caiyunapp.com/v2.5/${key}/${lon},${lat}/weather.json?alert=true&dailysteps=${dailysteps}`
    const weatherJsonData = await this.http_get(caiyunUrl);

    if (weatherJsonData.status == "ok") {
      log("天气数据请求成功")

      // 天气突发预警
      let alertWeather = weatherJsonData.result.alert.content
      if (alertWeather.length > 0) {
        const alertWeatherTitle = alertWeather[0].title
        log(`突发的天气预警==>${alertWeatherTitle}`)
        weatherInfo.alertWeatherTitle = alertWeatherTitle
      }

      weatherInfo.daily = weatherJsonData.result.daily; // 全部温度
      const temperatureData = weatherInfo.daily.temperature[0]; // 温度范围
      const minTemperature = temperatureData.min; // 最低温度
      const maxTemperature = temperatureData.max; // 最高温度
      weatherInfo.minTemperature = Math.round(minTemperature)
      weatherInfo.maxTemperature = Math.round(maxTemperature)
      // 体感温度
      const bodyFeelingTemperature = weatherJsonData.result.realtime.apparent_temperature
      weatherInfo.bodyFeelingTemperature = Math.floor(bodyFeelingTemperature)

      // 显示温度
      const temperature = weatherJsonData.result.realtime.temperature
      weatherInfo.temperature = Math.floor(temperature)

      // 天气状况 weatherIcos[weatherIco]
      let weather = weatherJsonData.result.realtime.skycon
      let night = hour - 12 >= 7
      let nightCloudy = night && weather == "CLOUDY"
      let nightLightHaze = night && weather == "LIGHT_HAZE"
      let nightModerateHaze = night && weather == "MODERATE_HAZE"
      let nightHeavyHaze = night && weather == "HEAVY_HAZE"
      if (nightCloudy) {
        weather = "CLOUDY_NIGHT"
      }
      if (nightLightHaze) {
        weather = "LIGHT_HAZE_NIGHT"
      }
      if (nightModerateHaze) {
        weather = "MODERATE_HAZE_NIGHT"
      }
      if (nightHeavyHaze) {
        weather = "HEAVY_HAZE_NIGHT"
      }
      weatherInfo.weatherIco = weather

      // 天气描述
      const weatherDesc = weatherJsonData.result.forecast_keypoint
      weatherInfo.weatherDesc = weatherDesc.replace("。还在加班么？", "，")
      log("天气预告==>" + weatherDesc)

      // 降水率
      weatherInfo.probability = weatherJsonData.result.minutely.probability;

      // 相对湿度
      const humidity = (Math.floor(weatherJsonData.result.daily.humidity[0].avg * 100)) + "%"
      weatherInfo.humidity = humidity;

      // 舒适指数
      const comfort = weatherJsonData.result.realtime.life_index.comfort.desc
      weatherInfo.comfort = comfort
      log(`舒适指数：${comfort}`)

      // 紫外线指数
      const ultraviolet = weatherJsonData.result.realtime.life_index.ultraviolet.desc
      weatherInfo.ultraviolet = ultraviolet

      // 空气质量
      const aqi = weatherJsonData.result.realtime.air_quality.aqi.chn
      const aqiInfo = this.airQuality(aqi)
      weatherInfo.aqiInfo = aqiInfo

      // 日出日落
      const astro = weatherJsonData.result.daily.astro[0]
      // 日出
      const sunrise = astro.sunrise.time
      // 日落
      const sunset = astro.sunset.time
      weatherInfo.sunrise = sunrise.toString()
      weatherInfo.sunset = sunset.toString()

      // 小时预告
      let hourlyArr = []
      const hourlyData = weatherJsonData.result.hourly
      const temperatureArr = hourlyData.temperature
      const temperatureSkyconArr = hourlyData.skycon
      for (var i = 0; i < temperatureArr.length; i++) {
        let hourlyObj = {}
        hourlyObj.datetime = temperatureArr[i].datetime
        hourlyObj.temperature = Math.round(temperatureArr[i].value)

        let weather = temperatureSkyconArr[i].value
        if (nightCloudy) {
          weather = "CLOUDY_NIGHT"
        }
        hourlyObj.skycon = `${weather}`
        hourlyArr.push(hourlyObj)
      }
      weatherInfo.hourly = hourlyArr
    } else {
      log(`请求彩云天气出错：${weatherJsonData.status}`)
    }
    return weatherInfo
  }
  
  // 小组件
  async renderSmall(widget){
    // 获取天气数据
    const weatherInfo = await this.getWeather(6);
    // 定位图标
    const locationStack = widget.addStack()
    const locationImg = await this.getImageByUrl(this.icoUrl+'location.PNG')
    this.addImage(locationStack, locationImg, {w:12, h:12});
    // 定位
    this.addText(locationStack, `  ${weatherInfo.city}`, 12);
    widget.addSpacer(2)
    this.addText(widget, `${weatherInfo.temperature}°c`, 48, {font:'light'});
    widget.addSpacer(2)
    // 天气图标
    let realtimeIcon = weatherInfo.weatherIco;
    let weatherIco = this.getSFSymbol(this.widgetConfigs.weatherSFIcos[realtimeIcon]);
    if (this.settings.button[0] && this.settings.button[1]) {
      const urlStr = 'https://gitee.com/scriptxx_djg/script/raw/master/script/script_image/multiCaiyun/weatherIcon/icon1/'
      const url = `${urlStr}${this.widgetConfigs.weatherIcon[realtimeIcon]}.PNG`
      weatherIco = await this.getImageByUrl(url)
    }
    let icoStack = widget.addStack();
    icoStack.centerAlignContent()
    this.addImage(icoStack, weatherIco, {w:22, h:22});
    this.addText(icoStack, ` ${this.widgetConfigs.weatherDesc[weatherInfo.weatherIco]}`, 14);
    this.addText(icoStack, `｜空气${weatherInfo.aqiInfo[0]}`, 14);
    widget.addSpacer(5)
    // 日温度
    const daily = weatherInfo.daily;
    const temperatureArr = daily.temperature
    const temperature = temperatureArr[0];
    const tempStack = widget.addStack();
    tempStack.layoutHorizontally()
    this.addText(tempStack, `${temperature.max}°C`, 14);
    this.addText(tempStack, ` / ${temperature.min}°C`, 14, {opacity:0.6});
    await this.setWidgetBackground(widget, weatherInfo);
  }
  
  /**
    * 中组件
    */
  async renderMedium(widget) {
    //-------------------------------------
    // 天气对应的背景
    let weatherBgUrls = this.widgetConfigs.weatherBg
    // 天气对应的图标
    let weatherIcos = this.widgetConfigs.weatherIcon
    //-------------------------------------
    widget.addSpacer(20)
    let widgetWidth = this.getWidgetWidthSize('medium')
    //-------------------------------------
    const currentDate = new Date()
    // 获取天气信息
    const sizeCount = 6
    // 六天内天气
    const weatherInfo = await this.getWeather(sizeCount);

    // 当前信息
    const currentInfoStack = widget.addStack()
    currentInfoStack.size = new Size(widgetWidth, 0);
    currentInfoStack.layoutHorizontally()
    currentInfoStack.addSpacer(15)
    // 
    const temStack = currentInfoStack.addStack()
    temStack.layoutVertically()
    temStack.addSpacer(10)
    // 定位图标
    const locationStack = temStack.addStack()
    locationStack.centerAlignContent()
    locationStack.addSpacer(3)
    const locationImg = await this.getImageByUrl(this.icoUrl+'location.PNG')
    this.addImage(locationStack, locationImg, {w:10, h:10});
    // 定位
    locationStack.addSpacer(7)
    this.addText(locationStack, `${weatherInfo.city} • `, 10);
    
    // 天气文字
    this.addText(locationStack, `${this.widgetConfigs.weatherDesc[weatherInfo.weatherIco]} • `, 10);
    // 农历
    const lunarInfo = await this.calendarDate();
    let lunarStr = `${lunarInfo.lunarMonthCn}${lunarInfo.lunarDayCn}`
    const holidayOK = this.settings.button[0] && this.settings.button[2];
    if(lunarInfo.solarTerm && holidayOK) lunarStr = `${lunarStr} ⊙ ${lunarInfo.solarTerm}`;
    this.addText(locationStack, lunarStr, 10)
    // 更新时间
    const updateText = `${this.getDateStr(new Date(), "HH:mm")} ⊹`
    this.addText(locationStack, ` • ${updateText}`, 10);
    locationStack.addSpacer()
    // 
    temStack.addSpacer(8);
    let imgSpan = temStack.addStack()
    this.addText(imgSpan, `${weatherInfo.temperature}°c`, 40, {font:'light', align:'left'});
    currentInfoStack.addSpacer()
    //------
    const topRightStack = currentInfoStack.addStack()
    topRightStack.layoutVertically()
    topRightStack.addSpacer(22)
    const previewSize = new Size(11, 11)
    // 
    let stackWidth = 60
    const comfort = weatherInfo.comfort;
    if (comfort.length > 2) {
      stackWidth = 67
    }
    const singleSize = new Size(stackWidth, 0)
    const comfortStack = topRightStack.addStack()
    comfortStack.layoutHorizontally()
    comfortStack.size = singleSize
    let img = await this.getImageByUrl(this.icoUrl+'comfort.PNG')
    this.addImage(comfortStack, img, {w:11, h:11});
    comfortStack.addSpacer(5)
    this.addText(comfortStack, weatherInfo.comfort, 10, {font:'medium'});
    comfortStack.addSpacer()
    // -----
    topRightStack.addSpacer(5)
    const aqStack = topRightStack.addStack()
    aqStack.layoutHorizontally()
    aqStack.size = singleSize
    img = await this.getImageByUrl(this.icoUrl+'aqi.PNG')
    this.addImage(aqStack, img, {w:11, h:11});
    aqStack.addSpacer(6)
    this.addText(aqStack, weatherInfo.aqiInfo, 10, {font:'medium'});
    aqStack.addSpacer()
    // -----
    topRightStack.addSpacer(6)
    const rainStack = topRightStack.addStack()
    rainStack.layoutHorizontally()
    rainStack.size = singleSize
    img = await this.getImageByUrl(this.icoUrl+'humidity.PNG')
    this.addImage(rainStack, img, {w:11, h:11});
    rainStack.addSpacer(6)
    this.addText(rainStack, weatherInfo.humidity, 10, {font:'medium'});
    rainStack.addSpacer()
    topRightStack.addSpacer()

    // ========================================================
    // 未来天气信息
    widget.addSpacer(5)
    const weatherInfoStack = widget.addStack()
    weatherInfoStack.layoutHorizontally();
    weatherInfoStack.size = new Size(widgetWidth, 0);
    // 日温度
    const daily = weatherInfo.daily
    // 日温度
    const temperatureArr = daily.temperature
    const perSize = widgetWidth / sizeCount
    const flag = this.settings.button[0] && this.settings.button[1]
    for (let index = 0; index < temperatureArr.length; index++) {
      let itemStack = weatherInfoStack.addStack()
      itemStack.size = new Size(perSize, 0)
      itemStack.setPadding(0, 0, 10, 0)
      itemStack.layoutVertically()
      itemStack.centerAlignContent()

      // 日期
      let dateStack = itemStack.addStack()
      dateStack.layoutHorizontally()
      dateStack.addSpacer()
      const dailyTemperature = temperatureArr[index]
      let dateText = dailyTemperature.date.slice(8, 10)
      // 替换实时天气icon
      let realtimeIcon = weatherInfo.weatherIco;
      if (dateText == currentDate.getDate()) {
        dateText = `今天`
      } else {
        dateText = `${dateText}日`
        realtimeIcon = daily.skycon[index].value
      }
      this.addText(dateStack, dateText, 10);
      dateStack.addSpacer()
      itemStack.addSpacer(6)

      // 天气图标
      let weatherIco = this.getSFSymbol(this.widgetConfigs.weatherSFIcos[realtimeIcon])
      if (flag) {
        const urlStr = 'https://gitee.com/scriptxx_djg/script/raw/master/script/script_image/multiCaiyun/weatherIcon/icon1/'
        const url = `${urlStr}${this.widgetConfigs.weatherIcon[realtimeIcon]}.PNG`
        weatherIco = await this.getImageByUrl(url)
      }
      let icoStack = itemStack.addStack()
      icoStack.layoutHorizontally()
      icoStack.addSpacer()
      this.addImage(icoStack, weatherIco, {w:22, h:22});
      icoStack.addSpacer()
      itemStack.addSpacer(6)

      // 温度区间
      let temperatureStack = itemStack.addStack()
      temperatureStack.setPadding(0, 0, 0, 0)
      temperatureStack.layoutHorizontally()
      temperatureStack.addSpacer()
      let temperature = `${Math.floor(dailyTemperature.min)}/${Math.floor(dailyTemperature.max)}°`
      this.addText(temperatureStack, temperature, 11);
      temperatureStack.addSpacer()
    }

    //-------------------------------------
    widget.addSpacer(15)
    await this.setWidgetBackground(widget, weatherInfo);
  }
  
  async setWidgetBackground(widget, weatherInfo) {
    if (this.settings.button[0]) {
      const urlStr = 'https://gitee.com/scriptxx_djg/script/raw/master/script/script_image/multiCaiyun/background/bg'
      let index = this.settings.choiceBut[0]+1;
      const url = `${urlStr}${index}/${this.widgetConfigs.weatherBg[weatherInfo.weatherIco]}.jpeg`
      let bgImg = await this.getImageByUrl(url);
      widget.backgroundImage = await this.shadowImage(
      	bgImg,
        '#000000',
      	0.3,
      );
    }else{
      await this.getWidgetBackgroundImage(widget);
    }
  }
  /**
    * 空气指标质量
    * @param {number} levelNum 控制aiq
    */
    airQuality(levelNum) {
        // 0-50 优，51-100 良，101-150 轻度污染，151-200 中度污染
        // 201-300 重度污染，>300 严重污染
        if (levelNum >= 0 && levelNum <= 50) {
            return "优秀"
        } else if (levelNum >= 51 && levelNum <= 100) {
            return "良好"
        } else if (levelNum >= 101 && levelNum <= 150) {
            return "轻度"
        } else if (levelNum >= 151 && levelNum <= 200) {
            return "中度"
        } else if (levelNum >= 201 && levelNum <= 300) {
            return "重度"
        } else {
            return "严重"
        }
    }
  
  /**
   * 获取SFSymbol
   * @param {string}} name 名
   * @param {number} size 尺寸
   */
  getSFSymbol(name, size) {
    const sf = SFSymbol.named(name)
    if (sf != null) {
      if (size != undefined && size != null) {
        sf.applyFont(Font.systemFont(size))
      }
      return sf.image
    } else {
      return undefined
    }
  }
  
  async renderTables() {
    const actions = () => {
      if(this.settings.button[0]){
        return [
        {
          title: '开启设置样式',
          but: 1,
        },
        {
      	  explain: '基础设置中的文字颜色与背景将失效，关闭恢复',
        },
        {
      	  title: "天气图标",
          but: 2,
        },
        {
      	  explain: '开启切换新样式天气图标'
        },
        {
          title: "背景图样式",
          val: ["样式一","样式二"],
          index: 1,
        },
        {
      	  explain: '点击切换背景图样式'
        },
        {
      	  title: "显示节假日",
          but: 3,
        },
        {
      	  explain: '如果是节假日，中组件将会在顶部合适的位置显示'
        }];
      }else {
        return [
        {
          title: '开启设置样式',
          but: 1,
        },
        {
      	  explain: '基础设置中的文字颜色与背景将失效，关闭恢复',
        }]
      }
    }
    const table = new UITable();
    table.showSeparators = true;
    await this.preferences(table, actions, "样式设置", true);
    await table.present();
  }
  
  // 彩云天气
  async inputKey(){
    const message = '申请彩云天气key';
    const idx = await this.generateAlert(message, ['申请key','输入key']);
    if(idx === 0) return await Safari.open('https://dashboard.caiyunapp.com/user/sign_up/',false);
    await this.setCustomAction("输入彩云key", "只有输入正确的彩云key\n组件才会生效", {
      caiyunKEY: "此处输入彩云key",
    });
  }
  
  // 添加设置信息
  Run(){
    if (config.runsInApp) {
      this.registerAction("基础设置", this.setWidgetConfig);
      this.registerAction("彩云key", async () => {
        await this.inputKey()
      }, this.logo);
      this.registerAction("样式设置", async () => {
        await this.renderTables()
      }, { name: 'gearshape.2.fill', color: '#EE9A49' });
      this.registerAction("自动定位", async () => {
        await this.setCustomAction("自动定位刷新间隔", "建议刷新时间不低于5，单位：分钟", {
            locTime: '',
        },false);
      }, { name: 'location.circle', color: '#66CD00' });
    }
  }
}

// @组件代码结束
await Runing(Widget)
