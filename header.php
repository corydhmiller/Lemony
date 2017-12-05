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
				<?php bloginfo('sitename'); ?> <?php wp_title(); ?>
				</title>
				<!-- Required meta tags -->
				<meta charset="<?php bloginfo( 'charset' ); ?>">
				<meta name="viewport" content="width=device-width, initial-scale=1">
				<link rel="profile" href="http://gmpg.org/xfn/11">
				<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
				
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
				<link rel="manifest" href="/favicon/manifest.json">
				<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#252529">
				<meta name="theme-color" content="#fcfcfd">
				<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/css/style.css">
				<?php wp_head(); ?>
			</head>
			<body>
				<header class="header header--visibility">
					<div class="header__menu">
						<div class="menu__button">
							<div class="button button--yellow button--menu">Menu</div>
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