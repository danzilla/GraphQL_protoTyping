# BlingBlaw  :joy_cat: :nut_and_bolt: :lipstick:

# App Requirement
- PostgreSQL (Containerized)
	- <s>Download and Install PostgreSQL</s>
- NPM and nodeJs
	- Download and Install nodeJs v8+
- Docker and Docker-compose
	- Download and Install Docker and Docker-compose
	- https://docs.docker.com/install/
	- https://docs.docker.com/compose/install/

# Deploy 
Once, you are done with the above requirements.
- Use **git** to clone the repo
	- > `git clone https://github.com/danzilla/blingBlaw.git`

## :whale: Deploy using Docker (Prod-Master-Deploy)
- Change directory to blingBlaw
	- > `cd ./blingBlaw`
- **Run** the app
	- > `docker-compose up --build`
- Containerized services for
	- > Node (React) + Node (Express) + PostgreSQL + PGAdmin

## :whale2: Deploy using Docker (Dev-Master-Deploy)
- Change directory to ./blingBlaw/devops
	- > `cd ./blingBlaw/devops`
- Install app **dependecies** using npm or another package manger
	- > `npm install`
- **Launch ** the app
	- > `npm start`
- Containerized services for
	- > PostgreSQL + PGAdmin
	- > Hot-reload issue with Node

| pgAdmin | configuration |
| --- | --- |
| Host | postgres_db (docker_db_container_name) |
| User | danzilla |
| pwd | Recolla |
| Database | postgres |
