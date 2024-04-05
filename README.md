# restaurant-demo
This is a demo restaurant template, designed to be proof-of-concept for potential freelance clients.

# React + Pocketbase App
This is a base application made for quick prototyping, POC, and templating.

**You will need to have yarn installed to run this app**

https://classic.yarnpkg.com/lang/en/docs/install/

## Frontend
This is a React Typescript frontend using Vite: 

https://vitejs.dev/guide/

Client Url: http://localhost:5173/

We interact with the pocketbase backend using the pcoketbase javascript SDK:

https://github.com/pocketbase/js-sdk

## Backend
This is a pocketbase backend for a quick and easy CMS solution: 

https://pocketbase.io/

API Url: http://127.0.0.1:8090/api/

Admin URL:  http://127.0.0.1:8090/_/

Admin Login:
- email: `admin@admin.com`
- pw: `password1234`

## Getting Started
In the root of the app, run the `yarn` command to install dependencies. Then you can run commands from the root of the app.

## Commands
Run the frontend and backend at the same time:

 `yarn start:stack`

Run only the frontend:

 `yarn start:frontend`

Run only the backend:

 `yarn start:backend`