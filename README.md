
MarvelPublicAPIAngular - Projeto Angular

Descrição do Projeto

O MarvelPublicAPIAngular é um projeto front-end desenvolvido em Angular que consome a API pública da Marvel para exibir informações sobre quadrinhos (HQs) e personagens icônicos. O projeto apresenta três páginas principais: Home, HQs, e Personagens, e foi projetado para demonstrar habilidades em Angular, incluindo rotas, serviços, diretivas, pipes e a integração com APIs externas.


---

Grupo

Arthur Belo da Silva - 01615335

Rafael Francisco Caetano dos Santos - 01573983

José Lourenço de Andrade Neto - 01574884



---

Estrutura do Projeto

Páginas

1. Home
Página inicial com informações gerais sobre o projeto, links para as outras páginas e destaque de conteúdos populares.


2. HQs
Listagem de quadrinhos (HQs) da Marvel com opção de visualizar detalhes específicos de cada HQ.


3. Personagens
Listagem de personagens da Marvel, com informações básicas e detalhes adicionais.




---

Requisitos Atendidos

1. Mínimo de 3 páginas novas:

Home, HQs, e Personagens.



2. Rotas:

Utilização do Angular Router para navegação entre as páginas.
Exemplo: /home, /hqs, /personagens.



3. HttpClient:

Consumo da API da Marvel para listar dados de HQs e personagens (método GET).



4. Pipes:

Personalizado: Pipe para formatar a data de lançamento das HQs.

Estrutural: Uso de pipes nativos como async para manipular observáveis.



5. Services:

MarvelApiService: Responsável por consumir a API da Marvel.

LocalStorageService: Gerencia dados salvos localmente, como favoritos.



6. Diretivas Personalizadas:

HoverHighlightDirective: Realça elementos ao passar o cursor.

VisibilityDirective: Mostra ou oculta elementos com base em condições personalizadas.



7. Diretivas Estruturais:

Uso de *ngIf para exibir dados quando disponíveis.

Uso de *ngFor para listar HQs e personagens.





---

Configuração do Projeto

Instalação

1. Clone o repositório:

git clone (https://github.com/newtsarthur/marvelPublicAPIAngular.git)


2. Navegue até o diretório do projeto:

cd marvel-public-api-angular


3. Instale as dependências:

npm install



Execução

1. Inicie o servidor de desenvolvimento:

ng serve


2. Acesse o projeto no navegador:

URL padrão: http://localhost:4200





---



API Utilizada

A API da Marvel foi utilizada para acessar informações sobre personagens e HQs. Documentação oficial:
https://developer.marvel.com

Chaves de Acesso

Certifique-se de configurar sua Public Key e Private Key no arquivo environment.ts para autenticar as requisições à API.


---
