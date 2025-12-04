##Entrevista Técnica - CRUD + Autenticación de Usuarios

Este proyecto está dirigido para una entrevista técnica en la cual
se evalúan habilidades tanto de frontend como backend.

La aplicación permite autenticar usuarios y administrar un pequeño catálogo de productos utilizando la API externa JummyJSON.

#Tipos de usuario:

- ADMIN -> Puede realizar todas las operaciones CRUD en los productos.

- USER -> Solo puede visualizar los productos disponibles.

Además, los usuarios pueden actualizar sus credenciales o contraseña tanto desde el Login como desde el Dashboard.


#Tecnologías Utilizadas

--- Frontend ---

React
TypeScript
CSS Modules
Vite

--- Backend ---

Node.js
Express
JWT para autenticación

--- Otros ---

Control de versiones con Git + GitHub
API externa: JummyJSON para productos
Docker + Docker Compose

#Instrucciones para Ejecutar el Proyecto

El proyecto está completamente dockerizado y se puede correr fácilmente con Docker Compose.

A continuación se incluyen todos los pasos necesarios:

# Estructura del proyecto

codiceglobal_interview/
│
├── docker-compose.yml
├── README.md
│
├── codiceglobal_back/
│   └── api/
│       ├── Dockerfile
│       ├── package.json
│       
│
└── codiceglobal_front/
    ├── Dockerfile
    ├── package.json
    ├── src/


## PASOS PARA EJECUTAR EL PROYECTO

# Paso 1: Clonar el repositorio
Clona el repositorio en tu máquina local utilizando el siguiente comando:

```bash
git clone git@github.com:Specto95/codiceglobal_interview.git
cd codiceglobal_interview
```

# Paso 2: Construir y levantar los contenedores Docker
Asegúrate de tener Docker y Docker Compose instalados en tu máquina. Luego, ejecuta el siguiente comando en la raíz del proyecto para construir y levantar los contenedores:

```bash
docker-compose up --build
```

# Paso 3: Acceder a la aplicación
Una vez que los contenedores estén en funcionamiento, puedes acceder a la aplicación frontend en tu navegador web en la siguiente URL:

```
http://localhost:5173
```

El backend estará corriendo en:

```
http://localhost:3000
```

# Paso 4: Credenciales de prueba
Puedes utilizar las siguientes credenciales para probar la aplicación:

ADMIN
email: admin@admin.com
password: Admin1234!

USER
email: user@user.com
password: User1234!