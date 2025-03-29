# Repositório de Estudos

## Qual a diferença entre state e props no React?

State é um objeto que representa a parte da aplicação que pode mudar. Props, por outro lado, são passadas para os componentes e são imutáveis. Enquanto o state é gerenciado dentro do componente, as props são passadas de pai para filho.

## O que é Server-Side Rendering (SSR) e quando usá-lo no Next.js?

Server-Side Rendering (SSR) é uma técnica onde a renderização da página acontece no servidor, enviando HTML pronto para o cliente. No Next.js, SSR é útil para SEO e quando é necessário carregar dados antes de renderizar a página.

## Como funciona o ciclo de vida dos componentes no Angular?

O ciclo de vida dos componentes no Angular é gerenciado por uma série de hooks, como `ngOnInit`, `ngOnChanges`, `ngOnDestroy`, entre outros, que permitem executar código em diferentes momentos da vida do componente.

## O que são observables e como funcionam no Angular?

Observables são uma forma de lidar com eventos assíncronos em Angular. Eles permitem que você escute e reaja a mudanças de dados, sendo uma parte fundamental do RxJS, que é usado para manipulação de dados assíncronos.

## Qual a diferença entre REST e GraphQL?

REST é uma arquitetura que utiliza endpoints para acessar recursos, enquanto GraphQL permite que o cliente especifique exatamente quais dados precisa, reduzindo a quantidade de dados transferidos e melhorando a eficiência.

## O que é um event-driven architecture e quando usá-lo?

Event-driven architecture é um padrão de design onde os componentes da aplicação se comunicam através de eventos. É útil em sistemas que requerem alta escalabilidade e desacoplamento entre serviços.

## Como garantir resiliência e escalabilidade na comunicação entre microserviços?

Para garantir resiliência e escalabilidade, utilize padrões como circuit breaker, retries, e service discovery. Além disso, implemente filas de mensagens para desacoplar a comunicação entre microserviços.

## Qual a diferença entre testes unitários, de integração e E2E?

Testes unitários verificam partes isoladas do código, testes de integração verificam a interação entre diferentes partes do sistema, e testes E2E (end-to-end) testam o sistema como um todo, simulando a experiência do usuário.

## Como funciona um mock no Jest?

Mocks no Jest são funções que simulam o comportamento de funções ou módulos reais, permitindo que você teste componentes isoladamente sem depender de implementações externas.

## Como garantir uma boa cobertura de testes no projeto?

Para garantir uma boa cobertura de testes, utilize ferramentas de análise de cobertura, escreva testes para todos os casos de uso e mantenha uma cultura de testes dentro da equipe.

## Quando usar MongoDB vs MySQL?

Use MongoDB quando precisar de flexibilidade no esquema e trabalhar com grandes volumes de dados não estruturados. Use MySQL quando precisar de transações complexas e integridade referencial.

## O que são índices e como eles ajudam na performance do banco?

Índices são estruturas que melhoram a velocidade de recuperação de dados em um banco de dados. Eles permitem buscas mais rápidas, mas podem impactar a performance de inserções e atualizações.

## O que é normalização e desnormalização?

Normalização é o processo de organizar dados para reduzir redundâncias, enquanto desnormalização é a prática de combinar tabelas para melhorar a performance de leitura, geralmente em sistemas de alta demanda.

## O que é Serverless e quais suas vantagens?

Serverless é um modelo de computação onde o provedor gerencia a infraestrutura. As vantagens incluem escalabilidade automática, redução de custos e foco no desenvolvimento de funcionalidades.

## Como funciona o AWS Lambda?

AWS Lambda é um serviço que permite executar código em resposta a eventos sem provisionar ou gerenciar servidores. Você paga apenas pelo tempo de execução do seu código.

## Qual a diferença entre DynamoDB e MongoDB?

DynamoDB é um banco de dados NoSQL gerenciado pela AWS, otimizado para alta disponibilidade e escalabilidade. MongoDB é um banco de dados NoSQL que oferece flexibilidade no esquema e é mais adequado para aplicações que requerem consultas complexas.

## Qual a diferença entre containers e máquinas virtuais?

Containers compartilham o mesmo sistema operacional, tornando-os mais leves e rápidos, enquanto máquinas virtuais virtualizam hardware completo, o que as torna mais pesadas e lentas.

## Como criar e rodar um container Docker a partir de um Dockerfile?

Para criar um container Docker, você deve escrever um Dockerfile que define a imagem, e então usar o comando `docker build` para construir a imagem e `docker run` para executar o container.

## O que são os princípios SOLID?

Os princípios SOLID são um conjunto de diretrizes para design de software que promovem a manutenção e escalabilidade do código. Eles incluem:

- **S**: Single Responsibility Principle
- **O**: Open/Closed Principle
- **L**: Liskov Substitution Principle
- **I**: Interface Segregation Principle
- **D**: Dependency Inversion Principle

## Qual a importância da Clean Architecture em um sistema escalável?

A Clean Architecture promove a separação de preocupações, facilitando a manutenção e escalabilidade do sistema. Ela permite que mudanças em uma parte do sistema não afetem outras partes.

## O que é Dependency Injection?

Dependency Injection é um padrão de design que permite que um objeto receba suas dependências de fora, em vez de criá-las internamente. Isso promove um código mais modular e testável.
