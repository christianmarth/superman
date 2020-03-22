# superman
Halal, it's a lifestyle.

**Table of Contents**

1. [Getting Started](https://github.com/loka-loka/superman#getting-started)
2. [Database](https://github.com/loka-loka/superman#database-commands)
3. [More Docker](https://github.com/loka-loka/superman#more-docker)


# Getting started

## Install docker and docker-compose
Docker and docker-compose dependencies
- https://www.docker.com/products/docker-desktop
- https://docs.docker.com/install/
- https://docs.docker.com/compose/install/

## Build service images.
Open a terminal and execute the following command
```
docker-compose build
```

## Start services
```
docker-compose up
```


## Containers logs
You can list logs for a specific service. For instance, for backend service logs
```
docker-compose logs -f web
```

Frontend service logs
```
docker-compose logs -f frontend
```

## Restart running services
Restart web service
```
docker-compose restart web
```

Restart frontend service
```
docker-compose restart frontend
```

# Database

## Dependencies
- Install the Hasura CLI:
    - https://hasura.io/docs/1.0/graphql/manual/hasura-cli/install-hasura-cli.html

## Migrations
- Run these from the root of the project:
    - Attach to the Hasura Console: `hasura console --admin-secret myadminsecretkey` 
    - Apply db migrations: `hasura migrate apply --admin-secret myadminsecretkey`
    
[Additional Docs](https://hasura.io/docs/1.0/graphql/manual/migrations/index.html)


# More Docker
## Re-build service images
Delete and rebuild all services from scratch
```
docker-compose build --force-rm --no-cache
```

## Coding with docker
https://code.visualstudio.com/docs/remote/containers

### Recommended VS Code extensions
- https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker
- https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers
- https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack


## Docker-compose setup
https://docs.docker.com/compose/startup-order/
