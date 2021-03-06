/*！
 * preinstall tool
 * Copyright(c) 2016 yanjixiong <yjk99@qq.com>
 */

var fs = require("fs");
var util = require("util");

var uploadDirPath = "public/upload";

console.log(util.format("checking \x1b[36m %s \x1b[0m directory.", uploadDirPath));
fs.access(uploadDirPath, fs.F_OK, function(err) {
	if (err) {
		fs.mkdir(uploadDirPath, function(err) {
			if (err) {
				console.log(util.format("fail to creat directory \x1b[36m %s \x1b[0m .", uploadDirPath));
			} else {
				console.log(util.format("successfully creat directory \x1b[36m %s \x1b[0m .", uploadDirPath));
			}
		});
	} else {
		console.log(util.format("directory \x1b[36m %s \x1b[0m exists.", uploadDirPath));
	}
});
