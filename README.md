# backend
* = required field
---------
# REGISTER:
---------
- username: string*
- password: string*

# LOGIN:
--------
- username: string*
- password: string* 

/api/auth/register
/api/auth/login

/api/users
- returns a list of registered users
- get & delete

# USERS:
------
Name: string*
Contact: string*
Username: string 
Confirmation: boolean
}

/api/profile
- get, post, put, delete

# POTLUCK:
--------
Name: string*
Date: string*
Location: string*
Dish Name: string*
Description: text
AllergyAlert: boolean
Email: string

/api/potluck
- get, post, put, delete

https://potluck-backend-919.herokuapp.com/
