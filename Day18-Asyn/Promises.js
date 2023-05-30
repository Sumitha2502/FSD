// let checkValue=(value) => {
//     // return new Promise((resolve)=>{
//     //     setTimeout(resolve,value);
//     // });
// };

let checkValue=(value)=>{  
return new Promise(resolve,reject);
if(value>0){
    resolve('is pos')
}
else{
    reject('is neg')
}
}
let value=2;

checkValue(2)
    .then(value=>console.log(`The value ${value}is positive`))
    .catch(negative=>console.log(`The value ${negative} is negative`))