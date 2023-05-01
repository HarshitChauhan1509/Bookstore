const express = require("express");

const router = express.Router();

const { check } = require('express-validator');


const { signUp , signIn , signOut, isSignedIn} = require("../controllers/auth");

router.post( "/signup" ,
    [check("name" , "Minimum 3 characters required" ).isLength( { min: 3 } ),
    check("email" , "Should be an Email").isEmail(),
    check("password" , "Must include 5 characters").isLength({ min: 5})], 
    signUp );


router.post("/signin" ,[
    check("email" , "Should be an Email").isEmail(),
    check("password" , "Must include 5 characters").isLength({ min: 5})
], signIn);


router.get( "/signout" , signOut);


module.exports = router;