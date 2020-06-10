# express-ts-boilerplate
Express API boilerplate written in TypeScript with Jest and Supertest for testing.

## Requeriments
    - NodeJs version >= 12.x
    - A running Postgres instance (container or local, it's up to you)

### How to start (dev mode)
    - npm install
    - npm run test
    - npm run dev:watch

You will need a `.env` file for this project to work.

#### Secret key used to sign data with JWT
JWT_SECRET_KEY=secret-key

#### Database connection params
DB_HOST=db_host
DB_NAME=db_name
DB_USER=db_user
DB_PASS=db_pass
DB_DIALECT=db_dialect

#### Port that Express will be listening to
PORT=port