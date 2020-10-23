docker-compose up -d
sleep 10

cd src/db
knex migrate:latest