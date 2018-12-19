<?php
/*
Template Name: Search Page
*/
?>

<?php get_header(); ?>
        <div class="row--dark">
            <div class="row">
                <div class="col-xs-12 ">
                    <div class="flex-container flex-center">
                        <div class="page-header">
                            <h1>
                                Search Results
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12  padding--l">
                <div class="flex-container flex-center">
                    <div class="block block-copy">
                        <?php if ( have_posts() ) { ?>

            <ul>

            <?php while ( have_posts() ) { the_post(); ?>

               <li>
                 <h3><a href="<?php echo get_permalink(); ?>">
                   <?php the_title();  ?>
                 </a></h3>
                 <?php echo substr(the_content(), 0,200); ?>
                 <div class="h-readmore"> <a href="<?php the_permalink(); ?>">Read More</a></div>
               </li>

            <?php } ?>

            </ul>

           <?php echo paginate_links(); ?>

        <?php } ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php include 'sidebar.php' ?>
</div>
<?php edit_post_link('<small>Edit</small>','',''); ?>
<?php get_footer(); ?>