<h1 align="center">
	<br>
	<img width="400" src="https://rawgit.com/topicos20152/WEB/master/app/assets%40admin/images/logo.png">
	<br>
	<br>
</h1>

> Uma visão 2k16 para o <a href="https://sigaa.ufrn.br/" target="_blank">SIGAA UFRN</a>

Esse projeto faz parte da suíte de aplicação SIGAA-X. 


Completamente projetado para prover uma interface web atraente, limpa e rápida para o aplicativo acadêmico utilizado na Universidade Federal do Rio Grande do Norte. Inclui um front-end suave e elegante feito por estudantes para estudantes.

# Tecnologias
  * <a href="http://www.w3schools.com/html/html5_intro.asp" target="_blank">HTML5</a>
  * <a href="http://www.w3schools.com/css/css3_intro.asp" target="_blank">CSS3</a>
  * <a href="https://www.javascript.com/" target="_blank">JavaScript</a>
  * <a href="https://angularjs.org/" target="_blank">AngularJS</a>
  

# Instruções de uso

Para começar a fazer uso,, você pode simplesmente fazer o download ou um "clone" do repositório, e colocá-lo dentro de algum web server como o Apache, nginx, etc. (a fim de prevenir bugs de solicitação de origem cruzada).

Então você pode abrir a pasta `http://<your webserver base url>/sigaa-x/app` e o arquivo index.html deve renderizar como mágica.

# Desenvolvimento

## Linux e OS X

#### Primeiramente você deve clonar o repositório
```bash
  $ git clone git@github.com:topicos20152/WEB.git sigaa-x-webapp
```

#### Então mover o projeto para o servidor web  base
```bash
  $ mv sigaa-x-webapp <caminho para seu webserver base>
```

#### Instalar as dependências
Antes  de instalar as dependências, você precisará instalar o
<a href="https://nodejs.org/" target="_blank">node</a> e <a href="https://www.npmjs.com/" target="_blank">npm</a>!

#### Instalando as dependências de fato
```bash
  $ cd sigaa-x-webapp
  $ npm install    # install the javascript dependencies
  $ bower install    # install the 'front-end' dependencies
```

#### Executando o  <a href="http://gulpjs.com/" target="_blank">gulp</a>
```bash
  $ gulp
```
Quando executar o <a href="http://gulpjs.com/" target="_blank">gulp</a>, um processo será iniciado. Esse processo é responsável por monitorar seus recursos, e:
  1. Checar, concatenar e reduzir todo arquivo js dentro de `app/assets/scripts/src/` para o arquivo `app/assets/scripts/main.min.js` (Que é o único utilizado pelo HTML).
  2. Checar, concaternar, gerir prefixos e reduzir todos os arquivos CSS dentro de `app/assets/styles/src/` para o arquivo `app/assets/styles/main.min.css`.  
  3. Executar o compilador sass <a href="http://sass-lang.com/" target="_blank"></a> compiler (<a href="http://alistapart.com/article/why-sass" target="_blank">por que sass?</a>).
  4. Manter um monitoramento sobre quaisquer alterações em seus arquivos js e css.
  
*1 e 2 também ressaltam que você não deve colocar qualquer arquivo js/css fora do caminho 'src'. Se você fizer isso, garanta que fez sua importação manual.

#### Finalmente
Você pode começar a **desenvolver**.

## Windows

hahaha sqn visse ¯\\\_(ツ)_/¯

# Team

[![Wendell P. Barreto](https://avatars2.githubusercontent.com/u/2782873?v=3&s=144)](https://github.com/wendellpbarreto) | [![Hugo André](https://avatars1.githubusercontent.com/u/8400059?v=3&s=144)](https://github.com/hugoandregg) | [![Renato Nascimento](https://avatars0.githubusercontent.com/u/4237373?v=3&s=144)](https://github.com/rhnasc) | [![Marcel Luiz](https://avatars1.githubusercontent.com/u/8753560?v=3&s=460)](https://github.com/marcelluiz96)
---|---|---|---
[Wendell P. Barreto](https://github.com/wendellpbarreto) | [Hugo André](https://github.com/hugoandregg) | [Renato Nascimento](https://github.com/rhnasc) | [Marcel Luiz](https://github.com/marcelluiz96)

# Licença

Licença do MIT (MIT)

Copyright (c) 2015 SIGAA-X Webapp Team



A permissão é concedida, a título gratuito, para qualquer pessoa que obtenha uma cópia deste software e arquivos de documentação associados (o "Software"), para lidar com o Software sem restrição, incluindo, sem limitação dos direitos de uso, copiar, modificar, mesclar , publicar, distribuir, sublicenciar e / ou vender cópias do Software, e para permitir que as pessoas às quais o Software é fornecido a fazê-lo, mediante as seguintes condições:

O aviso de direito autoral acima e este aviso de permissão devem ser incluídos em todas as cópias ou partes substanciais do Software.

O Software é fornecido "como está", sem qualquer tipo de garantia, expressa ou implícita, incluindo mas não se limitando a garantias de comerciabilidade, adequação a uma finalidade específica e não violação. Em nenhum caso os autores ou os detentores dos direitos autorais {{{1}}} se responsabilizarão por qualquer reclamação, danos ou qualquer outra responsabilidade, seja em razão de contrato, ato ilícito ou de outra forma, resultantes de ou em conexão com o software ou a utilização ou outras negociações no Software.