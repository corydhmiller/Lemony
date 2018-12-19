<?php get_header(); ?>

	    <?php while ( have_posts() ) : the_post(); ?>
			<?php

			if(!empty(get_the_content())) {

				the_content();
			} else {
			$my_id = 385;
			$post_id_5369 = get_post($my_id);
			$content = $post_id_5369->post_content;
			$content = apply_filters('the_content', $content);
			$content = str_replace(']]>', ']]>', $content);
			echo $content;
			}

			?>
	    <?php endwhile; ?>
	</div>

<?php edit_post_link('<small>Edit</small>','',''); ?>
<?php get_footer(); ?>