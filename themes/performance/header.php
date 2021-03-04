<?php
/**
 * The template for displaying the header.
 *
 * @package TenUpTheme
 */

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<?php wp_head(); ?>
	</head>
	<body <?php body_class(); ?>>
		<?php wp_body_open(); ?>
		<h1><?php bloginfo( 'name' ); ?></h1>
		<div class="slideshow"></div>
		<div class="accordion"></div>
		<div class="modal"></div>
		<div class="navigation"></div>
		<div class="sticky"></div>
		<div class="tabs"></div>
		<div class="time"></div>
		<div class="is-jquery"></div>
		<div class="chart"></div>
