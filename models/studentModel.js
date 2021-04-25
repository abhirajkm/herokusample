var mongoose = require('mongoose')

var studentSchema = new mongoose.Schema(

    {
        name : string 
        rollno : number;

    }
)




var studentModel = mongoose.model('students',studentSchema)

module.exports={studentModel}