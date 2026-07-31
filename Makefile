COMPOSE := $(shell docker compose version >/dev/null 2>&1 && echo "docker compose" || echo "docker-compose")

CERT_DIR   := docker/certs
CERT_FILE  := $(CERT_DIR)/cert.pem
KEY_FILE   := $(CERT_DIR)/key.pem
HTTPS_PORT ?= 8443

GREEN := \033[0;32m
BLUE  := \033[0;34m
RED   := \033[0;31m
NC    := \033[0m

.DEFAULT_GOAL := all
.PHONY: all up build down stop start restart re logs logs-backend logs-worker \
        logs-frontend logs-db ps shell-backend shell-db certs env clean fclean \
        prune help

all: up

up: env certs ## Build the images and start every service
	@printf "$(BLUE)building and starting the stack...$(NC)\n"
	@$(COMPOSE) up --build -d
	@printf "$(GREEN)"
	@printf "stack is up\n"
	@printf "  application : https://localhost:$(HTTPS_PORT)\n"
	@printf "  http        : redirects to https\n"
	@printf "$(NC)"
	@printf "the certificate is self-signed, so the browser shows a warning once.\n"
	@printf "run 'make logs' to follow the services.\n"

build: env
	@$(COMPOSE) build

down:
	@$(COMPOSE) down

stop:
	@$(COMPOSE) stop

start:
	@$(COMPOSE) start

restart:
	@$(COMPOSE) restart

re: fclean all


logs:
	@$(COMPOSE) logs -f

logs-backend:
	@$(COMPOSE) logs -f backend

logs-worker:
	@$(COMPOSE) logs -f worker

logs-frontend:
	@$(COMPOSE) logs -f frontend

logs-db:
	@$(COMPOSE) logs -f mysql

ps:
	@$(COMPOSE) ps

shell-backend:
	@$(COMPOSE) exec backend sh

shell-db:
	@$(COMPOSE) exec mysql mysql -uroot -p$${DB_ROOT_PSW} -P5310 trancendance


env:
	@if [ ! -f .env ]; then \
		printf "$(RED)no .env file found.$(NC)\n"; \
		printf "copy .env.example to .env and fill it in:\n"; \
		printf "  cp .env.example .env\n"; \
		exit 1; \
	fi

certs: $(CERT_FILE)

$(CERT_FILE):
	@printf "$(BLUE)generating a self-signed TLS certificate...$(NC)\n"
	@mkdir -p $(CERT_DIR)
	@openssl req -x509 -nodes -newkey rsa:2048 -days 365 \
		-keyout $(KEY_FILE) -out $(CERT_FILE) \
		-subj "/C=LU/ST=Luxembourg/L=Luxembourg/O=42/OU=transcendence/CN=localhost" \
		-addext "subjectAltName=DNS:localhost,IP:127.0.0.1" 2>/dev/null
	@printf "$(GREEN)certificate written to $(CERT_DIR)$(NC)\n"


clean:
	@printf "$(RED)removing containers and volumes...$(NC)\n"
	@$(COMPOSE) down -v

fclean: clean
	@printf "$(RED)removing images and certificates...$(NC)\n"
	@docker image rm -f transcendence-backend transcendence-frontend 2>/dev/null || true
	@rm -rf $(CERT_DIR)

prune:
	@docker system prune -af --volumes


help:
	@printf "$(BLUE)ft_transcendence$(NC)\n\n"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
		| awk 'BEGIN {FS = ":.*?## "}; {printf "  $(GREEN)%-16s$(NC) %s\n", $$1, $$2}'
