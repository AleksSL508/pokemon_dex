Aplicativo Pokémon Ionic
Este é um aplicativo Ionic construído com Angular que permite aos usuários explorar dados de Pokémon usando a PokeAPI. O app inclui funcionalidades para visualizar uma lista paginada de Pokémon, navegar para detalhes, marcar favoritos e aproveitar uma interface no estilo Pokedex responsiva.
Funcionalidades

Exibe uma lista paginada de Pokémon com detalhes como nome e tipos.
Navega para informações detalhadas de Pokémon, incluindo habilidades, estatísticas base, peso, altura e experiência base.
Alterna Pokémon favoritos e os salva no armazenamento local.
Design responsivo com uma interface temática de Pokedex.
Controles de paginação para navegar pela lista de Pokémon.

Instalação

Certifique-se de ter Node.js e Angular CLI instalados.
Clone o repositório: git clone <url-do-repositório>.
Navegue até o diretório do projeto: cd pokemon-ionic-app.
Instale as dependências: npm install.
Adicione o Ionic CLI se ainda não estiver instalado: npm install -g @ionic/cli.
Execute o app: ionic serve.

Uso

Veja a página inicial para acessar uma lista paginada de Pokémon.
Clique em um Pokémon para visualizar informações detalhadas na página de detalhes.
Use o botão de favorito para adicionar ou remover Pokémon da lista de favoritos.
Navegue pelas páginas usando os controles de paginação na parte inferior da página inicial.

Estrutura de Arquivos

src/app/home/: Contém os componentes da página inicial, roteamento e estilos para a lista de Pokémon.
src/app/details/: Contém os componentes da página de detalhes, roteamento e estilos.
src/app/services/: Abriga o serviço de Pokémon para chamadas de API.
src/app/app.module.ts: Módulo principal da aplicação.
src/app/app-routing.module.ts: Configuração de roteamento da aplicação.
src/main.ts: Configuração de bootstrap da aplicação e Ionic.

Dependências

@angular/core
@angular/common
@angular/router
@ionic/angular
@angular/common/http
ionicons

Contribuindo
Sinta-se à vontade para enviar problemas ou pull requests. Certifique-se de seguir o estilo de código existente e incluir testes quando aplicável.
Licença
Este projeto é licenciado sob a Licença Apache-2.0.
