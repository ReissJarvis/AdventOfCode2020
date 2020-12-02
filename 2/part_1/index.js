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
      min,
      max,
      password: (password || '').trim()
    }
  }).filter(p => {
    console.log(p)
    const matcher = new RegExp(p.criteria, 'g')
    const amount = (p.password.match(matcher) || []).length
    return amount >= p.min && amount <= p.max
  })

  console.log(result.length)
})
