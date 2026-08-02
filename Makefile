COMPOSE := $(shell docker compose version >/dev/null 2>&1 && echo "docker compose" || echo "docker-compose")

DEV  := $(COMPOSE) -f docker-compose.yml -f docker-compose.dev.yml
PROD := $(COMPOSE) -f docker-compose.yml -f docker-compose.prod.yml

CERT_DIR   := docker/certs
CERT_FILE  := $(CERT_DIR)/cert.pem
KEY_FILE   := $(CERT_DIR)/key.pem
DEV_PORT   ?= 5173
HTTPS_PORT ?= 8443

GREEN := \033[0;32m
BLUE  := \033[0;34m
RED   := \033[0;31m
NC    := \033[0m

.DEFAULT_GOAL := dev
.PHONY: dev up prod build down stop start restart re logs logs-backend \
        logs-worker logs-frontend logs-db ps shell-backend shell-db certs env \
        clean fclean prune help

dev: env ## Start the development stack with hot reload
	@printf "$(BLUE)starting the development stack...$(NC)\n"
	@$(DEV) up --build -d
	@printf "$(GREEN)"
	@printf "development stack is up\n"
	@printf "  app : http://localhost:$(DEV_PORT)\n"
	@printf "  api : http://localhost:3000\n"
	@printf "$(NC)"
	@printf "sources are bind-mounted: saving a file reloads it, no rebuild.\n"

up: prod ## Alias for prod

prod: env certs ## Start the production stack behind nginx and HTTPS
	@printf "$(BLUE)building and starting the production stack...$(NC)\n"
	@$(PROD) up --build -d
	@printf "$(GREEN)"
	@printf "production stack is up\n"
	@printf "  app : https://localhost:$(HTTPS_PORT)\n"
	@printf "$(NC)"
	@printf "the certificate is self-signed, so the browser warns once.\n"

build: env ## Build the production images without starting anything
	@$(PROD) build

down: ## Stop and remove the containers of both stacks
	@$(DEV) down --remove-orphans
	@$(PROD) down --remove-orphans

stop: ## Stop the containers without removing them
	@$(DEV) stop

start: ## Start containers that were stopped
	@$(DEV) start

restart: ## Restart the development stack
	@$(DEV) restart

re: fclean dev ## Full rebuild of the development stack

logs: ## Follow the logs of every service
	@$(DEV) logs -f

logs-backend: ## Follow the API logs
	@$(DEV) logs -f backend

logs-worker: ## Follow the email worker logs
	@$(DEV) logs -f worker

logs-frontend: ## Follow the frontend logs
	@$(DEV) logs -f frontend

logs-db: ## Follow the MySQL logs
	@$(DEV) logs -f mysql

ps: ## Show the state of every service
	@$(DEV) ps

shell-backend: ## Open a shell inside the API container
	@$(DEV) exec backend sh

shell-db: ## Open a MySQL prompt inside the database container
	@$(DEV) exec mysql mysql -uroot -p$${DB_ROOT_PSW} -P5310 trancendance

env: ## Check that a .env file exists
	@if [ ! -f .env ]; then \
		printf "$(RED)no .env file found.$(NC)\n"; \
		printf "copy .env.example to .env and fill it in:\n"; \
		printf "  cp .env.example .env\n"; \
		exit 1; \
	fi

certs: $(CERT_FILE) ## Generate a self-signed certificate if none exists

$(CERT_FILE):
	@printf "$(BLUE)generating a self-signed TLS certificate...$(NC)\n"
	@mkdir -p $(CERT_DIR)
	@openssl req -x509 -nodes -newkey rsa:2048 -days 365 \
		-keyout $(KEY_FILE) -out $(CERT_FILE) \
		-subj "/C=LU/ST=Luxembourg/L=Luxembourg/O=42/OU=transcendence/CN=localhost" \
		-addext "subjectAltName=DNS:localhost,IP:127.0.0.1" 2>/dev/null
	@printf "$(GREEN)certificate written to $(CERT_DIR)$(NC)\n"

clean: ## Stop everything and delete the database and Redis volumes
	@printf "$(RED)removing containers and volumes...$(NC)\n"
	@$(DEV) down -v --remove-orphans
	@$(PROD) down -v --remove-orphans

fclean: clean ## clean, plus the built images and the certificates
	@printf "$(RED)removing images and certificates...$(NC)\n"
	@docker image rm -f transcendence-backend transcendence-frontend \
		transcendence-backend-dev transcendence-frontend-dev 2>/dev/null || true
	@rm -rf $(CERT_DIR)

prune: ## Reclaim disk space from every unused Docker object (system wide)
	@docker system prune -af --volumes

help: ## Show this help
	@printf "$(BLUE)ft_transcendence$(NC)\n\n"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
		| awk 'BEGIN {FS = ":.*?## "}; {printf "  $(GREEN)%-16s$(NC) %s\n", $$1, $$2}'
