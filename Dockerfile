# stage1 as builder
FROM node:12.18.2 as builder

WORKDIR /usr/src/app

# Copy both package.json AND package-lock.json
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source files
COPY . .

# Copy args to env variables
ARG REACT_APP_BASE_URL
ENV REACT_APP_BASE_URL=REACT_APP_BASE_URL

# Build the project and copy the files
RUN yarn build


FROM nginx

# Copy application statics
COPY --from=builder /usr/src/app/build /usr/share/nginx/html


# Copy configuration
COPY /conf/nginx /etc/nginx

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]