# App

## Development server

To start a local development server, open 3 terminal instances and run simultaneously:

```bash
ng serve shell
ng serve micro-front-1
ng serve micro-front-2
```

Once the servers is running, open your browser and navigate to `http://localhost:4200/`.


## Project structure

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.1.

Steps:

> ng new app --no-create-application

> npm i @angular-architects/native-federation -D

> ng generate application shell

> ng g @angular-architects/native-federation:init --project shell --port 4200 --type dynamic-host

> ng generate application micro-front-1

> ng g @angular-architects/native-federation:init --project micro-front-1 --port 4201 --type remote

> ng generate application micro-front-2

> ng g @angular-architects/native-federation:init --project micro-front-2 --port 4202 --type remote
