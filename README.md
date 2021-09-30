# ChatBot Telegram
<h3>Teste de ChatBot, estudando NodeJS e Readme.MD</h3>
<h5>Ainda estudando...</h5>
<h3>Objetivo</h3>
<p>Estudar e melhorar as minhas habilidades em JavaScript</p>
<h3>Processo</h3>
<p>Utilizando o <a href="https://telegram.me/BotFather" target="_blank">@BotFather</a> do Telegram criei o chatbot com o nickname FubaEventsBot.</p>

```bash
/newbot
```
<p>A primeira funcionalidade é listar todos os eventos que irão acontecer. Sendo da mesma categoria que o BotFather, vamos pedir ao BotFather para ensinar dois comandos ao FubaEventsBot passando o comando:.</p>

```bash
/setcommands
```
<p>Agora para conversar com o chatbot, procure o FubaEventsBot e envie o seguinte comando:</p>

```bash
/allevents
```
<p>Não retornará nada, pois o chatbot ainda não sabe como responder. Deixando um pouco o BotFather de lado faremos o código JavaScript em cima da plataforma do NodeJS.</p>
<hr>
<b>Toda mensagem que enviamos para um chatbot do Telegram fica aguardando uma resposta por 24 horas, ou seja, para conseguirmos respondê-la precisamos ir até o Telegram, coletar as mensagens que estão aguardando resposta e respondê-las. Esse será o código que vamos desenvolver em JavaScript utilizando o NodeJS como plataforma.</b>
<hr>
<p>Criando uma pasta com o nome <b>fuba-events-bot</b> e dentro dela uma pasta chamada <b>src</b>.</p>
<p>No terminal entraremos nessa pasta:</p>

```bash
~$ cd Desktop/fuba-events-bot
```
<p>Com auxilio do <b>npm</b> (Node Package Manager), iniciaremos o projeto com o seguinte comando:</p>

```bash
npm init
```

