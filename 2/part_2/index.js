const fs = require('fs')

fs.readFile("./input.txt", 'utf-8', (err, contents) => {
  const passwordLines = contents.trim().split('\r\n')
  const result = passwordLines.map(p => {
    const [meta, password] = p.split(':')

    console.log(meta)
    console.log(password)

    const [minMax, char] = meta.split(' ')
    const [min, max] = minMax.split('-')
    return {
      criteria: char,
      min: +min,
      max: +max,
      password: (password || '').trim()
    }
  }).filter(p => {
    const firstPosPass = p.password[p.min - 1] == p.criteria
    const secondPosPass = p.password[p.max - 1] == p.criteria

    return (firstPosPass || secondPosPass) && !(firstPosPass && secondPosPass)
  })

  console.log(result.length)
})
