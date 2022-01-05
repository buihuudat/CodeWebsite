class CardController {
  
  card(req, res) {
    res.render('card')
  }
  showCard(req, res) {
    res.send('New card')
  }

}

export default new CardController;