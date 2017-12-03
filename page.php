<?php get_header(); ?>

<div class="wrapper">
	<div class="content-wrapper content--sidebar">    
	    <?php while ( have_posts() ) : the_post(); ?>
	        <?php the_content();?>
	    <?php endwhile; ?>
	</div>
	<aside class="sidebar sidebar--visible"></aside>
</div>

<?php get_footer(); ?>