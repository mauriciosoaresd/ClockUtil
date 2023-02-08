#
# Build stage
#
FROM maven:3.9.0-jdk-19 AS build
COPY . .
RUN mvn clean package

#
# Package stage
#
FROM openjdk:jdk-19
COPY --from=build /target/springboot-0.0.1-SNAPSHOT.jar springboot-0.0.1-SNAPSHOT.jar 
# ENV PORT=8080
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "springboot-0.0.1-SNAPSHOT.jar "]