## Blogs Api

- MSC
- SOLID
- RESTFUL
- JWT
- MySQL
- Sequelize
- Express
- Express-Rescue

### How to:

To test the projects you can download them from this repo, and then run de code line below:

```
<!-- Install dependencies -->

npm i

<!-- Create DB and run Migrations -->

npm run prestart

<!-- Populate DB -->

npm run seed
```

### Routes:

- User Routes:
  - POST http://localhost:3000/user (Create User) 
  - POST http://localhost:3000/login (Login)
  - GET http://localhost:3000/user (Get all users)
  - GET http://localhost:3000/user/:id (Get User by ID)
  - DELETE http://localhost:3000/user/me (Delete User)

- Post Routes:
  - POST http://localhost:3000/post (Create Post)
  - GET http://localhost:3000/post (Get all posts)
  - GET http://localhost:3000/post/:id (Get post by ID)
  - PUT http://localhost:3000/post/:id (Update post)
  - DELETE http://localhost:3000/post/:id (Delete post)
  