#
# Build stage
#
#FROM maven:3.6.0-jdk-11-slim AS build
FROM maven:3.8.7-eclipse-temurin-19 AS build
COPY . .
RUN mvn clean package -Pprod -DskipTests

#
# Package stage
#
FROM eclipse-temurin:19
COPY --from=build /target/springboot-0.0.1-SNAPSHOT.jar springboot-0.0.1-SNAPSHOT.jar 
# ENV PORT=8080
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "springboot-0.0.1-SNAPSHOT.jar"]