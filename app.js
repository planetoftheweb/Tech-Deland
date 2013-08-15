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
  speakers: [{
  title : "The rise of Instructional Design ",
  name: "Rick Short",
  link: "http://www.redbubble.com/people/scenicearth",
  img: "images/speakers/speaker_rickshort.jpg",
  description: "Instructional Design is an area of technology experiencing rapid growth. Rick Short, a graduate student studying Instructional design and 3D Animation with 21 years of IT experience building web, e-commerce and client server applications talks about how schools, businesses and the private sector are using Instructional Design to help their employees work harder, faster and more efficiently, plus some of the tools of the trade."
  }, {
    title : "Show n' Tell",
    description: "A new segment. Be prepared to share any cool tech you've been playing around with. Got a new MakerBot tearing up your house? Learned about a new JavaScript library or cool Illustrator shortcut? Let's learn from each other."
  }, {
    title : "What's in an app?",
    name: "Mark Hawks",
    link: "http://www.brevardtech.org",
    img: "images/speakers/speaker_markhawks.png",
    description: "Learn some of the differences between iOS, Android etc. Mark Hawks, an Apple Consultant and iOS developer shows you what it takes to get into the App store, start developing iOS apps, where to get started...plus a little Xcode."
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
    date: 'Thursday, August 22nd',
    time: '6-9pm',
    where: app.locals.vendorList[2] // change this to reflect venue
  }
});

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
