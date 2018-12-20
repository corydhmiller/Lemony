<!doctype html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
	<![endif]-->
<!--[if IE 8]>
	<html class="ie ie8" <?php language_attributes(); ?>>
		<![endif]-->
<!--[if !(IE 7) | !(IE 8) ]>
		<!-->
<html <?php language_attributes(); ?> class="no-js">

<head>
	<title>
		<?php wp_title(); ?>
	</title>
	<!-- Required meta tags -->
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<?php $featured_img_url = get_the_post_thumbnail_url(get_the_ID(),'full'); ?>
	<meta property="og:image" content="<?php echo $featured_img_url; ?>" />
	<meta name="twitter:image" content="<?php echo $featured_img_url; ?>" />
	<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
	<link rel="manifest" href="/favicon/manifest.json">
	<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#252529">
	<meta name="theme-color" content="#fcfcfd">
	<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/css/style.css">
	<?php wp_head(); ?>
</head>

<body class="no-js">
	<header class="header header--visibility">
		<div class="header__menu">
			<div class="menu__button">
				<div class="button button--yellow button--menu" data-action="toggleMenu">Menu</div>
			</div>
		</div>
		<div class="header__logo">
			<div class="header__logo__image">
				<a href="<?php echo get_site_url() ?>">
					<img src="<?php echo get_template_directory_uri(); ?>/img/vlogology_logo.svg" />
				</a>
			</div>
		</div>

	</header>
	<div class="wrapper">
		<div class="content-wrapper">
			<?php
				$post_id = get_the_ID();
				$include_header = get_post_meta($post_id, 'include_header', true);
				$header_image = get_post_meta($post_id, 'header_image', true);
				if ($include_header !== 'false') {
			?>
			<div class=<?php
			echo '"row--dark';
			if (!empty($header_image)) {
				echo ' bg--cover bg--center padding--xl gradient gradient--black--bottom" style="background-image:url(\'' . $header_image . '\');';
			}
			echo '"';
			?>>
				<div class="row">
					<div class="col-xs-12 ">
						<div class="flex-container flex-center">
							<div class="page-header">
								<h1>
									<?php echo get_the_title(); ?>
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			<?php } ?>