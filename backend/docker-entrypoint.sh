#!/bin/sh
set -e

wait_for() {
    host="$1"
    port="$2"
    name="$3"
    echo "waiting for $name at $host:$port ..."
    while ! nc -z "$host" "$port"; do
        sleep 1
    done
    echo "$name is up"
}

wait_for "${HOST:-mysql}" "${DB_PORT:-5310}" "mysql"
wait_for "${REDIS_HOST:-redis}" "${REDIS_PORT:-6379}" "redis"

case "$1" in
    api)
        echo "syncing database schema with drizzle-kit push ..."
        cd /app/src && npx drizzle-kit push --force
        cd /app
        echo "starting api"
        exec node dist/server/api/loadConfigs.js
        ;;
    worker)
        echo "starting email worker"
        exec node dist/server/jobs/workers/emailWorker.js
        ;;
    *)
        exec "$@"
        ;;
esac
