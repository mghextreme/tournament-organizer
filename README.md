# Tournament Organizer

## Requirements

- Docker (and Docker Compose)
- Vue CLI (NodeJS)

## Setup

1. Create a Docker volume with `docker volume create --name torganizer --driver local`
2. Run `docker-compose up -d`
3. Import base data
   > _Only if first time running. Can be done in [localhost:8081](http://localhost:8081)_
4. Run API
   > _Coming soon_
5. Run App
   > ```sh
   > cd app
   > npm run serve
   > ```
6. Access [localhost:8080](http://localhost:8080)
