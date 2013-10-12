/**
 * Created with JetBrains WebStorm.
 * User: small
 * Date: 13-10-12
 * Time: 下午3:21
 * To change this template use File | Settings | File Templates.
 */

var cfg = require("../../cfg/cfg.js");
var path = require("path");
var fs = require("fs");

console.log(cfg.projDir);

function mkdirOnce(dir){
    //如果目录不存在，则创建
    if(!fs.existsSync(dir)) fs.mkdir(dir);
}

mkdirOnce(cfg.projDir);

for(var i = 0, dirs = cfg.dirs, li = dirs.length; i < li; ++i){
    mkdirOnce(cfg.projDir + dirs[i]);
}


