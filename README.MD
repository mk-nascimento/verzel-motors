# Verzel Motors

Este repositório contém tanto o frontend quanto o backend do projeto. Cada um deles está localizado em uma pasta com o mesmo nome.
Frontend

O frontend é construído com Vite, React e Tailwind CSS. Para iniciar o desenvolvimento, siga os passos abaixo:

```bash

cd frontend
npm install   # Instalar as dependências
npm run dev   # Iniciar o servidor de desenvolvimento

```

Certifique-se de manter o código e os comentários em inglês, conforme a convenção.
Backend

O backend é desenvolvido utilizando FastAPI, com Poetry como gerenciador de dependências. Siga as instruções abaixo para começar:

```bash

cd backend
poetry install   # Instalar as dependências
poetry run uvicorn app.main:app --reload   # Iniciar o servidor de desenvolvimento

```


  > Lembre-se de preencher o arquivo ```.env``` antes de iniciar os servidores (tanto frontend quanto backend). Isso garantirá que todas as configurações necessárias estejam corretamente definidas.

Certifique-se de consultar a documentação oficial para obter mais detalhes sobre cada tecnologia utilizada.
