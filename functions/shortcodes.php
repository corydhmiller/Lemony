<?php
function vlogology_register_menu() {
  register_nav_menu('sidebar-menu',__( 'Sidebar Menu' ));
}
add_action( 'init', 'vlogology_register_menu' );

function cleanContent($content) {
  $content = apply_filters('the_content', $content);
  $content = str_replace(']]>', ']]&gt;', $content);
  return $content;
}

// custom menu example @ https://digwp.com/2011/11/html-formatting-custom-menus/
function clean_custom_menus() {
    $menu_name = 'sidebar-menu';
    if (($locations = get_nav_menu_locations()) && isset($locations[$menu_name])) {
        $menu = wp_get_nav_menu_object($locations[$menu_name]);
        $menu_items = wp_get_nav_menu_items($menu->term_id);

        $menu_list = '<div class="sidebar__nav">' ."\n";
        $menu_list .= "\t\t\t\t". '<ul>' ."\n";
        foreach ((array) $menu_items as $key => $menu_item) {
            $title = $menu_item->title;
            $url = $menu_item->url;
            $menu_list .= "\t\t\t\t\t". '<li><a href="'. $url .'">'. $title .'</a></li>' ."\n";
        }
        $menu_list .= "\t\t\t\t". '</ul>' ."\n";
        $menu_list .= "\t\t\t". '</div>' ."\n";
    } else {
        // $menu_list = '<!-- no list defined -->';
    }
    echo $menu_list;
}

function vlogology_newsletter_signup() {
return '<script src="https://assets.convertkit.com/assets/CKJS4.js?v=21"></script>
<div class="ck_form_container ck_inline" data-ck-version="6">
    <div class="ck_form ck_naked">
        <div class="ck_form_fields">
            <div id="ck_success_msg" style="display:none;">
                <p>Success! Now check your email to confirm your subscription.</p>
            </div>
            <!--  Form starts here  -->
            <form id="ck_subscribe_form" class="ck_subscribe_form" action="https://app.convertkit.com/landing_pages/287935/subscribe" data-remote="true">
                <input type="hidden" value="{&quot;form_style&quot;:&quot;naked&quot;,&quot;embed_style&quot;:&quot;inline&quot;,&quot;embed_trigger&quot;:&quot;scroll_percentage&quot;,&quot;scroll_percentage&quot;:&quot;70&quot;,&quot;delay_seconds&quot;:&quot;10&quot;,&quot;display_position&quot;:&quot;br&quot;,&quot;display_devices&quot;:&quot;all&quot;,&quot;days_no_show&quot;:&quot;15&quot;,&quot;converted_behavior&quot;:&quot;show&quot;}" id="ck_form_options">
                <input type="hidden" name="id" value="287935" id="landing_page_id">
                <input type="hidden" name="ck_form_recaptcha" value="" id="ck_form_recaptcha">
                <div class="ck_errorArea">
                    <div id="ck_error_msg" style="display:none">
                        <p>There was an error submitting your subscription. Please try again.</p>
                    </div>
                </div>
                <div class="ck_control_group ck_email_field_group">
                    <label class="ck_label" for="ck_emailField" style="display: none">Your best email</label>
                    <input type="text" name="first_name" class="ck_first_name" id="ck_firstNameField" placeholder="First Name">
                    <input type="email" name="email" class="ck_email_address" id="ck_emailField" placeholder="Your best email" required>
                </div>
                <button class="button button--yellow subscribe_button ck_subscribe_button btn fields" id="ck_subscribe_button">
                Let&#x27;s Go!
                </button>
                <div class="ck_control_group ck_captcha2_h_field_group ck-captcha2-h" style="position: absolute !important;left: -999em !important;">
                    <input type="text" name="captcha2_h" class="ck-captcha2-h" id="ck_captcha2_h" placeholder="We use this field to detect spam bots. If you fill this in, you will be marked as a spammer.">
                </div>
            </form>
        </div>
    </div>
</div>
';
}
add_shortcode('vlogology-newsletter', 'vlogology_newsletter_signup');

function v_row($atts, $content) {
  $atts = shortcode_atts( array(
        'class' => null
    ), $atts);
  $content = preg_replace( "/\[\/column\](\<br \/\>|\<\/p\>.?\<p\>).?\[column/s", '[/column][column', $content );
  $classes = '';

  if ($atts['class'] !== null) {
    $classes = " " . $atts['class'];
  }
  return '<div class="row'. $classes .'">' . do_shortcode( $content ) . '</div>';

}
add_shortcode('row', 'v_row');

function v_row_dark($atts, $content) {
  return '<div class="row--dark">' . do_shortcode( $content ) . '</div>';

}
add_shortcode('row--dark', 'v_row_dark');

function v_column( $atts, $content = null) {
    $atts = shortcode_atts( array(
        'small' => null,
        'medium' => null,
        'large' => null,
        'class' => null,
        'padding' => null,
        'margin' => null
    ), $atts);

    $class = '';

    if ($atts['class'] !== null) {
      $class = ' ' . $atts['class'];
    }

    $xs = 12;

    $sizes = 'col-xs-' . $xs;

    if ($atts['small'] !== null){
      $sizes .= " col-sm-{$atts['small']}";
    }
    if ($atts['medium'] !== null){
        $sizes .= " col-md-{$atts['medium']}";
    }
    if ($atts['large'] !== null){
        $sizes .= " col-lg-{$atts['large']}";
    }

  if ($atts['padding'] !== null) {
    $class .= " padding--{$atts['padding']}";
  }
  if ($atts['margin'] !== null) {
    $class .= " margin--{$atts['margin']}";
  }
    return "<div class=\"{$sizes} {$class}\">" . do_shortcode( $content ) . "</div>";
}

add_shortcode( 'column', 'v_column');

function v_block_copy($atts, $content) {
  $atts = shortcode_atts( array(
        'class' => null,
        'padding' => null,
        'margin' => null
    ), $atts );

  $classes = '';

  if ($atts['class']  !== null) {
    $classes .= ' ' . $atts['class'];
  }
  if ($atts['padding'] !== null) {
    $classes .= ' padding--' . $atts['padding'];
  }
  if ($atts['margin']  !== null) {
    $classes .= ' margin--' . $atts['margin'];
  }

  $content = cleanContent($content);

  return '<div class="block block-copy' . $classes . '">' . do_shortcode( $content ) . '</div>';

}
add_shortcode('block-copy', 'v_block_copy');

function v_header( $atts, $content = null ) {
    return '<div class="page-header"><h1>' . do_shortcode( $content ) . '</h1></div>';
}
add_shortcode( 'header', 'v_header' );

function v_yellow($atts, $content = null ) {
    return '<span class="yellow">' . do_shortcode( $content ) . '</span>';
}
add_shortcode( 'yellow', 'v_yellow' );

function v_div($atts, $content = null ) {
  $classes = $atts['class'];
    return '<div class="' . $classes . '">' . do_shortcode( $content ) . '</div>';
}
add_shortcode( 'div', 'v_div' );

function v_flex($atts, $content = null ) {
    return '<div class="flex-container flex-center">' . do_shortcode( $content ) . '</div>';
}
add_shortcode( 'flex', 'v_flex' );

function v_massive($atts, $content = null) {
    $content = cleanContent($content);
    return '<div class="row center-xs">
              <div class="col-xs-12 col-sm-8 col-md-6">
                  <div class="flex-container flex-center margin--l-top">
                      <div class="block">
                          <div class="massive font--bold">'.do_shortcode( $content ).'</div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="row end-xs">
              <div class="endbar endbar-right margin--l-bottom"></div>
          </div>';
}
add_shortcode( 'massive', 'v_massive' );

function v_button($atts, $content) {

  return '<div class="text-center"><a href="'.$atts['url'].'" alt="'.$content.'"><button class="button button--yellow">'.$content.'</button></a></div>';

}
add_shortcode('button', 'v_button');

function v_blockquote($atts, $content) {
  return '<blockquote>'.$content.'</blockquote>';
}
add_shortcode('blockquote', 'v_blockquote');

function v_the_title($content = null) {
    return get_the_title();
}
add_shortcode('the-title', 'v_the_title');

function v_paragraph($atts, $content){
    $classes = '';
    if (!empty($atts['class'])){
        $classes = ' ' . $atts['class'];
    }
    return '<p' . $classes .'>' . do_shortcode( $content ) . '</p>';
}
add_shortcode('p', 'v_paragraph');

function v_video($atts, $content = null) {
    $atts = shortcode_atts( array(
        'slug' => null,
    ), $atts);
    return '<div class="media"><div class="media__video shadow--yellow"><iframe width="560" height="315" src="https://www.youtube.com/embed/' . $atts["slug"] . '?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div></div>';
}
add_shortcode('video', 'v_video');

?>