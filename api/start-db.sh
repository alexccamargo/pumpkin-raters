docker-compose up -d
sleep 10

cd src
npx knex migrate:latest