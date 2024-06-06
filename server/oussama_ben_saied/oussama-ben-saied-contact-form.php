<?php
/**
 * Plugin Name: Oussama Ben Saied Contact Form
 * Description: A plugin to handle contact form submissions via REST API ( from NextJs App ).
 * Version: 1.0
 * Author: Oussama Ben Saied
 */

defined('ABSPATH') || exit;

// Autoload classes
require_once plugin_dir_path(__FILE__) . 'includes/class-contact-form.php';

// Initialize the plugin
function oussama_ben_saied_contact_form_init() {
    $contact_form = new Oussama_Ben_Saied_Contact_Form();
    $contact_form->register_post_type();
    $contact_form->register_rest_route();
}

add_action('init', 'oussama_ben_saied_contact_form_init');
