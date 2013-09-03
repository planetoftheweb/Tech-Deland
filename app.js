var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//Locals
app.locals({
  vendorList : [{
    name: "Cafe DaVinci's",
    link: "http://www.cafedavincideland.com",
    img: "images/sponsors/cafedavinci.png",
    mapURL: "http://maps.google.com/maps?q=112+W+Georgia+Ave+Deland+FL",
    address: "112 West Georgia Avenue"
    },{
    name: "Deland Abbey",
    link: "http://www.delandabbey.com/",
    img: "images/sponsors/abbey.png",
    mapURL: "http://maps.google.com/maps?q=117+North+Woodland+Boulevard+Deland+FL",
    address: "117 North Woodland Boulevard"
    },{
    name: "BrickHouse Grill",
    link: "http://www.brickhousegrill.com/",
    img: "images/photos/brickhousephoto.jpg",
    mapURL: "http://maps.google.com/maps?q=142+North+Woodland+Boulevard+Deland+FL",
    address: "142 North Woodland Boulevard"
  }]
});

app.locals({
  speakers: [
  {
    title : "Show n' Tell",
    description: "Be prepared to share any cool tech you've been playing around with. Got a new MakerBot tearing up your house? Learned about a new JavaScript library or cool Illustrator shortcut? Let's learn from each other."
  }, {
  title : "The Creative Process: Ideas, sketches and artwork",
  name: "Martha Garzon",
  link: "http://www.marthagarzon.com/",
  img: "images/speakers/speaker_marthagarzon.jpg",
  description: "In this talk, Martha Garzon will share her creative process for commercial and personal illustration projects. Discover how she gets inspired and her techniques to transform ideas into artwork. Martha Garzon is a creative director, educator & web/graphic designer. After studying visual arts at the National University in Bogota, she moved to the US where she acquired a B.A. in Digital Arts from Stetson University. She has been teaching multimedia, web development, photography and design since 2004 and currently works at the Digital Arts Program at Stetson University and at M5 Design Studio."
  }, {
    title : "When art goes large",
    name: "Courtney Canova",
    link: "http://www.kellycanovaphotography.com/",
    img: "images/speakers/speaker_courtneycanova.jpg",
    description: "One distinguishing feature of Downtown Deland are the iconic murals painted throughout the area. These projects aren't a simple endeavour and require planning and careful execution. Award winning artist, photographer and teacher Courtney Canova who painted these murals takes us through his creative process and shows us how tackling a literally huge project is best done one step at a time."
  }]
});

app.locals({
  social : [{
    shortname : "twitter",
    img : "images/socialmedia/twitter.png",
    url : "http://www.twitter.com/barcampdeland"
  },{
    shortname : "facebook",
    img : "images/socialmedia/facebook.png",
    url : "http://www.facebook.com/barcampdeland"
  },{
    shortname : "meetup",
    img : "images/socialmedia/meetup.png",
    url : "http://www.meetup.com/Tech-Deland-bringing-together-people-technology/"
  }]
});

app.locals({
  meeting : {
    date: 'Wednesday, September 25th',
    time: '6-9pm',
    where: app.locals.vendorList[1] // change this to reflect venue
  }
});

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
