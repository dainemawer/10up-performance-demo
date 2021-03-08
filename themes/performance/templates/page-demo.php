<?php

/**
 * Template Name: Demo
 *
 * @package TenUpTheme
 */

get_header(); ?>

<div class="box">
	<h3 class="subtitle">Accordion</h3>
	<div class="accordion">
		<button class="accordion-header" type="button">Accordion Header</button>
		<div class="accordion-content">
			<h2 class="accordion-label">Accordion Heading</h2>
			<p>here the content of 1st tab <a href="#">link</a></p>
		</div> <!-- //.accordion-content -->

		<button class="accordion-header" type="button">Accordion Header</button>
		<div class="accordion-content">
			<h2 class="accordion-label">Accordion Heading</h2>
			<p>here the content of 2nd tab <a href="#">link</a></p>
		</div> <!-- //.accordion-content -->

		<button class="accordion-header" type="button">Accordion Header</button>
		<div class="accordion-content">
			<h2 class="accordion-label">Accordion Heading</h2>
			<p>here the content of 3rd tab <a href="#">link</a></p>
		</div> <!-- //.accordion-content -->

		<button class="accordion-header" type="button">Accordion Header</button>
		<div class="accordion-content">
			<h2 class="accordion-label">Accordion Heading</h2>
			<p>here the content of 4th tab <a href="#">link</a></p>
		</div> <!-- //.accordion-content -->

	</div> <!-- //.accordion -->
</div>

<div class="box">
	<h3 class="subtitle">Tabs</h3>
	<div class="tabs">
		<div class="tab-control">
			<ul class="tab-list" role="tablist">
				<li class="tab-item"><a href="#js-tab1" role="tab" aria-controls="js-tab1">View Tab 1</a></li>
				<li class="tab-item"><a href="#js-tab2" role="tab" aria-controls="js-tab2">View Tab 2</a></li>
				<li class="tab-item"><a href="#js-tab3" role="tab" aria-controls="js-tab3">View Tab 3</a></li>
				<li class="tab-item"><a href="#js-tab4" role="tab" aria-controls="js-tab4">View Tab 4</a></li>
			</ul>
		</div><!-- //.tab-control -->

		<div class="tab-group">

			<div class="tab-content" id="js-tab1" role="tabpanel">
				<h2>Tab 1 Content</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</div><!-- //.tab-content -->

			<div class="tab-content" id="js-tab2" role="tabpanel">
				<h2>Tab 2 Content</h2>
				<p>In tincidunt tempor risus gravida tincidunt.</p>
			</div><!-- //.tab-content -->

			<div class="tab-content" id="js-tab3" role="tabpanel">
				<h2>Tab 3 Content</h2>
				<p>Suspendisse eget commodo erat. Donec a metus fringilla, pharetra ipsum nec, aliquet felis. </p>
			</div><!-- //.tab-content -->

			<div class="tab-content" id="js-tab4" role="tabpanel">
				<h2>Tab 4 Content</h2>
				<p>Aenean eu nibh nisl. Nulla ornare condimentum erat, et rhoncus urna euismod a.</p>
			</div><!-- //.tab-content -->

		</div><!-- //.tab-group -->

	</div><!-- //.tabs -->
</div>

<div class="box">
	<h3 class="subtitle">Modal</h3>
	<button class="button is-primary" type="button" data-a11y-dialog-show="my-dialog">Show Modal</button>
</div>

<div class="box">
	<h3 class="subtitle">Time</h3>
	<p id="clock"></p>
</div>

<div class="box">
	<h3 class="subtitle">Chart</h3>
	<canvas id="myChart" width="400" height="400"></canvas>
</div>

<div class="box">
	<h3 class="subtitle">Slider</h3>
	<div class="my-slider">
		<div>
			<img src="https://source.unsplash.com/1600x900/?tech" alt="" loading="lazy" />
		</div>
		<div>
			<img src="https://source.unsplash.com/1600x900/?tech" alt="" loading="lazy" />
		</div>
		<div>
			<img src="https://source.unsplash.com/1600x900/?tech" alt="" loading="lazy" />
		</div>
	</div>
</div>

<div class="box">
	<h3 class="subtitle">API</h3>
	<div id="posts"></div>
</div>

<?php
get_footer();
