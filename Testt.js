function prime(number) {
    let data = []
    for (let i=1; i<=number; i++) {
        if (i===1){
            ""
        } else if (i%2===0) {
            ""
        } else if (i%i===0) {
            data.push(i)
        } 
    } 
    console.log("จำนวนเฉพาะของเลข "+number+" มีจำนวนทั้งหมด "+data.length+" ตัว")
    console.log("และมีจำนวนดังนี้ "+String(data)) 
}

prime(100)