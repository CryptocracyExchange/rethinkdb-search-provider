FROM node:7.4-alpine

# RUN apk add --update python make g++

# Set default environment variables
ENV DEEPSTREAM_HOST=deepstream \
    DEEPSTREAM_PORT=6020 \
    DEEPSTREAM_AUTH_ROLE=provider \
    DEEPSTREAM_AUTH_USERNAME=rethinkdb-search-provider \
    PROVIDER_LISTNAME=search \
    PROVIDER_LOGLEVEL=3 \
    RETHINKDB_HOST=rethinkdb \
    RETHINKDB_PORT=28015 \
    RETHINKDB_DATABASE=deepstream

RUN mkdir -p /usr/local/app
WORKDIR /usr/local/app

COPY ./ ./

# RUN npm install
# RUN rm ./node_modules/deepstream.io-provider-search-rethinkdb/src/search.js
# RUN mv 

# Define default command.
CMD [ "node", "index.js" ]
