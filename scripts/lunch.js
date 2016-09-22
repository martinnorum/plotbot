module.exports = (robot) => {
  const restaurants = [
    'Vappe',
    'Sushi o glass',
    'Texas',
    'Gnällgrottan ... (sadpanda) ',
    'Wiggo',
    'Dumplings'
  ]

  const randomRestaurant = (res) => {
    res.send(
      `${res.random(restaurants)}?`
    )
  }

  robot.hear(/mat/i, randomRestaurant)
  robot.hear(/lunch/i, randomRestaurant)
}
