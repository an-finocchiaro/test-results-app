class TestController {
  async test_results(req, res) {
    res.status(200);
    res.render('test_results');
  }
}

module.exports = new TestController();