const yargs = require("yargs")
const file = require("./file")

yargs.command({
    command : "TODO",
    builder : {
        name : {
            type : String
        },
        age :{
            type : Number
        },
        email : {
            type : String
        },
    },
    handler : function(argv){
        const data ={
            name : argv.name,
            age : argv.age,
            email : argv.email
        }
        file.addData(data)
    }
})

yargs.command({
    command:"view",
    handler:function(argv){
        file.viewfile()
    }
})

yargs.argv