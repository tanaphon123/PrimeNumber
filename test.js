const prime = (number) => {
    let data = []
    for (let i=1; i<=number; i++) {
        i === 1 ? "" : i%2 === 0 ? "" : i%i === 0 ? data.push(i) : ""
    } const result = `เลขจำนวนเฉพาะของ ${number} มีจำนวนทั้งหมด ${data.length} ${data.length === 0 ? ``:`\nและมีจำนวนดังนี้ ${data}`}`
    return result; 
}

console.log(prime(100));


