import express from 'express';
const router = express.Router();
const users = [
    {
    firstName: "John",
    lastName:"Doe",
    age:25
    },
    {
        firstName: "John",
        lastName:"Doe",
        age:28
        }

]
router.get('/',(req,res) =>{
    console.log(users);
    res.send("hello");
});

router.post('/',(req, res) =>{
    console.log("Post route reached");
    res.send("Post route reached");
});

export default router;