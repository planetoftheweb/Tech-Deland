<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Tech Deland</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="_/css/bootstrap.css" rel="stylesheet">
    <link href="_/css/mystyles.css" rel="stylesheet">
		<link href='http://fonts.googleapis.com/css?family=Bree+Serif|Merriweather:400,300,700,900' rel='stylesheet' type='text/css'>
  </head>

  <body>

  	<header class="group">
  		<div id="branding">
  			<a href="index.php"><img src="images/logos/techdelandlogo_wide.svg" alt="Tech Deland logo"></a>
  		</div>
  		<div class="socialmediaicons desktop"></div>
  	</header>

  	<section id="hero" class="group"></section>

		<section id="content" class="row-fluid">
		  <div id="main" class="span8">
		  	<article>
	  			<h1>Welcome</h1>
	  			<p>Tech Deland is a group of technology enthusiasts in the Downtown Deland area meeting once a month to encourage a better understanding of technology. We do this by sharing what we know about technology with others.</p>
	  			<p>The group encourages learning in all types of technology including Photography, Graphic Design, Web Design, Web Development and more. We dream of Downtown Deland one day becoming a place that's well known for a thriving tech scene.</p>

		  	<article>
	  			<h2>Get Busy!</h2>
	  			<p>If you want to keep up with what's going on with the group, <a href="http://www.meetup.com/Tech-Deland-bringing-together-people-technology/">join our meetup group</a>, <a href="http://www.twitter.com/barcampdeland">follow us on twitter</a> or sign up for our email list on the sidebar to the right. If you're in facebook, you can also <a href="http://www.facebook.com/barcampdeland">join our FaceBook group</a>.</p>
		  	</article>

				<h2>Who should come?</h2>
				<ul>
					<li>Anybody interested in technology and the creative industry</li>
					<li>Programmers, Designers, Photographers, Artists, Marketers, Entrepreneurs, Writers</li>
					<li>If you're interested in meeting and making a connection with others in the local tech industry.</li>
					<li>If you have something to teach or learn from others related to technology.</li>
				</ul>

	  			<h2>BarCamp Anyone?</h2>
	  			<p>Once a year in October, we flock to different venues in the downtown area and put together a BarCamp Event, with lots of speakers, demos and fun. This year's BarCamp event will be on Saturday, October 5th. You can go to the <a href="http://barcampdeland.org">BarCamp Deland</a> website to learn more about that event.</p>
		  	</article>

		  </div>

		  <aside class="span4">

		  	<article>
	  			<h2>Next meeting</h2>
	  			<a href="http://www.delandabbey.com/"><img src="images/sponsors/abbey.png"></a>
	  			<p>Our next meeting will be May 23rd,<br />
	  			6:30-8:30 p.m. at The Abbey.<br />
					<strong>Map:</strong> <a href="http://maps.google.com/maps?q=117+North+Woodland+Boulevard+Deland+FL">117 North Woodland Boulevard</a>
	  			</p>
					<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s); js.id=id;js.async=true;js.src="https://secure.meetup.com/971750872209871557/script/api/mu.btns.js?id=gjhkfsotrgdnfudgl9orq9q9jm";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","mu-bootjs");</script>

					<a href="http://www.meetup.com/Tech-Deland-bringing-together-people-technology/events/117161532/" data-event="117161532" class="mu-rsvp-btn">RSVP</a>

		  	</article>

		  	<article>
	  			<h2>Join our mailing list</h2>
	  			<p>Get notifications of our meetings and events. Sign up to our Mailing list. And don't worry, signing up for this list will also notify you about the <a href="http://barcampdeland.org">BarCamp Deland</a> annual event.</p>

					<!-- Begin MailChimp Signup Form -->
					<link href="http://cdn-images.mailchimp.com/embedcode/slim-081711.css" rel="stylesheet" type="text/css">
					<div id="mc_embed_signup">
					<form action="http://barcampdeland.us5.list-manage2.com/subscribe/post?u=8a6e060c4c49d4fa2a3a904c3&amp;id=1703239c8f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
						<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
						<div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
					</form>
					</div>
					<!--End mc_embed_signup-->
		  	</article>

			<h2>Parking</h2>
			<p>Parking is available in many places throughout the Downtown Deland area. Click on the button for a map.</p>
			<a class="btn btn-warning" data-toggle="modal" href="#parking" id="parkingbtn" >Parking</a>

			<div class="modal hide fade" id="parking">
			  <div class="modal-body">
			    <p><img src="/images/misc/parking-downtowndeland.png" /></p>
			  </div>
			</div>

		  </aside>
		</section><!-- content -->

		<footer class="group">
			<section>
	  		<div class="socialmediaicons"></div>
			</section>
     </footer>

    </div><!-- /.container -->

	    <!-- _Underscore templates -->

	    <script type="text/template" id="socialicons_tmp">
	    <span class="title">join the movement: </span>
		  <ul class="group">
				<% _.each( socialmedia, function(item){ %>
		      <li><a href="<%-item.url%>"><img class="icon" src="images/socialmedia/<%-item.shortname%>.png" alt="<%-item.shortname%> icon" /></a></li>
				<% }); %>
		  </ul>
		</script>

		<script src="_/components/js/jquery.js"></script>
		<script src="_/components/js/bootstrap-transition.js"></script>
		<script src="_/components/js/bootstrap-alert.js"></script>
		<script src="_/components/js/bootstrap-modal.js"></script>
		<script src="_/components/js/bootstrap-dropdown.js"></script>
		<script src="_/components/js/bootstrap-scrollspy.js"></script>
		<script src="_/components/js/bootstrap-tab.js"></script>
		<script src="_/components/js/bootstrap-tooltip.js"></script>
		<script src="_/components/js/bootstrap-popover.js"></script>
		<script src="_/components/js/bootstrap-button.js"></script>
		<script src="_/components/js/bootstrap-collapse.js"></script>
		<script src="_/components/js/bootstrap-carousel.js"></script>
		<script src="_/components/js/bootstrap-typeahead.js"></script>
		<script src="_/components/js/bootstrap-affix.js"></script>
		<script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.3/underscore-min.js"></script>
    <script src="_/js/myscript.js"></script>
  </body>
</html>
