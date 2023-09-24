<h1 align="center"> Busca-CEP </h1>
<h3 align="center"> Aplicação </h3>

## 🚀 Objetivo

O objetivo da aplicação é permitir que os usuários insiram um CEP (Código de Endereçamento Postal) e, em seguida, a aplicação retorna as informações de endereço associadas a esse CEP, como rua, bairro, cidade e estado. Em resumo, a aplicação consulta um serviço de geolocalização com base no CEP fornecido e exibe as informações de endereço correspondentes para o usuário.

## 💻 Tecnologias utilizadas

- Express
- Node
- Axios
- JavaScript
- Docker
- Bootstrap

## 📝 Instruções de Execução

- Certifique-se de que você tenha o Docker e o Docker Compose instalados no seu sistema. Se você não tiver, pode seguir as instruções de instalação na documentação oficial do Docker: https://docs.docker.com/get-docker/

- Abra um terminal ou prompt de comando.

- Navegue até o diretório raiz do seu projeto, onde está localizado o arquivo docker-compose.yml.

- Execute o seguinte comando para construir as imagens dos contêineres e iniciar os serviços:
```
docker-compose up
```
O servidor Nginx servirá o arquivo index.html em http://localhost na porta 80 como definido no docker-compose. Portanto:
- Acesse seu navegador e navegue na aplicação com o endereço:
```
http://localhost:80
```