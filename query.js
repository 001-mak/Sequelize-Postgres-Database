const db = require('./models/index');


// Find all users
const query = async () =>{

    //get all projects
    
    // const projects = await db.Project.findAll();
    // console.log("All projects:", JSON.stringify(projects, null, 2));
   
    //get all users

    const user = await db.User.findOne();
    console.log("All users:", JSON.stringify(user, null, 2));

    //create department
    // const department = await db.Department.create({
    //     id: 5,
    //     departmentName: "QA",
    //     phone: "813-456-5230",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    // })


    //create user

    // const user = await db.User.create({
    //     id: 6,
    //     firstName: "Alex",
    //     lastName: "Zee",
    //     departmentId: 5,
    //     projectId: 1,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    // })
    // console.log("New User Added:", JSON.stringify(user, null, 2));


}

query();
