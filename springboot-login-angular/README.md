## Spring Boot Security (HTTP Basic Auth) + Angular
 
Login page with HTTP basic authentication using Springboot & Angular

### Technology stack:

* Maven;
* Java 8
* Spring Boot;
* Spring Web;
* Spring Security;
* Angular 9
* HTML, CSS.

### Configure frontend - Angular
#### generate angular project under /src/main/resources/
```bash
ng new <project name>
  ```
#### Setup output path to /src/main/resources/static
Edit **angular.json**, change outputPath to "../../static"
#### Build angular project as well when maven build
Edit pom.xml, add plugin exec-maven-plugin, for detail see pom.xml

### Steps
#### 1. Deploy angular
```bash
  /src/main/resources/frontend/ng build --prod
```
Deploy angular from 'frontend' to 'static' folder

#### 2. To run this application use:
```bash
mvn spring-boot:run
  ```

#### 3. Open browser and browse at
[http://localhost:8080]
