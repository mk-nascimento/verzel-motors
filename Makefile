.PHONY: compose

all: help

help:
	@echo "========================================="
	@echo "Available targets:"
	@echo
	@echo "  help       : Display this help message."
	@echo "  compose    : Main Docker Compose setup."
	@echo "========================================="


.clear:
	@clear && echo

.down: .clear
	@docker compose --project-directory ".docker" down --remove-orphans -v

compose: .down
	@docker compose --project-directory ".docker" up -dV --build
