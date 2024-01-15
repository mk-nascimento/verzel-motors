FROM node:20-alpine AS deps

ENV WORKDIR /usr/app/
WORKDIR ${WORKDIR}

COPY package.json .

RUN npm install -g pnpm@8.14.0

ENV PATH ./node_modules/.bin:$PATH


FROM deps AS dev

RUN pnpm i -s

COPY . .

EXPOSE 5173 3000

CMD pnpm dev --host


FROM deps AS prod

RUN pnpm i -Ps

COPY . .

RUN pnpm build

EXPOSE 5173 3000

CMD pnpm preview --host
