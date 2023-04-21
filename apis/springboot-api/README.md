# Digytal - Programação, Pesquisa e Educação
[www.digytal.com.br](http://www.digytal.com.br)

[(11) 95894-0362](https://api.whatsapp.com/send?phone=5511958940362)

#### Autores
- [Gleyson Sampaio](https://github.com/glysns)

## BackEnd - StarterKit - Spring JWT Authentication - Api

Este projeto é um modelo para que você possa desenvolver sua primeira aplicação com SpringBoot para provê uma API de cadastro de clientes realizando as operações de inclusão, alteração, busca e listagem de dados de clientes.

### Tecnologias

* Java 1.8+
* SpringBoot 2.7.4
* SpringDataJpa
* Hibernate
* SpringWeb
* SpringTest
* Projeto Lombok
* H2 database
* Swagger OpenAPI
* Spring Security
* JWT

### Dependências

Um projeto SpringBoot é formado por dependência denominadas de **starters** e o nosso projeto por ser uma API Rest especificamente utilizará os starters citados no `pom.xml`

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

#### Projeto Lombok

O Lombok é uma biblioteca Java focada em produtividade e redução de código boilerplate que, por meio de anotações adicionadas ao nosso código, ensinamos o compilador (maven ou gradle) durante o processo de compilação a criar código Java.

```xml
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.24</version>
    <scope>provided</scope>
</dependency>
```

>Este recurso deve usado com muita conciência e aplicabilidade

#### Persistência de dados

O SpringBoot é facilmente configurável a qualquer provedor de acesso a dados como H2 Database, PostgreSQL, MySQL, SQLServer, Oracle Database entre outros, basta informar a biblioteca correspondente e configurar a sua conexão de bancos de dados no arquivo `resources/application.properties`.

*Configurando o banco em memória H2Database*

#### **`pom.xml`**
```xml
<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <scope>runtime</scope>
</dependency>
```

#### **`application.properties`**
```shell
spring.datasource.url=jdbc:h2:mem:crud-api
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=sa
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
```

> O H2 disponibiliza uma interface web para visualizar as tabelas e realizar operações básicas de SQL.

#### **`application.properties`**
```shell
spring.h2.console.enabled=true
```

Acesse o link : `http://localhost:8080/h2-console`

![image](https://github.com/glysns/backend-stater-kit/blob/main/spring/springboot-crud-api/src/main/resources/img/h2-login.png)

![image](https://github.com/glysns/backend-stater-kit/blob/main/spring/springboot-crud-api/src/main/resources/img/h2-sql.png)

#### Documentação da API

O Swagger é um framework composto por diversas ferramentas que, independente da linguagem, auxilia a descrição, consumo e visualização de serviços de uma API REST.

```xml
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-ui</artifactId>
    <version>1.6.4</version>
</dependency>
```

Ao iniciar o seu projeto, acesse a documentação da sua aplicação através do link: `http://localhost:8080/swagger-ui/index.html`

### Estrutura do projeto

O projeto é composto por pacotes que classificam as classes de acordo com o seu papel ou finalidades específicas.

O pacote principal é `digytal.backend.api`.

| Nome       | Descrição                                                                                      |
|------------|------------------------------------------------------------------------------------------------|
| enums      | pacote que contém os enums do sistema                                                          |
| model      | pacote que contém as classes de modelo do sistema (entidades e dtos)                           |
| repository | pacote que contém as interfaces responsáveis pela persistência de cada entidade correspondente |
| service    | pacote que contém as classes responsáveis por gerenciar as regras de negóicio da aplicação    |
| webservice | pacote que contém as classes que representam os recursos https disponíveis pela aplicação      |

### Model

As aplicações costumam separar a camada de domínio (Entity) com a camada de transferência de dados (DTO) para manter a segurança no que se refere ao acesso à dados.
Para implementar nosso projeto seguindo esta diretriz, organizamos a nossa camada de modelo contendo três arquivos comuns para cada entidade da aplicação.

* Entity - Classe mapeada com JPA para representar uma tabela no banco de dados
* Request - Classe que será utilizada para realizar operações de inclusão e alteração de registros
* Response - Classe que representa a resposta no formato JSon das consultas realizadas pela aplicação.

### Executando a aplicação

Para executar a aplicação é simples, basta abrir a classe `SpringbootCrudApiApplication` e ativar  `run` ou `debug` em sua IDE.

Estando tudo certinho conforme log abaixo, basta acessar o link: `http://localhost:8080/swagger-ui/index.html`

```shell
2023-04-08 13:08:56.368  INFO 20680 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
2023-04-08 13:08:56.375  INFO 20680 --- [           main] d.b.api.SpringbootCrudApiApplication     : Started SpringbootCrudApiApplication in 3.096 seconds (JVM running for 4.029)
2023-04-08 13:09:00.612  INFO 20680 --- [nio-8080-exec-1] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring DispatcherServlet 'dispatcherServlet'
2023-04-08 13:09:00.612  INFO 20680 --- [nio-8080-exec-1] o.s.web.servlet.DispatcherServlet        : Initializing Servlet 'dispatcherServlet'
2023-04-08 13:09:00.613  INFO 20680 --- [nio-8080-exec-1] o.s.web.servlet.DispatcherServlet        : Completed initialization in 1 ms
2023-04-08 13:09:01.196  INFO 20680 --- [nio-8080-exec-4] o.springdoc.api.AbstractOpenApiResource  : Init duration for springdoc-openapi is: 299 ms
```

![image](https://github.com/glysns/backend-stater-kit/blob/main/spring/springboot-crud-api/src/main/resources/img/swagger-crud-cliente.png)


## Spring Security
A autenticação é um processo de segurança para verificar a veracidade e autenticidade de uma pessoa ou objeto. O tema da autenticação de um indivíduo, entidade ou objeto não é algo novo, dado que a palavra "autêntico" vem do grego "authentikos", que significa "original, genuíno". Portanto, a autenticação é baseada na comparação e correspondência para determinar se algo ou alguém é, de fato, o que ou quem afirmam ser.

### JWT

O JSON Web Token é um padrão da Internet para a criação de dados com assinatura opcional e/ou criptografia cujo payload contém o JSON que afirma algum número de declarações. Os tokens são assinados usando um segredo privado ou uma chave pública/privada

### Infraestrutura

Vamos começar pela criação dos pacotes `infra.security`, `infra.security.jwt` que terão o papel de agrupar classes que representam configurações e meios de autenticação em nossa aplicação no JWT:

| Classe                           | Descrição                                                                                                                      |
|----------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| infra.security.Login             | Classe que representa os parâmetros de `username` e  `password` de um usuário válido                                           |
| infra.security.Session           | Classe que representa a sessão de um usuário contendo o `username` e o `token`                                                 |
| infra.security.jwt.JwtObject     | Classe que representará o jwt-token para ser convertido em Json e vice-versa.                                                  |
| infra.security.jwt.JwtFactory    | Classe responsável por criar o jwt-token em forma objeto e string                                                              |
| infra.security.jwt.JwtProperties | Classe que contém propriedades de `prefixo`, `chave privada` do token vindo do `application.properties` |
| infra.security.jwt.JwtFilter     | Classe que interceptará as requisições para converter e validar a estrutura do token recebido do Header.                       |
| infra.security.WebSecurityConfig | Classe que contém a configuração que define a estratégia de autenticação e consumo dos recursos da api                         |

### Configuração

#### **`pom.xml`**
```xml
<!-- Security -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>

<!-- JWT -->
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt</artifactId>
    <version>0.7.0</version>
</dependency>
```

#### **`application.properties`**
```shell
## Parametros de configuracao do Token
jwt.properties.prefix=Bearer
jwt.properties.key=MyKey
```

### Criando o token

Antes de pensar em consumir os recursos que agora estão seguros, precisaremos simular a criação de uma sessão com token com base em credencial `fake` passando o username e password. Ver implementação na classe `digytal.backend.api.webservice.LoginResource`.

De acordo com as novas configurações teremos um novo endpoint `POST:/public/login` para primeiro realizar autenticação conforme Json abaixo:

![image](https://github.com/glysns/backend-stater-kit/blob/main/spring/springboot-crud-api/src/main/resources/img/login.png)
```json
{
  "username": "digytal",
  "password": "Jwt@123"
}
```

*Resposta - OK*
```json
{
    "dateTime": "2023-04-09 09:57:07",
    "success": true,
    "message": "Login realizado com sucesso",
    "code": "200",
    "body": {
    "username": "gleyson",
    "token": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnbGV5c29uIiwiaWF0IjoxNjgxMDQ1MDI3LCJleHAiOjE2ODEwNTk0MjcsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUl9BRE1JTiJdfQ.EncVeV-H1nm2ug9-lllGmVR_cK71u6yNZjaQJHyPzhBqEH9NMKeFlUGH_kaSr1J_DP3TRzV77_C7y1-dBL2oxA"
    },
    "suggestion": ""
}
```

*OU - Resposta - Erro*
```json
{
    "dateTime": "2023-04-09 09:59:29",
    "success": false,
    "message": "Usuário Inválido",
    "code": "403",
    "body": null,
    "suggestion": "Confirma seu usuário e senha"
}
```

### Gran finale

Agora precisaremos dizer ao swagger que o mesmo deverá possibilitar incluir o token que foi gerado na chamada da requisição de login, ver configuração na classe `infra.doc.OpenAPI30Configuration`

![image](https://github.com/glysns/backend-stater-kit/blob/main/spring/springboot-crud-api/src/main/resources/img/token.png)

Cole o token gerado anteriormente: `Bearer eyJhbGciOiJIUz ...` para executar os recursos disponíveis

### CRUD de Clientes

Vamos realizar as operações básicas relacionadas em uma gestão de clientes:

| Database | HTTP                  | Descrição                                                  |
|----------|-----------------------|------------------------------------------------------------|
| INSERT   | POST:/clientes        | Inclusão de um novo cliente                                |
| UPDATE   | PUT:/clientes         | Alteraração do cliente cadastrado                          |
| SELECT   | GET:/clientes/{id}    | Busca o cliente pelo ID informado                          |
| DELETE   | DELETE:/clientes/{id} | Remove o cliente da base de dados pelo o ID correspondente |
| SELECT   | GET:/clientes         | Lista todos os clientes na base de dados                   |
