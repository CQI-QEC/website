#!/usr/bin/env bash

if ! [ -x "$(command -v sqlx)" ]; then
    echo 'Error: sqlx is not installed.' >&2
    exit 1
fi

if ! [ -x "$(command -v psql)" ]; then
    echo 'Error: psql is not installed.' >&2
    exit 1
fi

set -x
set -eo pipefail

DB_USER="${POSTGRES_USER:=postgres}"
DB_PASSWORD="${POSTGRES_PASSWORD:=password}"
DB_NAME="${POSTGRES_DB:=cqiparticipants}"
DB_PORT="${POSTGRES_PORT:=5432}"
DB_HOST="${POSTGRES_HOST:=localhost}"

docker run \
    -e POSTGRES_USER=${DB_USER} \
    -e POSTGRES_PASSWORD=${DB_PASSWORD} \
    -p "${DB_PORT}":5432 \
    -d postgres

export PGPASSWORD=${DB_PASSWORD}
until psql -h "${DB_HOST}" -U "${DB_USER}" -p "${DB_PORT}" -d "postgres" -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up and running on port ${DB_PORT}"

DATABASE_URL=postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}
export DATABASE_URL
sqlx database create
