## Introduction
In this repository I have created my final project, called **Box Distrito9**. I have been inspired by the CROSSFIT that I went to and I hope to go again soon. In this application, the desired result is to be able to provide information on the activities carried out in the center and create a user section where they can enter their data and record all their progress in the exercises carried out.
The repository is divided into 2, on the one hand the backEnd where I have created the entire database called BOX DICTRITO9 with PHPMYADMIN and on the other hand the Front.
For the BackEnd I have used MYSQL with NODE.JS and for the front I have used REACT, for the layout I have used CSS.MODULE.

http://localhost/phpmyadmin/db_structure.php?server=1&db=BoxDictrito9

Below I detail the endpoints of the BackEnd part.

# Enpoind Users

| TYPE | URL                                              | DESCRIPCION       |
|------|--------------------------------------------------|-------------------|
| POST | http://localhost:8000/users/InsertUser           | Insert new user   |
| PUT  | http://localhost:8000/users/updateUser           | Modify a user     |
| GET  | http://localhost:8000/users/userProfile/:id_User | User profile      |
| GET  | http://localhost:8000/users/allUser              | show users        |
| GET  | http://localhost:8000/users/rolUsu/:id_User      | User role         |
| GET  | http://localhost:8000/users/searchUser/:termino  | Search for users  |
| PUT  | http://localhost:8000/users/changeSituation      | Change user state |
| PUT  | http://localhost:8000/users/modifyRolUser        | Modify user role  |
| GET  | http://localhost:8000/users/searchEmail/:email   | Search for users  |
| PUT  | http://localhost:8000/users/updatePhoto          | Modify user role  |


# Enpoind Exercise

| TYPE   | URL                                                                 | DESCRIPTION                                     |
|--------|---------------------------------------------------------------------|-------------------------------------------------|
| GET    | http://localhost:8000/exercises/allExercises                        | Show exercises                                  |
| GET    | http://localhost:8000/exercises/searchExercises/:termino'           | SearchExercises                                 |
| GET    | http://localhost:8000/exercises//searchWeight/:id_exercise/:id_User | Show the weights with that user and exercise id |
| DELETE | http://localhost:8000/exercises/deleteWeight/:id_weith              | Remove a Weight                                 |
| POST   | http://localhost:8000/exercises//addWeight                          | Add weight                                      |