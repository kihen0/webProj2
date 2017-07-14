<?php
$q=$_REQUEST["q"];
echo("<select>");
for ($i=0; $i < $q; $i++) {
    echo("<option> option");
    echo($i+1);
    echo("</option>");
}
    echo("</select>");
?>
