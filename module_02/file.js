const fs = require("fs")

const addData = (data) =>{
    
const allData = getData();
const duplicate = allData.find(ele=>{
    return ele.name == data.name 
})
console.log(duplicate);
if(duplicate)
{
    console.log("name already exist");
    return;
}

// console.log(allData);
allData.push(data)
const myData = JSON.stringify(allData)
fs.writeFile("todo.json",myData,()=>{
console.log("Data inserted!!!!");
})
}

const viewfile = ()=>{
    const allData = getData()
    console.log(allData);
}

const getData = () => {
try {
    const Data = fs.readFileSync("todo.json","utf-8")
    const myData = JSON.parse(Data) 
    // console.log(myData.name);
    return myData;
} catch (error) {
    return [];
}
}





module.exports={addData,viewfile} 