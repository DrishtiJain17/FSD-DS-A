let ar=[1,2,2,34,3,33,45]
let newar1=ar.map((x)=>x*2)
let newar2=ar.filter((x)=>x%2==0).map((x)=>x*3);
let newar3=ar.reduce((x,y)=>x+y,0)
let newar4=ar.filter((x)=>x%2==0).map((x)=>x*4).reduce((x,y)=>x+y,0)
console.log(newar)
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
let newar=students.filter((x) => x.score>60).map(x=>x.score*2).reduce((x,y)=>x+y,0)
console.log(newar)