/*
* @Author: sg
* @Date:   2014-06-12 13:51:42
* @Last Modified by:   sg
* @Last Modified time: 2014-06-19 03:29:40
* @Email: sujith3g@gmail.com
*/
Package.describe({
summary: "jsTree 3.1.1 for meteor",
version: '0.0.5',
name: 'sujith3g:jstree',
git: 'https://github.com/sujith3g/jstree'
});
Package.on_use(function (api, where) {
	api.use(['jquery@1.11.3_2'], 'client');
	api.add_files([
			'lib/default/32px.png',
			'lib/default/40px.png',
			'lib/default/style.css',
			'lib/default/throbber.gif'
	], 'client');
	api.add_files([
			'lib/default-dark/32px.png',
			'lib/default-dark/40px.png',
			'lib/default-dark/style.css',
			'lib/default-dark/throbber.gif'
	], 'client');

	api.add_files('lib/jstree.js','client');
});
Package.onTest(function(api) {
  api.use('tinytest');
  api.use('sujith3g:jstree');
  // api.addFiles('tests/server/example-spec.js', 'server');
  api.addFiles('tests/jstree-test.js', "client");
});
