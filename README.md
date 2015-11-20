<h1 align="center">
	<br>
	<img width="400" src="https://rawgit.com/topicos20152/WEB/master/app/assets%40admin/images/logo.png">
	<br>
	<br>
</h1>

> A 2k16 vision for the <a href="https://sigaa.ufrn.br/" target="_blank">SIGAA UFRN</a>

This project is part of the SIGAA-X application suite.

Absolutely designed to provide a clean, fast and attractive web vision for the academic application used in Federal University of Rio Grande do Norte, it comes with a smooth front-end made for students and by students.

# Technologies
  * <a href="http://www.w3schools.com/html/html5_intro.asp" target="_blank">HTML5</a>
  * <a href="http://www.w3schools.com/css/css3_intro.asp" target="_blank">CSS3</a>
  * <a href="https://www.javascript.com/" target="_blank">JavaScript</a>
  * <a href="https://angularjs.org/" target="_blank">AngularJS</a>
  

# Usage

To **get started** you can simply download or clone the repo and put it inside a web server like Apache, nginx, etc. (just to prevent Cross Origin Request bugs).
```bash
  $ git clone git@github.com:topicos20152/WEB.git sigaa-x-webapp
  $ mv sigaa-x-webapp <path to your webserver base>
```

Then you can open the folder `http://<your webserver base url>/sigaa-x-webapp/app` and the index.html should renderize like a charm.


# Development

## Linux and OS X

#### First, you should clone the repo
```bash
  $ git clone git@github.com:topicos20152/WEB.git sigaa-x-webapp
```

#### Then move the project to the webserver base
```bash
  $ mv sigaa-x-webapp <path to your webserver base>
```

#### Install the dependencies
Before you install the dependencies, you'll need to install <a href="https://nodejs.org/" target="_blank">node</a> and <a href="https://www.npmjs.com/" target="_blank">npm</a>!

#### Really install the dependencies
```bash
  $ cd sigaa-x-webapp
  $ npm install    # install the javascript dependencies
  $ bower install    # install the 'front-end' dependencies
```

#### Run <a href="http://gulpjs.com/" target="_blank">gulp</a>
```bash
  $ gulp
```
When you run <a href="http://gulpjs.com/" target="_blank">gulp</a>, a process will start, this process
is responsible for watching your assets and:
  1. Checking, concat'ing and minifying every single js file inside `app/assets/scripts/src/` into the `app/assets/scripts/main.min.js` file (the only one we use in your HTML).
  2. Checking, concat'ing, prefixing and minifying the css files inside `app/assets/styles/src/` into the `app/assets/styles/main.min.css` file. 
  3. Running the <a href="http://sass-lang.com/" target="_blank">sass</a> compiler (<a href="http://alistapart.com/article/why-sass" target="_blank">why sass?</a>).
  4. Keep watching every change in your js and css files.

*1 and 2 also mean that you should not put any other js/css file outside the `src` path. If you do this, make sure you manually imported it.*

#### Finally
You can start **developing**.

## Windows

hahaha jk ¯\\\_(ツ)_/¯

# Team

[![Wendell P. Barreto](https://avatars2.githubusercontent.com/u/2782873?v=3&s=144)](https://github.com/wendellpbarreto) | [![Hugo André](https://avatars1.githubusercontent.com/u/8400059?v=3&s=144)](https://github.com/hugoandregg) | [![Renato Nascimento](https://avatars0.githubusercontent.com/u/4237373?v=3&s=144)](https://github.com/rhnasc) | [![Marcel Luiz](https://avatars1.githubusercontent.com/u/8753560?v=3&s=144)](https://github.com/marcelluiz96)
---|---|---|---
[Wendell P. Barreto](https://github.com/wendellpbarreto) | [Hugo André](https://github.com/hugoandregg) | [Renato Nascimento](https://github.com/rhnasc) | [Marcel Luiz](https://github.com/marcelluiz96)

# License

The MIT License (MIT)

Copyright (c) 2015 SIGAA-X Webapp Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
