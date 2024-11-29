FROM openjdk:22-jdk-slim

WORKDIR /app

COPY build/libs/amadeus-0.0.1-SNAPSHOT.jar amadeus.jar

EXPOSE 9090

CMD ["java", "-jar", "amadeus.jar"]

