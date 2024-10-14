<?php
// require ReCaptcha class
require('recaptcha-master/src/autoload.php');

  // Replace contact@example.com with your real receiving email address
  $receiving_email_address = 'Keith.Tachibana@outlook.com';

        if (!$response->isSuccess()) {
            throw new \Exception('ReCaptcha was not validated.');
        }
        
        // everything went well, we can compose the message, as usually
        
        $emailText = "You have a new message from your contact form\n=============================\n";

  // Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials

  $contact->smtp = array(
    'host' => 'smtp.gmail.com',
    'username' => 'Keith.Tachibana@gmail.com',
    'password' => 'bawoxqaxqtjpwair',
    'port' => '587'
  );


if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);

  $contact->honeypot = $_POST['first_name'];
  $contact->recaptcha_secret_key = '6LeKMdIaAAAAADHaDB1toMMJt_YGcG5wTJO3yDcX';

    echo $encoded;
} else {
    echo $responseArray['message'];
}
