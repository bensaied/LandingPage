<?php
if (!defined('ABSPATH')) {
    exit;
}

class Oussama_Ben_Saied_Contact_Form {

    // Register custom post type
    public function register_post_type() {
        register_post_type('form_submission', [
            'label' => 'Form Submissions',
            'public' => false,
            'show_ui' => true,
            'supports' => ['title'],
            'capability_type' => 'post',
        ]);
    }

    // Register REST API route
    public function register_rest_route() {
        register_rest_route('oussama_ben_saied/v1', '/contact-form', [
            'methods' => 'POST',
            'callback' => [$this, 'handle_form_submission'],
            'permission_callback' => '__return_true',
        ]);
    }

    // Handle form submission
    public function handle_form_submission($request) {
        $name = sanitize_text_field($request->get_param('name'));
        $email = sanitize_email($request->get_param('email'));
        $message = sanitize_textarea_field($request->get_param('message'));

        if (empty($name) || empty($email) || empty($message)) {
            return new WP_Error('missing_data', 'Please provide all required fields', ['status' => 422]);
        }

        // Check for duplicate submissions within 1 hour
        $recent_posts = get_posts([
            'post_type' => 'form_submission',
            'meta_query' => [
                [
                    'key' => 'email',
                    'value' => $email,
                    'compare' => '=',
                ],
            ],
            'date_query' => [
                'after' => date('Y-m-d H:i:s', strtotime('-1 hour')),
            ],
        ]);

        if ($recent_posts) {
            return new WP_Error('duplicate_submission', 'A submission with the same email was received within the last hour', ['status' => 422]);
        }

        // Create the post
        $post_id = wp_insert_post([
            'post_title' => $name,
            'post_type' => 'form_submission',
            'post_status' => 'publish',
        ]);

        if (is_wp_error($post_id)) {
            return $post_id;
        }

        update_post_meta($post_id, 'email', $email);
        update_post_meta($post_id, 'message', $message);

        return new WP_REST_Response(['success' => true], 200);
    }
}
