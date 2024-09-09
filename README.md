# API REST EN JAVA CON SPRING BOOT

Api rest en Java, la cual en su backend utiliza una base de datos relacional y el framework de Spring Boot, y es consumida en un frontend de una aplicación web. 
Arquitectura: Cliente - Servidor

# Conexión Base de Datos 

**SQL SERVER**

Copia en el archivo pom.xml la siguiente dependencia:

```
		<dependency>
			<groupId>com.microsoft.sqlserver</groupId>
			<artifactId>mssql-jdbc</artifactId>
			<scope>runtime</scope>
		</dependency>
```

Copia en el archivo application.properties la siguiente configuración:

```
spring.datasource.url=jdbc:sqlserver://localhost:1433;databaseName=nombre_db;encrypt=true;trustServerCertificate=true;
spring.datasource.driverClassName=com.microsoft.sqlserver.jdbc.SQLServerDriver
spring.datasource.username=usuario
spring.datasource.password=contraseña
spring.jpa.hibernate.dialect=org.hibernate.dialect.SQLServerDialect
spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto=update
```
**RECUERDA CREAR EN EL PRIMER LUGAR LA BASE DE DATOS CON EL NOMBRE ASIGNADO EN: databaseName=nombre_db**

**MYSQL**

Copia en el archivo pom.xml la siguiente dependencia:

```
		<dependency>
			<groupId>com.mysql</groupId>
			<artifactId>mysql-connector-j</artifactId>
			<scope>runtime</scope>
		</dependency>
```

Copia en el archivo application.properties la siguiente configuración:

```
spring.datasource.url=jdbc:mysql://localhost:3306/nombre_db
spring.datasource.username=usuario
spring.datasource.password=pass
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto=update
```
**RECUERDA CREAR EN EL PRIMER LUGAR LA BASE DE DATOS CON EL NOMBRE ASIGNADO EN: /nombre_db**
