
// // Task 1

// const arrayOfFood = ["burger", "pizza", "donuts", "pizza", "koshary", "donuts", "seafood", "burger"];

// const mySet = new Set(arrayOfFood);

// mySet.add('pasta');

// mySet.delete('burger');

// function clearSet (aSet) {
//     if(aSet.size>2){
//         aSet.clear();
//     }
// }

// // Task 2

// class Vehicle {

//     static counter = 0;

//     constructor(wheels = 4,speed = 100){
//         this.wheels = wheels;
//         this.speed = speed;
//         Vehicle.counter++;
//     }

//     static compareSpeeds(v1,v2){
//         if(v1.speed>v2.speed){
//             return v1;
//         } else {
//             return v2;
//         }
//     }
// }

// class Bike extends Vehicle {
//     constructor(wheels,speed,basket =true){
//         super(wheels,speed);
//         this.basket = basket;
//     }
// }

// // Task 3

// async function fetchFun () {
//     try{
//         const response = await fetch('./users.json');
//         const data = await response.json();

//         let allNats = [];
//         for(let i=0;i<data.results.length;i++){
//             let fname = data.results[i].name.first;
//             let lname = data.results[i].name.last;
//             data.results[i].full_name = fname+' '+lname;
//             allNats.push(data.results[i].nat);
//         }
//         console.log('Data with full_name: ',data);

//         let filteredUsers = data.results.filter((val,idx)=>data.results[idx].gender=='male'&&data.results[idx].dob.age>50);
//         console.log('Males>50: ',filteredUsers);

//         let natSet = new Set(allNats);
//         let natUsers = {};
//         for (let value of natSet.values()){
//             let natFilter = data.results.filter((val,idx)=>data.results[idx].nat==value);
//             natUsers[value]= natFilter;
//         }
//         console.log('Nationality Filter : ',natUsers);

//         let accInput = data.results.filter((val,idx) => data.results[idx].nat=='FR');
//         let old = accInput.reduce(function(acc,item){
//             acc = acc.dob.age>item.dob.age? acc: item;
//             return acc;
//         },{dob:{age:1}})
//         console.log('Oldest French Person: ',old);

//     } catch {
//         throw ('Fetching Failed!');
//     }
// }

// // Task 4

const range = {
    from: 1,
    to: 10,
    [Symbol.iterator](){
        return {
            counter:this.from-1,
            nextTo: this.to,
            next(){
                if(this.counter<this.nextTo){
                    this.counter++;
                    return {value: this.counter,done:false};
                } else {
                    return {value: undefined,done:true};
                }
            }
        }
    }
}

for (let item of range) {
    console.log(item);
}