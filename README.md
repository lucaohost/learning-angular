# learning-angular
1- 
instala o node, depois dá npm install, depois o angular cli. vai em um diretório dá um git clone (faz o rolê da chave ssh antes, ssh -keygen, cata na pasta onde salvou, copia a pública e adiciona lá no git em setting). Dá um ng new primeiro-projeto, dá um cd pra entrar nele e depois dá um ng server, pra hostear um server ali. Vai ficar na porta 4200, então pra acessar localhost/4200.

2-
pra criar componente na mão, tem que criar uma pasta, que vai ter um arquivo ts. decora ele com component em cima, botando o select e o template. lembrar importar component. Adiciona ele no app.module.ts. já pode sair usando no app.component.html. pra criar automaticamente e ja fazer esses roles ali de cima -> ng new c meu-segundo-component

3-
tsc main.ts

4-
npm install tslint?

5- 
function .map? ecmascript?

6-
programação  funcinal

babeljs.io pra fazer os transpile

tipando variável
var n : string
var n : any ou var n

nomenclatura app.module.ts

decorator em cima

import { BrowserModule } from '@angular/platform-browser'; modulo que prepara pra rodar em brownser

import { NgModule } from '@angular/core'; modulo que se usa pra tow way data binding

decorator sao os metadados
    declarations do decorator
    bota diretivas, componentes e pipes

    import do decorator
    coloca outros modulos

    providers = coloca serviços q vão servir pra todos os componentes (verificações e autenticações e guardas de rota pq tem escopo global da aplicação)

    bootstrap: coloca o container e vai modificando ele, na mes
    -ma página

    import { HttpModule } from '@angular/http' precisa pras requisições ajax

    ng g m
    ng g c

feature module

todos os modulos vão ser importados no app module, pq ele
é o "backend" do component html principal, que só existirá ele

o app module via importar o brownser module, pq é só nele q terá as requisições ajax, os outros modules não importarão o app module e serão comomModules

imports
    modules importados naquele module

declarations
    components que pertencem aquele module

export
    quais declarations ficarao visiveis para modules q importarem ele

ctrl shift k

alt setas pra cima e pra baixo

alt shift pra cima e pra baixo

template literal ou inline 

template:` 
    <p>asdasd</p>
`
vale até 3 linhas, se n cria outro html (BOA PRATICA)

injeta serviço tu coloca no construtor, tipo recebendo como paramatro, dai ele declara como atributo próprio

tem que importar a classe service no modulo e no componente, além disso no module tem q colocar como provider: [] pq é o fornecedor de serviço 






