FROM node:8.11.4
RUN npm install sails -g
ENV NODE_ENV development
WORKDIR /Users/Jay/Documents/Dal/Sem\ 2/Web\ 5709/Donor
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install
COPY . .
EXPOSE 1337
CMD sails lift