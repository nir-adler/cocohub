FROM node:16.13.0 as builder
RUN npm install -g npm@8.1.4 
WORKDIR /app
RUN npx create-react-app cocohub -y
RUN  rm -r cocohub/node_modules && mv cocohub/* . && mv cocohub/.[!.]* . \
    && npm install
RUN cd /app && npm i react-draggable && npm i react-icons && npm i axios \
     && npm i react-loader-spinner && rm -r src
COPY ./src /app/src
RUN ["npm","run","build"]

FROM nginx:latest
COPY --from=builder /app/build /usr/share/nginx/html
COPY ./conf/default.conf /etc/nginx/conf.d
EXPOSE 3000


