/* 
* @Author: sg
* @Date:   2014-06-12 13:51:42
* @Last Modified by:   sg
* @Last Modified time: 2014-06-19 03:29:40
* @Email: sujith3g@gmail.com 
*/
Package.describe({
summary: "jsTree 3.0.1 for meteor"
});
Package.on_use(function (api, where) {
	api.use(['jquery'], 'client');
	api.add_files(['lib/32px.png','lib/40px.png','lib/jstree.js','lib/style.css','lib/throbber.gif'], 'client');
});