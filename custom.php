

<?php

function winner_generator(array $participants, $rand){
    
	$rand -= 1;

    if($rand>sizeof($participants)-1){
    
    $rand%=sizeof($participants);  
    }
    
    return ($participants[$rand]['name']);
}

echo winner_generator(array(
    array('name' => 'Kajus'),
    array('name' => 'Nojus'),
    array('name' => 'Lukas'),
    array('name' => 'Vaidas')
), rand());

?>



