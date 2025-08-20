const index = (req, res) => {
  res.render('index', { title: 'WPM lab' });
};

module.exports = {
  index
};