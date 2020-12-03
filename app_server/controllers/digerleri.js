const hakkinda = function(req, res, next) {
  res.render('hakkinda', 
    { 
      title: 'Hakkında',
      'footer' : 'Ayşenur Demir'
    }
  );
}

module.exports = {
  hakkinda
}