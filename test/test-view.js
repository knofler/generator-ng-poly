/*global describe, before, it */
'use strict';
var assert = require('yeoman-generator').assert
  , helpers = require('yeoman-generator').test
  , join = require('path').join
  , os = require('os');

describe('View generator', function () {
  before(function (done) {
    helpers.run(join(__dirname, '../app'))
      .inDir(join(os.tmpDir(), 'temp-view'))
      .withOptions({
        'skip-install': true
      })
      .withPrompts({
        appName: 'temp-view',
        markup: 'html',
        appScript: 'js',
        controllerAs: false,
        passFunc: true,
        namedFunc: true,
        testScript: 'js',
        testDir: 'app',
        style: 'less',
        bower: []
      })
      .withGenerators([
        join(__dirname, '../module'),
        join(__dirname, '../route'),
        join(__dirname, '../controller'),
        join(__dirname, '../view')
      ])
      .on('end', done);
  });

  describe('with HTML markup and LESS style', function () {
    before(function (done) {
      helpers.run(join(__dirname, '../view'))
        .withArguments(['test'])
        .withOptions({
          module: 'home'
        })
        .on('end', done);
    });

    it('should create view files', function () {
      assert.file([
        'app/home/test.tpl.html',
        'app/home/test.less'
      ]);
    });

  });

  describe('with HAML markup and CSS style', function () {
    before(function (done) {
      helpers.run(join(__dirname, '../view'))
        .withArguments(['test1'])
        .withOptions({
          module: 'home',
          markup: 'haml',
          style: 'css'
        })
        .on('end', done);
    });

    it('should create view files', function () {
      assert.file([
        'app/home/test1.tpl.haml',
        'app/home/test1.css'
      ]);
    });

  });

  describe('with Jade markup and SCSS style', function () {
    before(function (done) {
      helpers.run(join(__dirname, '../view'))
        .withArguments(['test2'])
        .withOptions({
          module: 'home',
          markup: 'jade',
          style: 'scss'
        })
        .on('end', done);
    });

    it('should create view files', function () {
      assert.file([
        'app/home/test2.tpl.jade',
        'app/home/test2.scss'
      ]);
    });

  });

  describe('with Jade markup and Stylus style', function () {
    before(function (done) {
      helpers.run(join(__dirname, '../view'))
        .withArguments(['test3'])
        .withOptions({
          module: 'home',
          markup: 'jade',
          style: 'styl'
        })
        .on('end', done);
    });

    it('should create view files', function () {
      assert.file([
        'app/home/test3.tpl.jade',
        'app/home/test3.styl'
      ]);
    });

  });

});
