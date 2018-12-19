<?php
/*
Template Name: Search Page
*/
?>

<?php get_header(); ?>
        <div class="row">
            <div class="col-xs-12 binky padding--l">
                <div class="flex-container flex-center">
                    <div class="block block-copy">
                        <?php get_search_form(); ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php include 'sidebar.php' ?>
</div>
<?php edit_post_link('<small>Edit</small>','',''); ?>
<?php get_footer(); ?>