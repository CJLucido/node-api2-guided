#Routing Notes
We write code for humans, optimize for readability

#Terminology

Separation of Concerns
answers the question of "who (what part of the application) should be doing this?"
    guides the design of the app

#Routing

-use it to break up app into sub applications
-picking the code to execute based on URL and HTTP Method
-used for managing sub resources (the coments on a blog post are a sub resource)

we are going to break up the server config and server starter into 2 different files

server.js - configures router, creates server powered by express
index.js - imports server powered by express and listens to the port


#Query String Parameters

the client can send data to the server inside:
body
URL params
query string params (part of the html)
?(headers) //we go over this in week 3


? marks the beginning of the query string params
key = value
&
anotherkey= anothervalue

this will be translated by express to an object
...js
const req.query ={
key = value,
anotherkey= anothervalue
}
...