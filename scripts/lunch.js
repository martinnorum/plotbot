module.exports = (robot) => {
  const resturants = [
    'Vappe',
    'Sushi o glass',
    'Texas',
    'Gnällgrottan',
    'Wiggo',
    'Dumplings'
  ]

  robot.hear(/lunch/i, (res) => {
    res.send(
      `${res.random(resturants)}?`
    )
  })
}
