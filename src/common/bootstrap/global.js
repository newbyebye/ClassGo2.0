/**
 * this file will be loaded before server started
 * you can define global functions used in controllers, models, templates
 */

/**
 * use global.xxx to define global functions
 * 
 * global.fn1 = function(){
 *     
 * }
 */

 /**
 * 验证是否为智能手机
 * @ param {string} data :this.userAgent;
 * @ return {bool}
 */
/** global checkMobile */
global.checkMobile = function(agent) {
    let flag = true;
    agent = agent.toLowerCase();
    let keywords = ["android", "iphone", "ipod", "ipad", "windows phone", "mqqbrowser"];

    //排除 Windows 桌面系统  
    if (!(agent.indexOf("windows nt") > -1) || (agent.indexOf("windows nt") > -1 && agent.indexOf("compatible; msie 9.0;") > -1)) {
        //排除苹果桌面系统  
        if (!(agent.indexOf("windows nt") > -1) && !agent.indexOf("macintosh") > -1 && !(agent.indexOf("ipad")>-1)) {
            for (let item of keywords) {
                if (agent.indexOf(item) > -1) {
                    flag = true;
                    break;
                }
            }
        }
    }
    //return flag;

    return true;
}
/**
 * 验证时否是微信
 *
 */
global.is_weixin=(agent)=>{
    let flag = false;
    agent = agent.toLowerCase();
    //let key = ["mqqbrowser","micromessenger"];
    let key = ["micromessenger"];
    //排除 Windows 桌面系统
    if (!(agent.indexOf("windows nt") > -1) || (agent.indexOf("windows nt") > -1 && agent.indexOf("compatible; msie 9.0;") > -1)) {
        //排除苹果桌面系统
        if (!(agent.indexOf("windows nt") > -1) && !agent.indexOf("macintosh") > -1) {
            for (let item of key) {
                if (agent.indexOf(item) > -1) {
                    flag = true;
                    break;
                }
            }
        }
    }
    return flag;

}