exports.index = function(req, res){
  res.render('index', { 
  	title: 'Tech Deland',
  	page_title: 'Home',
  	seo_description: 'Techonology meetup in downtown Deland, FL for graphic designers, web designers, web developers and photographers',
   // speakers: '' //delete speakers: '' for speakers to appear
  });
};