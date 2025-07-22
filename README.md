# Proyecto de Microservicio y Base de Datos

## Opciones de despliegue

**Nota:** El despliegue del microservicio Jakarta no funciona correctamente.

### Docker Compose

1. Ejecutar el siguiente comando para levantar los servicios:
   
   ```
   docker-compose up --build
   ```

2. Se incia la base de datos PostgreSQL, el microservicio Jakarta y el frontend Angular.

### Kubernetes

1. Aplica los archivos de despliegue:
   
   ```
   kubectl apply -f database-deployment.yaml
   kubectl apply -f database-service.yaml
   kubectl apply -f microservice-deployment.yaml
   kubectl apply -f microservice-service.yaml
   ```

### Minikube

1. Configura el entorno Docker de Minikube:

   ```
   @FOR /f "tokens=*" %i IN ('minikube -p minikube docker-env --shell cmd') DO @%i
   ```

2. Verifica la información de Docker:

   ```
   docker info --format "{{.Name}}"
   ```

3. Construye las imágenes Docker para los servicios:

   ```
   docker build -t angular ./demo66
   docker build -t jakarta ./jakarta-postgres-app
   ```
