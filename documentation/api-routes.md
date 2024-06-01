# API Documentation

## USER AUTHENTICATION/AUTHORIZATION

### All endpoints that require authentication

All endpoints that require a current user to be logged in.

- Request: endpoints that require authentication
- Error Response: Require authentication

  - Status Code: 401
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Authentication required"
    }
    ```
  
### Get Logged in User

Returns the account info of the current logged in user.

-Require Authentiction: true
-Request

  -Method: GET
  -URL: /api/:user_id (maybe change)
  -Body: none

-Successful Response

  -Status Code: 200
  -Headers:
    -content-Type: application/json
  -Body:
    ```json
    {
      "user": {
        "id": 1,
        "email": "email@gmail.com",
        "username": "crochetLover",
        "imgURL": "willfigureoutlater"
      }
    }
    ```

### Get user by ID

Returns the information about a single user by ID

-Require Authentiction: false
-Request

  -Method: GET
  -URL: /api/users/:user_id
  -Body: none

-Successful Response: User found

  -Status Code: 200
  -Headers:
    -content-Type: application/json
  -Body:
    ```json
    {
      "user": {
        "id": 1,
        "email": "email@gmail.com",
        "username": "crochetLover",
        "imgURL": "willfigureoutlater"
      }
    }
    ```

-Error Responcse: Couldn't find a user with that ID

  -Status Code: 200
  -Headers:
    -content-Type: application/json
  -Body:
    ```json
      {
        "message": "No user found"
      }
    ```

### Log in a user

Logs in a user with valid credentials and returns the current user's information

- Require Authentication: false
- Request

  - Method: POST
  - URL: /api/auth/login
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "email": "email@gmail.com",
      "password": "ravioli ravioli give me the formuoli"
    }
    ```

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
      {
        "user": {
          "id": 1,
          "email": "email@gmail.com",
          "username": "crochetLover",
          "imgURL": "willfigureoutlater"
        }
      }
    ```

- Error Response: Invalid credentials

  - Status Code: 401
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
    "message": "Invalid credentials"
    }
    ```

- Error response: Body validation errors

  - Status Code: 400
    - Headers:
  - Content-Type: application/json
  - Body:

    ```json
    {
     "message": "Bad Request", //
      "errors": {
        "email": "Email is required",
        "password": "Password is required"
      }
    }

### Register a anew user

Creates a new user, logs them in as current user, then returns current user's information

- Require Authentication: false
- Request

  - Method: POST
  - URL: /api/auth/signup
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      {
          "email": "email@gmail.com",
          "username": "crochetLover",
          "password": "ravioli ravioli give me the formuoli",
          "imgURL": "willfigureoutlater" 
      }
    }
    ```

- Successful response

  - Status Code: 200
  -Headers:
    -Content-Type: appliction/json
  -Body:

    ```json
     {
        "user": {
          "id": 1,
          "email": "email@gmail.com",
          "username": "crochetLover",
          "imgURL": "willfigureoutlater"
        }
      }
    ```

-Error response: User with email already exists

  -Status Code: 500
  -Headers:
    - Content-Type: application/json
  -Body:
    ```json
    {
      "message": "User already exists",
      "errors": {
        "email": "User with that email already exists"
      }
    }
    ```

-Error response: Body validation error

  -Status Code: 400
  -Headers:
    - Content-Type: application/json
  -Body:
    ```json
    {
     "message": "Bad Request",
      "errors": {
        "email": "Invalid email",
        "username": "Username is required"
      }
    }
    ```
