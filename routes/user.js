const router = require('express').Router();
const Users = require('../model/user.model');

//get
router.route('/').get((req,res) => {
    Users.find()
    .then(users => res.json(users))
    .catch(err=> res.status(400).json("Error : "+ err))
})

//create
router.route('/add').post((req,res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const username = req.body.username;
    const dob = req.body.dob;
    const gmail = req.body.gmail;
    const password= req.body.password;
    const mobile = req.body.mobile;
    const address = req.body.address;
    const city = req.body.city;
    const district = req.body.district;
    const pincode = req.body.pincode;

   const newUser = new Users(({firstname,lastname,username,dob,gmail,password,mobile,address,city,district,pincode}));

   newUser.save().then(() => res.json("User added!!!")).catch(err => res.status(400).json("Error : "+ err))
})


//Remove
router.route('/:id').delete((req,res)=> {
    Users.findByIdAndDelete(req.params.id).then(()=>res.json("User Deleted")).catch(err=>res.status(400).json("Error : "+ err))
})

//update
router.route('/update/:id').post((req,res)=> {
    Users.findById(req.params.id).then(user =>{
        user.firstname = req.body.firstname;
        user.lastname= req.body.lastname;
        user.username = req.body.username;
        user.dob = req.body.dob;
        user.gmail =  req.body.gmail;
        user.password = req.body.password;
        user.mobile = req.body,mobile;
        user.address = req.body.address;
        user.city = req.body.city;
        user.district = req.body.district;
        user.pincode = req.body.pincode;

        user.save().then(() => res.json("User updated")).catch(err => res.status(400).json("Error : "+err))
    }).catch(err => res.status(400).json("Error : "+err))
})

module.exports= router;