## Node

- Student can create an index.js file
- Student can run a javascript file using node
- Student can run a javascript file using nodemon
- Student can describe that node is the V8 javascript engine
- Student can require and use other files in node

## Servers

- Student can describe the role of servers in a client-server model
- Student can identify the parts of code that listen to external requests

## NPM

- Student can npm init
- Student can npm install
- Student can npm install --save
- Student can describe the role of a package.json file
- Student can describe the purpose of the node_modules folder
- Student can .gitignore node_modules

## Express

- Student can install and require express
- Student can start a basic express server by creating an app and listening on a port
- Student can write the handler function with the correct parameters req, res and next
- Student can access url parameters on req.params
- Student can set up an endpoint path to expect multiple params
- Student can use req.query
- Student can send data back with res.send and res.json
- Student can set a status code with res.status

---



**Node** 

The V8 engine that runs Javascript outside of the browser

**npm**

Node Package Manager 

**Expree**

Framework for building servers 

**package.json**

A config file for our application, it will have instructions on dependencies to download and how node should run your application.

**.gitignore**

Tells git which files not to push to github
files/directories to be ignored 

- node_modules 
- .env(password file)
- all files you dont want on github 

**server**

Computer or a device that provides a service to another computer 

In general: As a webserver it is a program that can handle incoming request and respond accordingly

manages access to a centeralized resource:

todays centralized resources: `data.json`
**client**

a computer program thats accesses a service made avaliable as a server 

**params**
stands for a particular resource looks like a normal path on the frontend

backend exmaples:
params denoted with a "`:`"

```js
app.get("api/:id");
```
acess params

```js
req.params.id;
```

**query**
typically used to manipulate/search data being accessed 

front-end example
denoted with a "`?`"

```js
"https://localhost:4000/api/students?name=josh"
```

access query in endpoint function handler:

```js
req.query.name;
```

server instructions :

mkdir server

- touch index.js .gitignore
- npm init -y 
- add node_modules => .gitignore
- npm i express
- require express 
- declare app variable set = to express invoked 
- decalre port 
- app.listen => port
- declare endpoint 
- method -get
- path '/api....'
- handler => (req, res, next) => data to send 
- test in browser 
