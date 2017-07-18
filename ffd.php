<?php
$q=$_REQUEST["q"];
echo($q);
echo(" options: <select>");
sleep(1);
for ($i=0; $i < $q; $i++) {
    echo("<option> option");
    echo($i+1);
    echo("</option>\r\n");
}
    echo("</select>");
?>
