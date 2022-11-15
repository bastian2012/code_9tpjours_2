let voyelle = "aeiouyAEIOUY"
voyelle = voyelle.split("")
let chenn_karakte = "Ou gen yon chenn karaktè, ranvse tout yo san pa gen okenn espas"
chenn_karakte = chenn_karakte.split("")
console.log(chenn_karakte.join(""))
 
for (let i = 1; i < chenn_karakte.length; i++){
    if (voyelle.includes(chenn_karakte[i]))  {
         chenn_karakte[i-1]="*"
} 
}
console.log(chenn_karakte.join(' '))