# pumpkin-raters

## WINDOWS: Set environment variable
In windows, run `npm install -g win-node-env`


## Run knex migrate in prod
On `knexfile.js`, set the production  > connection value with the value of the database from Heroku. Append `?ssl=true` on the URL
Then, on the db folder, execute the following command:

```
NODE_TLS_REJECT_UNAUTHORIZED='0' knex migrate:latest --env production
```
