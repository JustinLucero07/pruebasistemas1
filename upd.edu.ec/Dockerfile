FROM maven:3.9.6-eclipse-temurin-17 AS builder

WORKDIR /app

COPY ./ ./

RUN mvn clean package -DskipTests

FROM payara/server-full:6.2025.4-jdk17

ENV POSTGRES_HOST=postgres
ENV POSTGRES_PORT=5432
ENV POSTGRES_DB=midb
ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=admin

RUN mkdir -p /opt/payara/deployments

COPY --from=builder /app/target/upd.edu.ec.war /opt/payara/deployments/

EXPOSE 8080
