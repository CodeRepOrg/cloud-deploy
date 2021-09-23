# Junior Achievement
## IBM Cloud e Heroku deployment

### Login na IBM Cloud

Em um terminal faça login na IBM Cloud digitando o comando: `ibmcloud login`

Assim que o login estiver completo selecione a organização e espaço corretos para deploy por meio do comando: `ibmcloud target --cf`

Ao final você estará pronta para iniciar o deploy e basta escolher uma das formas a seguir.

### Deploy Cloud Foundry via buildpack

Por se tratar de uma aplicação escrita em react, voce terá que "buildar" a interface, para isso, acesse o diretório `ja` na raiz do projeto e execute os comandos abaixo no terminal.

1. `npm install`
2. `npm run build`

Ao final deste processo deverá ter sido criada no diretório `ja` uma pasta chamada `build`, nela está nossa interface pronta para uso.

Para fazer o deploy devemos voltar a raiz do projeto que pegamos no GitHub. Uma vez lá, basta rodar o seguite comando no terminal: `ibmcloud cf push`. A partir desse momento o deploy foi iniciado, e você poderá ver todos os logs e mensagens referentes ao processo. Ao final a url da sua aplicação será disponibilizada para acesso.

### Deploy Cloud Foundry com Docker

O deploy via dorckerfile necessita que você possua uma conta no [docker hub](https://hub.docker.com) para disponiblizar a imagem da sua aplicação. Ao fazer o deploy com via docker é necessário primeiro "buildar" a imagem, para isso existe um arquivo chamado `dockerfile`, nele estão todas as instruções para isso, de uma olahda para descobrir como é feito :)

Para "buildar" a imagem rode o seguinte comando na raiz do projeto: 

`docker build -t <docker-hub-user>/ja .`

Faça o login no Docker Hub por meio do comando: `docker login`

Assim que a imagem estiver pronta vamos subir-lá no Docker Hub através do comando: `docker push <docker-hub-user>/ja`

Uma vez com a imagem disponível no Docker Hub nós só precisamos diposnibiliza-lá na IBM Cloud e isso é feito por meio do seguinte comando: `ibmcloud cf push ja-app --docker-image <docker-hub-user>/ja --random-route -m 256M`