Implement a user registration system using the MVC pattern.

* [ ] save users to csv file
* [ ] handle missing parameters errors
* [ ] create tests for all routes

# Routes
<!--
| Route | HTTP verb | Input | Output|
| ----- | --------- | ----- | ----- |
| `/` | | | |
| `/` | | | |
-->

| Route | HTTP verb | Input | Output|
| ----- | --------- | ----- | ----- |
| `/` | GET | void | home page |
| `/user` | GET | void | list all registered users |
| `/user` | POST | `{"name": "John Doe", "email": "john@doe.co.uk"}` (JSON) | register new user |
 
*User registration will be tracked with a csv file

# Models

```ts
interface User {
  name: string,
  email: string,
}
```