//woops cheated a bit her and made a json file
const input = require("./input.json")


const result = input.reduce((result, num, index, source) => {

  source.forEach(val => {

    if((val + num) == 2020) {
      console.log("2020 found")
      console.log(val)
      console.log(num)

      console.log(val * num)
      if (!result) {
        result = val * num
      }

    }
  })

  return result
}, undefined)


console.log(result)
