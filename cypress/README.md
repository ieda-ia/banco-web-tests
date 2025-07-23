# banco-web-tests

Automação de testes end-to-end para aplicação bancária utilizando [Cypress](https://www.cypress.io/) e JavaScript.  
O objetivo deste projeto é demonstrar como automatizar testes de aplicações web com Cypress, organizando o código com Custom Commands e gerando relatórios detalhados.

## Componentes do Projeto

- **Cypress**: Framework principal de automação de testes.
- **Custom Commands**: Comandos personalizados para facilitar e organizar os testes.
- **cypress-mochawesome-reporter**: Geração de relatórios em HTML dos testes executados.
- **Fixtures**: Dados mockados para cenários de teste.
- **Scripts de automação**: Facilita a execução dos testes em diferentes modos.

## Pré-requisitos

- Node.js instalado
- [banco-api](https://github.com/ieda-ia/banco-api) em execução
- [banco-web](https://github.com/ieda-ia/banco-web) em execução

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/ieda-ia/banco-web-tests.git
   cd banco-web-tests
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

## Execução dos Testes

- **Modo padrão (headless):**
  ```sh
  npm test
  ```

- **Modo headed (com interface):**
  ```sh
  npm run cy:headed
  ```

- **Abrir Cypress para execução manual:**
  ```sh
  npm run cy:open
  ```

- **Testes apontando para ambiente de produção:**
  ```sh
  npm run test-prod
  ```

> **Importante:** Certifique-se de que a API e a aplicação web estejam rodando antes de executar os testes.

## Relatórios

Após a execução dos testes, os relatórios em HTML são gerados na pasta `cypress/reports/html` utilizando o [cypress-mochawesome-reporter](https://github.com/cypress-io/cypress-mochawesome-reporter).

## Estrutura dos Testes

- Os testes estão organizados na pasta `cypress/e2e/`.
- Dados de teste (fixtures) ficam em `cypress/fixtures/`.
- Comandos customizados estão em `cypress/support/commands/`.

## Custom Commands

Os principais comandos personalizados disponíveis são:

- **fazerLoginComCredenciaisValidas**: Realiza login com dados válidos.
- **fazerLoginComCredenciaisInvalidas**: Testa login com dados inválidos.
- **realizarTransferencia**: Automatiza o fluxo de transferência bancária.
- **verificarMensagensNoToast**: Valida mensagens exibidas em toasts.
- **selecionandoOpcaoNaCombobox**: Seleciona opções em comboboxes.

Esses comandos estão documentados e implementados em arquivos dentro de `cypress/support/commands/`.

## Licença

Projeto sob licença ISC.

---