FROM eclipse-temurin:25-jre-noble

ADD target/*.jar app.jar
RUN sh -c 'touch /app.jar'
EXPOSE 8080
ENTRYPOINT [ "sh", "-c", "java -jar /app.jar" ]