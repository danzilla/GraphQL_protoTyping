# BlingBlaw -  A minimalist budget app :green_heart: :sparkles: :tada:

### Engine		 : Node.JS v8+
### Database	 : PostgreSQL
### Server	 	 : ExpressJS
### API-Endpoint: REST (Migrating to GraphQL)

#### Server   - Node.JS || Express -> GraphQL -> PostGraphile
#### Client   - Node.JS || React -> Redux -> Apollo client

#### To-Do | Edited: July 30, 2019
- [ ] Client - Remove Local States and Redux
	- [ ] Rebuild Client | No more States | Use React Hooks | New UI Library and Same layout (Minimal)
	- [ ] Redux Implement
	- [ ] Apollo Client Implement
- [ ] Server - Remove REST and Implment GraphQL
	- [x] Rebuild Server | New folder structure
	- [ ] Remove REST | REST for Authentication and ActiveToken | Query driven for FannyData
	- [ ] PostGraphile Implement
- [ ] DevOps
	- [ ] Dray new overview of the app

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
- Change app-database-host
	```
	// File: server/app/src/config/app.db.js
	//
	// If Production - SET (PROD) 
	//	- db_config.database_host_dev_prod.prod
	// If Local and Development - SET (DEV) 
	//	- db_config.database_host_dev_prod.dev
	// Default-setting (DEV)
	// Dev environment for docker_compose and npm
	   const db_Host = db_config.database_host_dev_prod.dev;
	```

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
- **Launch** the app
	- > `npm start`
- Containerized services for
	- > PostgreSQL + PGAdmin

