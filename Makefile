init:
	@docker compose build --no-cache
	@docker compose up
up:
	@docker compose up
down:
	@docker compose down
exec:
	@docker compose exec nomitai sh
cp:
	@docker cp nomitai-front:/works/node_modules/ ./app/
format:
	@docker compose exec nomitai yarn format
lint-fix:
	@docker compose exec nomitai yarn lint:fix
