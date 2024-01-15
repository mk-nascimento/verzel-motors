FROM python:3.10-alpine AS deps

ENV WORKDIR /usr/app/
WORKDIR ${WORKDIR}

RUN <<EOF pip install poetry~=1.7.1 && \
poetry config installer.max-workers 10
EOF

COPY ./pyproject.toml .


FROM deps AS dev

ENV POETRY_VIRTUALENVS_CREATE=True

RUN <<EOF
poetry config virtualenvs.in-project true && \
poetry install -q
EOF

COPY . .

EXPOSE 8000
CMD uvicorn --host 0.0.0.0 app.main:app --reload


FROM deps AS prod

ENV POETRY_VIRTUALENVS_CREATE=false

RUN poetry install -q --only main

COPY . .

EXPOSE 8000
CMD uvicorn --host 0.0.0.0 app.main:app
