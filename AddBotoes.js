// seleciona os botões pelo ID
const mensagem = document.querySelector("#mensagem");

const botao1 = document.querySelector("#botao1");
const botao2 = document.querySelector("#botao2");//codigo basico de adição de botões

// espaço para adiçõa de botões
const botao3 = document.querySelector("#botao3");
const botao4 = document.querySelector("#botao4");
const botao5 = document.querySelector("#botao5");
const botao6 = document.querySelector("#botao6");
const botao7 = document.querySelector("#botao7");
const botao8 = document.querySelector("#botao8");
const botao9 = document.querySelector("#botao9");

const botao10 = document.querySelector("#botao10");
const botao11 = document.querySelector("#botao11");
const botao12 = document.querySelector("#botao12");
const botao13 = document.querySelector("#botao13");
const botao14 = document.querySelector("#botao14");

const botao15 = document.querySelector("#botao15");
const botao16 = document.querySelector("#botao16");
const botao17 = document.querySelector("#botao17");
const botao18 = document.querySelector("#botao18");
const botao19 = document.querySelector("#botao19");
const botao20 = document.querySelector("#botao20");
//here
const botao21 = document.querySelector("#botao21");
const botao22 = document.querySelector("#botao22");
const botao23 = document.querySelector("#botao23");
const botao24 = document.querySelector("#botao24");

const botao25 = document.querySelector("#botao25");
const botao26 = document.querySelector("#botao26");
const botao27 = document.querySelector("#botao27");
const botao28 = document.querySelector("#botao28");
const botao29 = document.querySelector("#botao29");






let linhasDeTexto = [];

// adiciona ouvintes de evento de clique aos botões
mensagem.addEventListener("click", function() {
  // adiciona o texto ao array, juntamente com o índice da linha
  linhasDeTexto.push({texto: ("console.log('O programador Rafael Silva diz:Bons estudos para todos!<br>espero que esse programa possa ajudar todos que precisarem de uma ferramenta<br> de copiar blocos de código. O uso é simples e instintivo,<br>basta procurar a linha de código que deseja copiar, ou mesmo<br>montar uma sequencia lógica de codigo para ser <br>modificado no editor de código. pode ser usado tambem para <br>lembrar dos comandos,em fim...os botões apagar texto,apagar linha<br>e copiar,estão à disposição! o texto tambem pode ser<br>copiado com o mouse!<br>esse programa ainda precisa de muitas<br> atualizações e melhorias!! mas acredito que um bom estudante pode<br>superar as falhas dessa versão inicial,<br> deixei um repositório publico no git hub!!<br> espero vocês por lá!! deixem seus comentários e opniões!!<br>Agora clique em apagar tudo e boa sorte! "), indice: linhasDeTexto.length});
  // atualiza o conteúdo da div
  atualizarDiv();
});//hello do programador



// adiciona ouvintes de evento de clique aos botões
botao1.addEventListener("click", function() {
  // adiciona o texto ao array, juntamente com o índice da linha
  linhasDeTexto.push({texto: ("console.log('Helo world!');<br><br>document.write('ola Mundo!');<br><br><  script src='Caminho do arqui.HTML' >  < / script  >"), indice: linhasDeTexto.length});
  // atualiza o conteúdo da div
  atualizarDiv();
});//hello world

botao2.addEventListener("click", function() {
  // adiciona o texto ao array, juntamente com o índice da linha
  linhasDeTexto.push({texto: "<  script  ><br><br>var x = 5;<br><br>document.write( x );<br><br><  /  script  ><br><br><br>//output: 5", indice: linhasDeTexto.length});
  // atualiza o conteúdo da div
  atualizarDiv();
});//variaveis

// espaço para mais botões

botao3.addEventListener("click", function() {
  // adiciona o texto ao array, juntamente com o índice da linha
  linhasDeTexto.push({texto: "<  script  ><br><br>var string_1 = ''meu nome é''<br><br><br>var_2 = ''Rafael Silva''<br><br><br>var string_3 = string_1 + string_2;<br><br><br>document.write(string_3);<br><br><  /  script  ><br><br>//output:  Meu nome é Rafael Silva", indice: linhasDeTexto.length});
  // atualiza o conteúdo da div
  atualizarDiv();
});//stings

botao4.addEventListener("click", function() {
  // adiciona o texto ao array, juntamente com o índice da linha
  linhasDeTexto.push({texto: "if (expressão){    };<br><br>exemplo:<br><br>var a = 20;<br><br>if( a > 10 ) {<br>document.write('' valor maior que 10 '');<br><br>}<br>else{<br>document.write('' valor menor ou igual a 10 ''); <br>}<br><br>//output: valor maior que 10", indice: linhasDeTexto.length});
  // atualiza o conteúdo da div
  atualizarDiv();
});//if/else

botao5.addEventListener("click", function() {
  // adiciona o texto ao array, juntamente com o índice da linha
  linhasDeTexto.push({texto: "var = 75; <br><br>switch ( marcas ){<br><br>case 90:<br>document.write('' excelente '');<br>break;<br><br>case 75:<br>document.write('' grande '');<br>break;<br><br>case 45:<br>document.write('' bom  '');<br>break;<br><br>defalt:<br>document.write('' ok  '');<br>break;<br><br>}<br><br>//output: grande", indice: linhasDeTexto.length});
  // atualiza o conteúdo da div
  atualizarDiv();
});//switch

botao6.addEventListener("click", function() {
  // adiciona o texto ao array, juntamente com o índice da linha
  linhasDeTexto.push({texto: "for (inicialização; condição; incremento)<br>{<br>//código a ser executado<br>}<br><br>Exemplo:<br><br>for(i = 1, i < = 5 , i++)<br>{<br>document.write( i+ );<br>}<br><br>//output:1 2 3 4 5", indice: linhasDeTexto.length});
  // atualiza o conteúdo da div
  atualizarDiv();
});//loop for

botao7.addEventListener("click", function() {
  // adiciona o texto ao array, juntamente com o índice da linha
  linhasDeTexto.push({texto: "while (condição)<br>{<br>//codigo a ser executado<br>}<br><br>Exemplo:<br><br>var i = 11;<br><br>while(i < = 15)<br>{<br>document.write(i+);<br>i++;<br>}<br><br>//output:  11 12 13 14 15", indice: linhasDeTexto.length});
  // atualiza o conteúdo da div
  atualizarDiv();
});//while
botao8.addEventListener("click", function() {
  // adiciona o texto ao array, juntamente com o índice da linha
  linhasDeTexto.push({texto: "do{<br>//codigo a ser executado<br>}<br>while(condição);<br><br>Exemplo:<br><br>var i = 21;<br><br>do{<br>document.write(i+);<br>i++;<br>}<br>while(i<=25);<br><br>//output  21 22 23 24 25", indice: linhasDeTexto.length});
  // atualiza o conteúdo da div
  atualizarDiv();
});//do while

botao9.addEventListener("click", function() {
  // adiciona o texto ao array, juntamente com o índice da linha
  linhasDeTexto.push({texto: "Exemplo de break:<br><br>var i;<br>for(i = 0; i < 5; i++){<br>document.write(i);<br>document.write('' '');<br>if(i == 3){<br>break;<br>}<br>}<br>document.write(''fim do loop'');<br>//output: 0 1 2 3 <br><br>Exemplo de continue:<br><br>var i;<br>for(i = 0; i < 5; i++){<br>if(i == 3){<br>continue;<br>}<br>document.write(i);<br>document.write('' '');<br>}<br>//output:0 1 2 4", indice: linhasDeTexto.length});
  // atualiza o conteúdo da div
  atualizarDiv();
});//break continue


botao10.addEventListener("click", function() {
  // adiciona o texto ao array, juntamente com o índice da linha
  linhasDeTexto.push({texto: "function x(){<br>//bloco de código;<br>}<br>Exemplo:<br><br>function x(){<br>document.write(bom dia);<br>}<br>x()<br>//output: bom dia<br><br>Exemplo 2:<br><br>function y(a,b){<br>document.write(a+b)<br>}<br>y(2,3)<br>//output: 5", indice: linhasDeTexto.length});
  // atualiza o conteúdo da div
  atualizarDiv();
});//função

botao11.addEventListener("click", function() {
  // adiciona o texto ao array, juntamente com o índice da linha
  linhasDeTexto.push({texto: "var z = {<br>marca: ''a'', modelo: ''b'',<br>tipo: ''c'', tamanho: 1 <br>}<br><br>Exemplo:<br><br>var carro = {<br>marca: ''ford'', modelo: ''mustang'',<br>tipo: ''coupe'', tamanho: 5<br>}<br>var x = carro.marca;<br>var x = carro.[''marca''];<br><br>NomeObjeto.NomeMetodo();<br><br><br>Exemplo de criação de objeto:<br>var carro = {<br>marca: ''ford'', modelo: ''mustang'',<br>tipo: ''coupe'', tamanho: 5<br>}<br>var carro_2 = new carro(''chev'', ''cam'',''conve'',6);<br>document.write(carro_2.modelo);<br>//output: cam <br>document.write(carro_2.tamanho);<br>//output: 6", indice: linhasDeTexto.length});
  // atualiza o conteúdo da div
  atualizarDiv();
});//objetos

botao12.addEventListener("click", function() {
  // adiciona o texto ao array, juntamente com o índice da linha
  linhasDeTexto.push({texto: "var nomeDoarray[valo1,valor2,..enésimoValor];<br><br>Exemplo:<br>< script ><br>var x = [0 ,1 ,2];<br>for(i = 0; i < x.length; i++){<br>document.write(x[i]);<br>}<br>< / script ><br>//output: 0 1 2<br><br>Exemplo 2:<br>var i;<br>var x = newArray();<br>x[0]=0;<br>x[1]=1;<br>x[2]=2,<br>for(i=0;  i< x.length;  i++){<br>document.write([i]);<br>}<br>//output: 0 1 2<br><br>Exemplo 3:<br>var x = new Array(''a'',''b'',''c'');<br>for(i=0;  i <  x.lemgth;  i++){<br>document.write(x[i]);<br>}<br>//output: a b c", indice: linhasDeTexto.length});
  // atualiza o conteúdo da div
  atualizarDiv();
});//array

botao13.addEventListener("click", function() {
  // adiciona o texto ao array, juntamente com o índice da linha
  linhasDeTexto.push({texto: "Date()<br><br>Data e hora requerida:< span id  ='' txt ''>< /span><br>< script ><br>var hoje = novaData();<br>document.getElementById(''txt'').innerHTML=hoje;<br>< / script ><br><br>//output:<br>Data e hora requerida: xx/yy/2023<br>hora---(horário padrão de Brasilia)", indice: linhasDeTexto.length});
  // atualiza o conteúdo da div
  atualizarDiv();
});//dateObj

botao14.addEventListener("click", function() {
  // adiciona o texto ao array, juntamente com o índice da linha
  linhasDeTexto.push({texto: "var n = new Number();<br><br>var x = 102;<br>var y = 102.7;<br>var z = 13e4;<br>var n = new Number(16);<br>//output: 102 102.7 130000 16", indice: linhasDeTexto.length});
  // atualiza o conteúdo da div
  atualizarDiv();
});//numberObj


botao15.addEventListener("click", function() {
  // adiciona o texto ao array, juntamente com o índice da linha
  linhasDeTexto.push({texto: "Boolean x = new Boolean(value);<br><br>Exemplo:<br>< script ><br><br>document.write(10 < 20); //true<br><br>document.write(10 < 5); //false<br>< / script ><br><br> //output: x < 20 <br><br> valores boleanos estão copreendidos entre duas escolhas <br> o retorno dependerá do que foi programado como verdade para retorno", indice: linhasDeTexto.length});
  // atualiza o conteúdo da div
  atualizarDiv();
});//boolean


botao16.addEventListener("click", function() {
  // adiciona o texto ao array, juntamente com o índice da linha
  linhasDeTexto.push({texto: "window.alert( ' hello code jupiter ' );<br><br>alert ( ' helo code jupiter '); ", indice: linhasDeTexto.length});
  // atualiza o conteúdo da div
  atualizarDiv();
});//browser

botao17.addEventListener("click", function() {
  // adiciona o texto ao array, juntamente com o índice da linha
  linhasDeTexto.push({texto: "< script > <br>function msg()<br>{<br>alert ( '' helo alert box '' );<br>}<br>< / script > <br>< imput type='' button '' value='' click ''onclick='' msg() ''/  ><br><br>//output: botão com mensagem de click e saida com <br> pop-up emitindo a mensagem de texto<br> helo alert box", indice: linhasDeTexto.length});
  // atualiza o conteúdo da div
  atualizarDiv();
});//windowobjmodel

botao18.addEventListener("click", function() {
  // adiciona o texto ao array, juntamente com o índice da linha
  linhasDeTexto.push({texto: "history.back();<br>history.forward();<br>history.go(2);<br>history.go(-2)", indice: linhasDeTexto.length});
  // atualiza o conteúdo da div
  atualizarDiv();
});
botao19.addEventListener("click", function() {
  // adiciona o texto ao array, juntamente com o índice da linha
  linhasDeTexto.push({texto: "window.navigator<br><br>navigator<br><br>document.writeln();", indice: linhasDeTexto.length});
  // atualiza o conteúdo da div
  atualizarDiv();
});
botao20.addEventListener("click", function() {
  // adiciona o texto ao array, juntamente com o índice da linha
  linhasDeTexto.push({texto: "window.screen<br><br>sceen<br><br>document.writeln();", indice: linhasDeTexto.length});
  // atualiza o conteúdo da div
  atualizarDiv();
});



botao21.addEventListener("click", function() {
  // adiciona o texto ao array, juntamente com o índice da linha
  linhasDeTexto.push({texto: "< script ><br><br>function printvalue(){<br>var name=document.form1.name.value;<br>alert('  welcome:  '  + name  );<br>}<br><br>< / script ><br><br><  form name= ''  form1  ''  ><br>enter name : <  input type  =  '' text  '' name  = ''  name  ''/  ><br><  input type=''  button '' onclick= ''  printvalue() '' value = '' printname  '' /  ><br> ,<   / form ><br>//output: box de preenchimento", indice: linhasDeTexto.length});
  // atualiza o conteúdo da div
  atualizarDiv();//widow.doc.obj.model
});


botao22.addEventListener("click", function() {
  // adiciona o texto ao array, juntamente com o índice da linha
  linhasDeTexto.push({texto: "<  script  ><br><br>function getcube(){<br>var number = document.getElementById('' number  '').value;<br>alert(number * number * number);<br>}<br><br>< / script ><br><br>< form  ><br> enter NO: < input type= '' text '' id= '' number '' name= '' number '' / > <br> input type = '' button '' value ='' cube '' onclick = '' getcube() '' / ><br> < / form ><br><br>//output: box de preenchimento", indice: linhasDeTexto.length});
  // atualiza o conteúdo da div
  atualizarDiv();
});//getElementById


botao23.addEventListener("click", function() {
  // adiciona o texto ao array, juntamente com o índice da linha
  linhasDeTexto.push({texto: "document.getElementByName(''  name  '')<br><br><  script  type='' text/javascript ''><br><br>function totalelements()<br><br>{<br>var allgenders = document.getElementsByName(''  gender '');<br>alert ('' total genders : '' + allgenders.length);<br>}<br><br> </  script  ><br><  form  ><br><br> male:<  input type ='' radio '' name = '' gender '' value = '' male ''><br><br>female:<  input type ='' radio '' name = '' gender '' value = '' female ''><br><br>< input type ='' button''onclick= ''totalelements()''value = ''total genders'' > <br><br>< / form ><br>//output: box de escolha para marcar", indice: linhasDeTexto.length});
  // atualiza o conteúdo da div
  atualizarDiv();
});//getElementbyName


//getElementByTagname
botao24.addEventListener("click", function() {
  // adiciona o texto ao array, juntamente com o índice da linha
  linhasDeTexto.push({texto: "document.getElementByTagName('' name '')<br><br>< script ><br><br>function countpara(){<br>var totalpara=document.getElememntBytagName('' p '');<br>alert ('' totalp tags are '' + totalpara.length);<br>}<br>< / script ><br><br>< p > this a paragraph < / p ><br>< p > ...< / p ><br> < p >...< / p ><br>< button  onclick = '' countpara() '' >  ...paragraph   < /  button  ><br> <br> //output: box com configurações de paragrafos<br>e um botão de verificação ", indice: linhasDeTexto.length});
  // atualiza o conteúdo da div
  atualizarDiv();
});//getElementeByTagName


botao25.addEventListener("click", function() {
  // adiciona o texto ao array, juntamente com o índice da linha
  linhasDeTexto.push({texto: "< script ><br><br>function comentario(){<br>var data= '' Name: < imput type = '' text '' name = '' name ''<br>textarea rowls = '' 5 '' cols = '' 80 '' > < / textarea ><br>< input type = 'submit' value = 'post comment' >;<br>document.getElementById ('' mylocation ''). inner HTML= data;<br>}<br>< / script ><br><br>< form name = '' myForm '' ><br>< input type = '' button '' value = '' comment '' onclick= '' showcomentForm() '' ><br><  div id = '' mylocation ''> < / div ><br>< / form ><br><br>//output: caixa html de comentário e envio de email", indice: linhasDeTexto.length});
  // atualiza o conteúdo da div
  atualizarDiv();
});//innerHTML

botao26.addEventListener("click", function() {
  // adiciona o texto ao array, juntamente com o índice da linha
  linhasDeTexto.push({texto: "< script type = '' text/javascript'' ><br>function validate(){<br>var msg;<br>if( document.myForm.userPass.value.length > 5 {<br>msg = '' good '';<br>}<br>else{<br>msg = '' poo '';<br>}<br>document.getElementById('' mylocation '').innerText = msg;<br>}<br>< / script ><br> <br>< form name ='' myForm ''> <br>< input type = '' password '' value = '''' <br>' name = '' userPass '' onkeyup = '' validate() '' > <br>strength: < spam  id = '' mylocation '' > no strength < / span ><br>< / form ><br><br> //output: box de preenchimento para texto ", indice: linhasDeTexto.length});
  // atualiza o conteúdo da div
  atualizarDiv();
});//innertext

botao27.addEventListener("click", function() {
  // adiciona o texto ao array, juntamente com o índice da linha
  linhasDeTexto.push({texto: "< script ><br>function validatefom(){<br>var name=document.myform.name.value;<br>var password= ducument.myform.password.value;<br>if( name == null  ||  name ==  ''''){<br>alert('' name cant be blank  '');<br>return false;<br>}else if ( password.length<6 ){<br>alert ('' password must be at least 6 characters long '');<br>return false;<br>}<br>}<br>< /  script  ><br><br>< body ><br>< form name= '' myform '' method = '' post '' action= '' abc.jsp ''<br>onsubmit = '' return validateform() '' ><br>Name < input type= '' text'' name= ''name ''><br>password:  < input type= '' password '' name= '' password ''><br> < input type= '' submit '' value= '' register '' ><br>< / form><br>//output: formulario de login e senha", indice: linhasDeTexto.length});
  // atualiza o conteúdo da div
  atualizarDiv();
});//formValidation


botao28.addEventListener("click", function() {
  // adiciona o texto ao array, juntamente com o índice da linha
  linhasDeTexto.push({texto: "< script ><br>function validateemai(){<br>var x=document.myform.email.value;<br>var atposition= x.indexOf('' @ '');<br>var dotposition= x.lastindexOf('' . '');<br>if( atposition  < 1 || dotposition < atposition + 2  ||  dotpositione + 2= x.length){<br>alert('' enter a valid email address+atposition+dotposition  '');<br>return false;<br>}<br>}<br>< /  script  ><br><br>< body ><br><br>< form name= ''myform '' method = '' post'' onsubmit= ''return validateemail();''> <br>  email: <  input type= '' text'' name= '' email '' ><br> < input type= '' submit '' value= '' register '' ><br>< / form ><br><br>//output: formulario de login e senha para manipulação de email", indice: linhasDeTexto.length});
  // atualiza o conteúdo da div
  atualizarDiv();
});//formEmail Validation

botao29.addEventListener("click", function() {
  // adiciona o texto ao array, juntamente com o índice da linha
  linhasDeTexto.push({texto: "onclick<br><br>ondblclick<br><br>onfocus<br><br>onblur<br><br>onsubmit<br><br>onmouserover<br><br>onmouseout<br><br>onload<br><br>onscroll<br><br>onresized<br><br>onreset<br><br>onkeydown<br><br>onkeypress<br><br>onkeyup", indice: linhasDeTexto.length});
  // atualiza o conteúdo da div
  atualizarDiv();
});