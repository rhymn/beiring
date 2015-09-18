<?php
require_once "Mail.php";

$json = file_get_contents('php://input');
$data = json_decode($json);

if(!array_key_exists('type', $data)){
  echo "{response: 'failure'}";
  return;
}

$from = "test@beiringtandklinik.se";

$to = "Russell Clark <russell@twcc.se>, David <david@pnd.se>";

$subject = $data->type;

$body = "Hej, någon har lämnat ett meddelande på webbsidan,\n\n" . $json;

// Inställningar för mailservern (SMTP).

$host = "smtp.fsdata.se";

$username = "test@beiringtandklinik.se";

$password = "beiring";

// Parametrar för att inititera SMTP-servern.

$params = array(
   'host' => $host,
   'auth' => true,
   'username' => $username,
   'password' => $password
);


// Initierar SMTP-servern med hjälp av våra parametrar.

$smtp = Mail::factory('smtp', $params);

// Parametrar för e-postmeddelandet.

$headers = array(
   'From' => $from,
   'To' => $to,
   'Subject' => $subject
);

$mail = $smtp->send($to, $headers, $body);

echo $json;

// echo ( PEAR::isError($mail) ) ? "<p>" . $mail->getMessage() . "</p>" : "<p>E-postmeddelandet skickat!</p>";

?>