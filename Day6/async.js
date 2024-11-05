sayhello=()=>{
    console.log("Hello func")
}
console.log("Start")
setTimeout(sayhello, 4000)
console.log("End")
console.log("start")
setTimeout(() =>{
    console.log("first task completed");
    setTimeout(()=>{
        console.log("second task completed");
        setTimeout(()=>{
            console.log("third task completed");
        },3000)
    },2000)
},1000)
console.log("end")
const myPromise= new Promise((resolve,reject)=>{
    let success=false;
    if(success){
        resolve("Data sent successfully");
    }
    else{
        reject("Data failed");
    }
})

myPromise
.then((message)=>{
    console.log(message);
})
.catch((error)=>console.log("Error fetching data: "+error));

const students = [
    {
        'name':'Alice',
        'score':50,
    },
    {
        'name':'Bob',
        'score':54,
    },
    {
        'name':'Charlie',
        'score':90,        
    },

    {
        'name':'David',
        'score':61
    }
]

function task(message,delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(message)
            resolve(students);
        },delay);
    });
}
task("First task completed",1000)
.then(()=> task("Second task completed",2000))
.then(()=> task("Third task completed",3000))
.then((students)=>console.log("Data recieved: ",students));