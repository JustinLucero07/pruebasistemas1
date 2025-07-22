# Proyecto de Microservicio y Base de Datos

## Opciones de despliegue

### Docker Compose

1. Ejecuta el siguiente comando para levantar los servicios:
   
   ```
   docker-compose up --build
   ```

2. Esto iniciará la base de datos PostgreSQL, el microservicio Jakarta y el frontend Angular.

### Kubernetes

1. Aplica los archivos de despliegue:
   
   ```
   kubectl apply -f database-deployment.yaml
   kubectl apply -f database-service.yaml
   kubectl apply -f microservice-deployment.yaml
   kubectl apply -f microservice-service.yaml
   ```
