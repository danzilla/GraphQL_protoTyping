FROM node:8

# Create app-client folder -blingBlaw
RUN mkdir -p /srv/app/blingBlaw/client
WORKDIR /srv/app/blingBlaw/client

# Copy dependencies requirement FIRST 
COPY ./package.json /srv/app/blingBlaw/client
COPY ./package-lock.json /srv/app/blingBlaw/client

# install dependencies SECOND
RUN npm cache clean --force && npm install

# copy app source to image _after_ npm install so that
# application code changes don't bust the docker cache of npm install step
COPY . /srv/app/blingBlaw/client

# set application PORT and expose docker PORT, 80 is what Elastic Beanstalk expects
ENV PORT 3000
EXPOSE 3000

CMD [ "npm", "run", "start" ]