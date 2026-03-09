
const sum = (a) => {
    return (b) => {
        if (b === undefined) return a;
        return sum(a + b)
    }
}

console.log(sum(2)(3)(4)())

