<?php 

$requestUrl = array(
    "/" => "home",
    "/about-us" => "about-us",
    "/contact-us" => "contact-us"
);

if (array_key_exists($_SERVER['REQUEST_URI'], $requestUrl)) {
    
    if (array_key_exists($_SERVER['REQUEST_URI'], $requestUrl)) {

        // To get the content of the file which is then slotted dynamically inside body tag
        $mainContent = file_get_contents("views/".$requestUrl[$_SERVER['REQUEST_URI']].".php"); 

        // To get the css file name dynamically
        $cssUrl = "css/".$requestUrl[$_SERVER['REQUEST_URI']].".css";
    }
}



include "views/layout.php";
