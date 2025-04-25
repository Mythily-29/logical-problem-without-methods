// vowels

// let input='educAtion';
// let count=0
// for(let i=0;i<input.length;i++){
//     if(input[i]== 'a' || input[i]== 'e' || input[i]== 'i' || input[i]== 'o' || input[i]== 'u' ){
//         count++
//     }
//     else if(input[i]== 'A' || input[i]== 'E' || input[i]== 'I' || input[i]== 'O' || input[i]== 'U' ){
//         count++
//     }
// }
// console.log(count);

//largest

// let arr=[5,10,30,1,22]
// let temp;
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i] < arr[j]){
//             temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
//     }
// }
// console.log(`First Largest : ${arr[0]}  Second Largest : ${arr[1]} `);

// reverse

// let arr=[1,2,3,4]
// let temp=[]
// for(let i=arr.length-1;i>=0;i--){
//     temp[temp.length]=arr[i]
// }
// console.log(temp);


// remove duplicates and ascending

// function removeDuplicates(arr){

//     let store=[]
//     let temp

// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]===arr[j]){
//             arr[j]= '*'        }
//         else if(arr[i] > arr[j]){
//             temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
//     }
// }
// for(let i=0;i<arr.length;i++){
//     if(arr[i]!= '*'){
//         store[store.length]=arr[i]
//     }
// }
// console.log(store);
// }
// removeDuplicates([3,4,4,5,6,6,3,-1,4,4,7,7,2,-1,-1])

// search

// let searcharr=['test','organization','apple'];
// let find=-1
// function testing(searchvalue){
//     for(let i=0;i<searcharr.length;i++){
//         if(searcharr[i]==searchvalue){
//             find=1
//         }
//     }
//     return find;
// }
// console.log(testing('apple'))


//count the letters


// function countingLetters(string){

// let obj={}
// let count=0;

// for(let i=0;i<string.length;i++){

//     for(let j=0;j<string.length;j++){

//         if(string[i]==string[j]){
//             count++
//         }
//         obj[string[i]]=count
//     }
//     count=0

// }
// console.log(obj);
// }countingLetters('delishaa')

//missing numbers

// let arr=[3,12,10]
// let high=arr[0];
// let low=arr[0]
// let count=0;

// for(let i=0;i<arr.length-1;i++){
//     if(high < arr[i]){
//         high=arr[i]
//     }
//     else if(low > arr[i]){
//         low=arr[i]
//     }
// }
// let store=[]
// for(let i=low;i<=high;i++){
//     if(arr[count]==i){
//         count++
//     }else{
//         store[store.length]=i
//     }
// }
// console.log(store)

//maximum repeated numbers

// function repeatedNumber(arr){

// let count=0
// let max=0
// let obj={};

// for(let i=0;i<arr.length;i++){
//     count=0;
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             count++
//         }
//     }
//     if(count > max){
//         max=count;
//         console.log('The value is :' ,arr[i], ' count is ' , max)
//     }
// }}
// repeatedNumber([2,5,1,4,9,2,1,0,2,9,9,9])

// decimal count

// function decimalCount(value){

//     value=""+value
//     for(let i=0;i<value.length;i++){
//         if(value[i]=='.'){
//         len=i
//         }
//     }
// console.log('The count is:',value.length - len -1);
// }

// decimalCount(748765.201)











