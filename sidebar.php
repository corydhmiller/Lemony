<aside class="sidebar">
	<div class="sidebar__close">
		<div class="menu__button">
			<div class="button button--yellow button--menu button--inline">Close</div>
		</div>
	</div>
	<div class="sidebar__logo">
		<div class="sidebar__logo__image">
			<a href="<?php echo get_site_url() ?>">
				<img src="<?php echo get_template_directory_uri(); ?>/img/vlogology_logo.svg" />
			</a>
		</div>
	</div>
	<?php
	$menu_name = 'sidebar-menu';
	$locations = get_nav_menu_locations();
	$menu = wp_get_nav_menu_object( $locations[ $menu_name ] );
	$menuitems = wp_get_nav_menu_items( $menu->term_id, array( 'order' => 'DESC' ) );
	?>
	<nav>
		<div class="sidebar__nav">
			<?php
			$count = 0;
			$submenu = false;
			$pageparent = 0;
			foreach( $menuitems as $item ):
			$link = $item->url;
			$title = $item->title;
			// item does not have a parent so menu_item_parent equals 0 (false)
			if ( !$item->menu_item_parent ):
			// save this id for later comparison with sub-menu items
			$parent_id = $item->ID;
			$pageparent = $item->object_id;
			?>
			<div class="sidebar__section">
				<div class="sidebar__section--toggle<?php if ($item->object_id == wp_get_post_parent_id( $post_ID )) { echo ' sidebar__section--toggled';} ?>">
					<?php echo $title; ?>
				</div>
				<?php
			  endif;
				if ( $parent_id == $item->menu_item_parent ):
				  if ( !$submenu ): $submenu = true; ?>
				<div class="sidebar__section--hidden" <?php if ($pageparent == wp_get_post_parent_id( $post_ID )){ echo 'style="display:block;"';} ?>>
					<ul>
						<?php endif; ?>
						<li <?php if ($link == get_permalink()) { echo 'class="sidebar__current-page"'; } ?>>
							<a href="<?php echo $link; ?>">
								<?php echo $title; ?>
							</a>
						</li>
						<?php if ( $menuitems[ $count + 1 ]->menu_item_parent != $parent_id && $submenu ): ?>
					</ul>
				</div>
				<?php $submenu = false; endif;
				      endif;
				      if ( $menuitems[ $count + 1 ]->menu_item_parent != $parent_id ): ?>
			</div>
			<?php $submenu = false; endif;
			      $count++; endforeach; ?>
		</nav>
		
		<div class="sidebar__footer">
			<div class="sidebar__footer-section">
				<a href="#">Shop</a>
			</div>
			<div class="sidebar__footer-section">
				<a href="#">Get Help</a>
			</div>
		</div>
	</aside>