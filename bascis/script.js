const URL="https://cat-fact.herokuapp.com/facts"


//now fetch api alwys return a promsie
// let promise=fetch(URL)
// console.log(promise)

const facts=document.querySelector(".facts")
const button=document.querySelector(".btn")

//but we know tht it is asynchronous so we wil use like this
const getFacts= async ()=>{
    console.log("fetching data.....")
    let response= await fetch(URL)
    console.log(response)
    let data= await response.json() //data converted into javascript or useable data
    console.log(data)
    facts.innerText=data[0].text
    
}

button.addEventListener("click",getFacts)












































































































// function getData(dataId,getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('data', dataId)
//             resolve("sucess")
//             if(getNextData){
//                 getNextData()
//             }
//         },5000)
//     })
// }
// const getPromise1=()=>{
//    return new Promise((resolve, reject) => {
//     setTimeout(()=>{

//         console.log('data1')
//         resolve("sucess 1")
//     },5000)
//     })
// }
// const getPromise2=()=>{
//    return new Promise((resolve, reject) => {
//     setTimeout(()=>{

//         console.log('data2')
//         resolve("sucess 2")
//     },5000)
//     })
// }
// console.log("fetching data1........")

// ///promise chaining
// let promsie=getPromise1()
// promsie.then((res)=>{
//     console.log(res)
//     console.log("fetching data2.......")
//     let p2=getPromise2()
//     p2.then((res)=>{
//         console.log(res)
//     })
// })



// function getDataUser(userId){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("data",userId)
//             resolve("sucess")
//         },3000)
//     })
// }
// //promise chaning
// getDataUser(12).then((res)=>{
//     console.log(res)
//     getDataUser(13).then((res)=>{
//         console.log(res)
//     })
// })

//simple promise chaning
// getDataUser(1).then((res)=>{
//     return getDataUser(2)
// }).then((res)=>{
//     return getDataUser(3)
// }).then((res)=>{
//     console.log(res)
// })


//now lets understand about the more simpler way than promises
//we use async which automatically return a promise
// async function myfun(){

//     console.log("hello")
// }


// function getDataUser(userId){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("data",userId)
//             resolve("sucess")
//         },3000)
//     })
// }

// //lets do the same promise chaning using async and await
// async function gettingData(){
//     await getDataUser(1)
//     await getDataUser(2)
// }
