const input = require("./input.json")


const result = input.reduce((result, a, index, source) => {

  source.forEach(b => {

    source.forEach(c => {
      if((a + b + c) == 2020) {
        console.log("2020 found")
        console.log(a)
        console.log(b)
        console.log(c)

        console.log(a * b * c)
        if (!result) {
          result = a * b * c
        }

      }
    })

  })

  return result
}, undefined)


console.log(result)
