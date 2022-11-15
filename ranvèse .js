let chenn_karakte = "Ayibobo Ayiti";
let table = []
for (let i = (chenn_karakte.length)-1; i >=0 ; i--) {
    if (chenn_karakte[i] == " ")
    {
        table.push("")
        
    }
    else
     table.push(chenn_karakte[i])
    
}
console.log(table.join(""))