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
	<nav>
		<div class="sidebar__nav">
			<?php
			// To be honest, I have no idea why all of these variables are here, but it's how it goes.
			$menu_name = 'sidebar-menu';
			$locations = get_nav_menu_locations();
			$menu = wp_get_nav_menu_object( $locations[ $menu_name ] );
			$menuitems = wp_get_nav_menu_items( $menu->term_id, array( 'order' => 'DESC' ) );

			// First what we need to do is set up an array of objects, where the parent object has a new key of children.
			// It's basically just taking the full list, creating an array with the parent objects, then setting a new key:value of children and those objects

			// Here's the parent array
			$sidebarPosts = [];
			// Initial foreach loop to order everything correctly
			foreach ($menuitems as $item) {
				// Store parent objects in the $parent array if the menu_item_parent = 0
				if (!$item->menu_item_parent) {
					// Add this to $sidebarPosts as a new parent menu item
					array_push($sidebarPosts, $item);
					// Create a new key of children with a value of a blank array
					$item->children = [];
					// Go to the next iteration of the loop
					continue;
				}
				// If it's not a parent, do a quick foreach to find the correct parent ID of this item
				foreach ($sidebarPosts as $parent) {
					// If the parent ID matches the item's parent ID...
					if ($parent->ID == $item->menu_item_parent) {
						// Push this item object into the children array
						array_push($parent->children, $item);
						// Continue on the loop
						continue;
					}
				}

			}
			// Now the main loop
			foreach ($sidebarPosts as $item) {
				// If this ID is a top level parent, add the section beginning here.
				?>
					<div class="sidebar__section">
						<div class="sidebar__section--toggle<?php if ($item->object_id == wp_get_post_parent_id( $post->ID )) { echo ' sidebar__section--toggled';} ?>">
							<?php echo $item->title; ?>
						</div>
							<div class="sidebar__section--hidden" <?php if ($item->object_id == wp_get_post_parent_id( $post->ID )){ echo 'style="display:block;"';} ?>>
								<ul>
								<?php
								// Now for every child, run a foreach loop that puts them all out there.
								foreach ($item->children as $child) {
									?>
									<li <?php if ($child->url == get_permalink()) { echo 'class="sidebar__current-page"'; } ?>>
										<a href="<?php echo $child->url; ?>">
											<?php echo $child->title; ?>
										</a>
									</li>
									<?php
								} // End children foreach ?>
								</ul>
							</div>
						</div>
				<?php
			}
			?>
		</nav>

		<div class="sidebar__footer">
			<!-- <div class="sidebar__footer-section">
				<a href="#">Shop</a>
			</div>
			<div class="sidebar__footer-section">
				<a href="#">Get Help</a>
			</div>-->
		</div>
	</aside>