---
layout: post
title: "Automatize tarefas com Gulp"
date: 2017-01-27 15:56:00 -0300
author: Bruno Xavier
description: Aprenda a usar o Gulp para automatizar suas tarefas.
tags:
- frontend
- gulp
- automatizadores
categories:
- Automação de Tarefas
permalink: /automatize-suas-tarefas-com-gulp/
---

Fala galera, faz um bom tempo que não posto nada aqui, e para compensar isso, hoje começarei uma nova série: **Automação de Tarefas**. Nesse primeiro post, falarei sobre o Gulp, meu automatizador de tarefas preferido.

Automatizadores de tarefas são ferramentas que ajudam nós, desenvolvedores, a realizar tarefas repetitivas, tais como: minificação de arquivos, concatenação, testes, entre outras coisas essenciais para o desenvolvimento de um código bom e rápido.

Agora que você já sabe para que um automatizador de tarefas serve, vamos botar a mão na massa!

## Instalando o Gulp

Para instalar o Gulp, é necessário ter instalado em sua máquina, o [Node.js](https://nodejs.org/en/){:target="_blank"}. Caso já tenha instalado, basta rodar o seguinte comando na sua linha de comando, para instalar o CLI:

{% highlight sh %}
npm install -g gulp
{% endhighlight %}

Para verificar se o Gulp foi instalado corretamente, execute:

{% highlight sh %}
gulp -v
{% endhighlight %}

Se retornar a versão do Gulp, a instalação foi um sucesso.

## Iniciando a automatização

O Gulp faz uso do Gulpfile para a configuração das tarefas.

Para esse teste, criei a seguinte estrutura:

{% highlight html %}
|teste-gulp/
|--src/
|----script.js
|----main.js
|--Gulpfile.js
{% endhighlight %}

Nele faremos a **minificação** dos arquivos **js**, e depois **renomearemos** os arquivos minificados. Para isso precisamos instalar alguns [plugins](http://gulpjs.com/plugins/){:target="_blank"} - o Gulp faz uso desses plugins para a criação de tarefas - utilizaremos os seguintes plugins:

- **gulp-uglify**: para minificar os arquivos js.
- **gulp-rename**: para renomear os arquivos minificados.

Execute o comando abaixo para instalar os plugins:

{% highlight sh %}
npm install gulp gulp-uglify gulp-rename --save-dev
{% endhighlight %}

Instalamos novamente o Gulp. Porque o que foi instalado anteriormente foi o CLI - responsável por rodar o comando 'gulp' na linha de comando - e o instalado agora é o local, usado para rodar os testes no projeto. Agora, vamos criar o nosso Gulpfile:

{% highlight js %}
// Carregamos o Gulp e os plugins através da função 'require' do Node.js
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

// Definimos o diretório dos arquivos
var js = "./src/*.js";

// Criamos uma nova tarefa através do 'gulp.task' e nomeamos de minify-js
// Essa tarefa será responsável por minificar os arquivos js
gulp.task('minify-js', function() {

  // Acessamos o diretório dos nossos arquivos js
  return gulp.src(js)

  	// Usamos o uglify para minificar os arquivos js
    .pipe(uglify())

    // Renomeamos com .min o final dos nossos arquivos js
    .pipe(rename({
            suffix: '.min'
        }))

    // Pasta de destino dos nossos arquivos minificados js
    .pipe(gulp.dest('./src/'));
});

// Tarefa padrão quando executado o comando "gulp"
gulp.task('default',['minify-js']);

// Tarefa que ficará monitorando os arquivos, caso tenha alguma alteração, ele rodará novamente, comando "gulp watch".
gulp.task('watch', function() {
    gulp.watch(js, ['minify-js']);
});
{% endhighlight %}

Feito isso, para rodar as tarefas, execute o comando:

{% highlight sh %}
gulp
{% endhighlight %}

Ele executará todas as tarefas e ficará esperando mudanças nos arquivos.

## Conclusão

Como vimos, o Gulp é um ótimo automatizador de tarefas que facilita muito nosso desenvolvimento. Várias outras tarefas podem ser executadas, além da mostrada nesse tutorial. O Gulp é um projeto muito bacana, caso você queira contribuir, acesse o repositório no [GitHub](https://github.com/gulpjs/gulp){:target="_blank"} e veja como você pode ajudar.
