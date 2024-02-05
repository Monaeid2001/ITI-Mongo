use FacultySystemDB

db.createCollection("student")

db.student.insertOne({
    FirstName : "Mona", 
    LastName : "Eid", 
    Age : 22, 
    Faculty : {
        Name : "Computers and information technology",
        Address : "6th-October"
    },
    Grades : [
        {
            CourseName : "C",
            Grade : "A",
            Pass : true
        },
        {
            CourseName : "oop",
            Grade : "A",
            Pass : true
        },
        {
            CourseName : "Java",
            Grade : "A",
            Pass : true
        }
    ],
    IsFired : false
})

db.student.insertMany([{
        FirstName : "Nada", 
        LastName : "Eid", 
        Age : 25, 
        Faculty : "Pharamcy",
        Grades : [
            {
                CourseName : "Pharma",
                Grade : "A",
                Pass : true
            },
            {
                CourseName : "Biochemistry",
                Grade : "A",
                Pass : true
            },
            {
                CourseName : "Medical Chemistry",
                Grade : "A",
                Pass : true
            }
        ],
        IsFired : true
    },
    {
        FirstName : "Muhammed", 
        LastName : "Eid", 
        Age : 24, 
        Faculty : {
            Name : "Oral and Dental Surgery",
            Address : "Cairo"
        },
        Grades : [
            {
                CourseName : "Oral Pathology",
                Grade : "A",
                Pass : true
            },
            {
                CourseName : "Dental Radiology",
                Grade : "B",
                Pass : true
            },
            {
                CourseName : "Oral Medicine",
                Grade : "A",
                Pass : true
            }
        ],
        IsFired : false
    }
])
    
db.student.find()

db.student.find({ FirstName: "Mona" })

db.student.find({ $or: [{ FirstName: "Ahmed" }, { LastName: "Ahmed" }] })

db.student.find({ FirstName: { $ne: "Ahmed" } })

db.student.find({ Age: { $gte: 21 }, "Faculty": { $ne: null } })

db.student.find({ FirstName: "Mona" }, { FirstName: 1, LastName: 1, IsFired: 1 })

db.student.updateOne({ FirstName: "Muhammed" }, { $set: { LastName: "Amr" } })

db.student.deleteMany({ IsFired: true })

db.student.deleteMany({})

db.dropDatabase()   