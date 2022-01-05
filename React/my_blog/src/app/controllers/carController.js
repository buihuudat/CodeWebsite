class CarController {
  carousel(req, res) {
    res.render('carousel')
  }
  showCarousel(req, res) {
    res.send('New carousel')
  }
}

export default new CarController;