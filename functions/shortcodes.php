<?php
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
?>