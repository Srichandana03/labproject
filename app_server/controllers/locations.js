const homelist = (req, res) => {
  res.render('index', { title: 'My First Mean Project',
    subtitle: 'Srichandana 23EG107E57'
   });
};
const locationInfo = (req, res) => {
  res.render('index', { title: 'Location Info' });
};
const addReview = (req, res) => {
  res.render('index', { title: 'Add Review' });
};
module.exports = {
  homelist,
  locationInfo,
  addReview
};