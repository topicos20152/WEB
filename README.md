<h1 align="center">
	<br>
	<img width="400" src="https://rawgit.com/topicos20152/WEB/master/app/assets%40admin/images/logo.png">
	<br>
	<br>
</h1>

> A 2k16 vision of the <a href="https://sigaa.ufrn.br/" target="_blank">Sigaa UFRN</a>

This project is part of the Sigaa-X's application suite.

Absolutely designed to provide a clean, fast and atractive web vision for the academic application used in the Federal University of Rio Grande do Norte, it comes with a smooth front-end made for students by students.

## Technologies
  * <a href="http://www.w3schools.com/html/html5_intro.asp" target="_blank">HTML5</a>
  * <a href="http://www.w3schools.com/css/css3_intro.asp" target="_blank">CSS3</a>
  * <a href="https://www.javascript.com/" target="_blank">JavaScript</a>
  * <a href="https://angularjs.org/" target="_blank">AngularJS</a>
  

## Usage

To get you started you can simply download or clone the repo and put it inside a web server like Apache, nginx, etc. (only to prevent Cross Origin Request bugs).

Then you can open the folder `http://<your webserver base url>/sigaa-x/app` and the index.html should renderize like a charm.


## Development

### Linux and OS X

##### First, you should clone the repo
```bash
  $ git clone git@github.com:topicos20152/WEB.git sigaa-x-webapp
```

##### Then move the project to the webserver base
```bash
  $ mv sigaa-x-webapp <path to your webserver base>
```

##### Install the dependencies
Before you install the dependencies, you'll need to install <a href="https://nodejs.org/" target="_blank">node</a> and <a href="https://www.npmjs.com/" target="_blank">npm</a>!

##### Really install the dependencies
```bash
  $ cd sigaa-x-webapp
  $ npm install    # install the javascript dependencies
  $ bower install    # install the 'front-end' dependencies
```

##### Run <a href="http://gulpjs.com/" target="_blank">gulp</a>
```bash
  $ gulp
```
When you run <a href="http://gulpjs.com/" target="_blank">gulp</a>, a process will start, this process
is responsible to watch your assets and:
  1. Check, concat and minify every single js file inside `app/assets/scripts/src/` to the `app/assets/scripts/main.min.js` file (the only one we use in your HTML).
  2. Check, concat, prefix and minify the css files inside `app/assets/styles/src/` to the `app/assets/styles/main.min.css` file. 
  3. Run the <a href="http://sass-lang.com/" target="_blank">sass</a> compiler (<a href="http://alistapart.com/article/why-sass" target="_blank">why sass?</a>).
  4. Keep watching every change in your js and css files.

*1 and 2 also means that you should not put any other js/css file outside the `src` path. If you do this, be sure you manually import it.*

##### Finally
You can start **developing**.

### Windows

hahaha jk ¯\\\_(ツ)_/¯
