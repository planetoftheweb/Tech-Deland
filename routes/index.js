var speakersList = [{
	title : "Expectations of entrepreneurship",
	name: "Pam Webber",
	link: "http://www.roarwebdesign.com/",
	img: "images/speakers/speaker_pamwebber.jpg",
	description: "There are lots of resources for entrepreneurs out there, but few of them show you how to harness the power of a peer group, learn to expect the unexpected and rely on valuable business assets you may not consider. Pam Webber, a two tiered Stetson University alumnus, V.P of Strategic Relations and co-owner of Roar Marketing, shows you what it takes to soar through tough challenges and build a great business."
}, {
	title : "Making a maker space",
	name: "Dan Lane",
	link: "#",
	img: "images/speakers/speaker_danlane.jpg",
	description: "One of the things this area needs is more resources for technically minded people. It would be great to have a space to meet, learn and have resources like drill presses, 3-d printers and be able to learn more about technology in a Maker/Hacker space. Dan is organizing a group that wants to bring a maker/hacker space into the area. He'll talk to us about the potential location, features and how you can join the effort."
}, {
	title : "Android Development with Python",
	name: "Ben Hosmer",
	link: "http://www.brevardtech.org",
	img: "images/speakers/speaker_benhosmer.jpg",
	description: "Android mobile application development is the realm of Java programmers right? No way! If you're a Python nerd like me, you'd rather write in beautiful Python than Java any day. I recently had a need to develop a fairly simple android application and found the SL4A, (Scripting Layer for Android) let me run Python on android. This quick presentation will tell you what you need to do to get up and running quickly. I'll demonstrate a simple application in less than ten lines of Python that reads a UPC code."
}];

var vendorList = [{
	name: "Cafe DaVinci's",
	link: "http://www.cafedavincideland.com",
	img: "images/sponsors/cafedavinci.png",
	mapURL: "http://maps.google.com/maps?q=112+W+Georgia+Ave+Deland+FL",
	address: "112 West Georgia Avenue"
}, {
	name: "Deland Abbey",
	link: "http://www.delandabbey.com/",
	img: "images/sponsors/abbey.png",
	mapURL: "http://maps.google.com/maps?q=117+North+Woodland+Boulevard+Deland+FL",
	address: "117 North Woodland Boulevard"
}, {
	name: "BrickHouse Grill",
	link: "http://www.brickhousegrill.com/",
	img: "images/sponsors/cafedavinci.png",
	mapURL: "http://maps.google.com/maps?q=142+North+Woodland+Boulevard+Deland+FL",
	address: "142 North Woodland Boulevard"
}];

var nextMeeting = {
	date: 'Thursday, June 27th',
	time: '6-9pm',
  where: vendorList[1]
};

var socialMedia = [{
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
}];

exports.index = function(req, res){
  res.render('index', { 
  	title: 'Tech Deland',
  	speakers: speakersList,
  	meeting: nextMeeting,
  	social: socialMedia
  });
};