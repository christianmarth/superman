# superman
Halal, it's a lifestyle.


## Getting started


## Install docker and docker-compose
Docker and docker-compose dependencies
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


## Re-build service images
```
docker-compose build --force-rm --no-cache
```


## Coding with docker
https://code.visualstudio.com/docs/remote/containers


## Docker-compose setup
https://docs.docker.com/compose/startup-order/
