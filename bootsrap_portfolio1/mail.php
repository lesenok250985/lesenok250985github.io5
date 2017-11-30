<?php

$recepient = "vlasenko.lesja1@.gmail.com";
$sitename = "Название сайта";

$name = trim($_POST["name"]);
$phone = trim($_POST["email"]);
$subject = trim($_POST["subject"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \n$email \nТума: $subject \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");