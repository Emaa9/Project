const axios = require ('axios')

async function getCharacters() {
   const response = await axios.get(
     "https://interview-task-api.mca.dev/qr-scanner-codes/alpha-qr-gFpwhsQ8fkY1"
   );
  
function groupItems(response, property){
   const reducer = function (groups, item){
      const name= item[property]
      const group = groups[name] || (groups[name] = []);
      group.push(item)
      group.sort(function(a, b) {
         const textA = a.name.toUpperCase();
         const textB = b.name.toUpperCase();
         return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
      return groups;
   }
   return response.data.reduce(reducer, {})
}
const groups= groupItems(response, "domestic");


let domestic = groups.true.map(function(acc){
   return acc;
})
 
console.log("Domestic: ", domestic)

let imported = groups.false.map(function(acc){
   return acc;
})
 
console.log("Imported: ", imported)

console.log("Domestic");
groups.true.forEach((groupDetail) => {
   let name = `${groupDetail.name}`;
   let price = `Price: ${groupDetail.price}`;
   const weight = ()=> {
      if(a=groupDetail.weight){
        return groupDetail.weight
      }else{
          return "N/A";
      }}
      let description = `Description: ${groupDetail.description}`;
      
   console.log(name);
   console.log(price);
   console.log ("Weight: ", weight());
   console.log(description);
 });

 console.log("Imported");
 groups.false.forEach((groupDetail) => {
   let name = `${groupDetail.name}`;
   let price = `Price: ${groupDetail.price}`;
   const weight = ()=> {
      if(a=groupDetail.weight){
        return groupDetail.weight
      }else{
          return "N/A";
      }}
      let description = `Description: ${groupDetail.description}`;
      
   console.log(name);
   console.log(price);
   console.log ("Weight: ", weight());
   console.log(description);
 });


let total= groups.true.reduce(function(total, item){
   return total += item.price;
}, 0)
console.log("Domestic cost : $", total)

let count= groups.false.reduce(function(count, item){
  return count += item.price;
}, 0)
console.log("Imported cost : $", count)


let resNum = groups.true.reduce(function(acc){
   return acc +1;
},0)
 
console.log("Domestic count: ", resNum)


let another = groups.false.reduce(function(acc){
   return acc+1 ;
},0)
console.log("Imported count: ", another)
}




 getCharacters();