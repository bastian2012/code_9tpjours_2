let a = 10, b = 20
let enteval = []
for (let i = a; i <= b; i++) {
 enteval.push(i)
    
}
console.log(` nomb nn enteval ${a} ak ${b} se : \n ${enteval.join(" ")}`)
let total_pair = 0
let nomb_pair = []
for (let i = 0; i < enteval.length; i++) {
     if (enteval[i]%2==0) {
        total_pair+=enteval[i]
        nomb_pair.push(enteval[i])
        
     }
}
console.log(` nomb pe yo se : \n${nomb_pair.join(" ")} \nki bay au total  : ${total_pair}`)