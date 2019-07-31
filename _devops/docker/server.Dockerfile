FROM node:8

# Create app-server folder -blingBlaw
RUN mkdir -p /srv/app/blingBlaw/server
WORKDIR /srv/app/blingBlaw/server

# Copy dependencies requirement FIRST 
COPY ../server/package.json /srv/app/blingBlaw/server
COPY ../server/package-lock.json /srv/app/blingBlaw/server

# install dependencies SECOND
RUN npm cache clean --force && npm install

# copy app source to image _after_ npm install so that
# application code changes don't bust the docker cache of npm install step
COPY ../server /srv/app/blingBlaw/server

# set application PORT and expose docker PORT, 80 is what Elastic Beanstalk expects
ENV PORT 5000
EXPOSE 5000

CMD [ "npm", "run", "start" ]