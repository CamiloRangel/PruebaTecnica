<?php

echo "Ingrese n: ";
fscanf(STDIN, '%d\n', $n);

if($n>=3 && $n<=1000){

$numeros = llenarArray($n);
mostrarArray($numeros);

countDuplicate($numeros);

}else{
    echo "N debe ser mayor o igual que 3 y menor o igual que 1000";
}

function mostrarArray($num){
    echo "--------------------Numeros[]-----------------------------\n";
    foreach ($num as $key => $value){
        echo "El numero en la posicion ".$key ." Es: ". $value. "\n";
    }
    echo "--------------------Numeros[]-----------------------------\n";
}

function llenarArray($n){
    $numeros = [];
    for ($i = 0; $i < $n; $i++){
        echo "Ingrese un número: ";
        fscanf(STDIN,'%d\n', $num);
        $numeros[$i] = $num;
    }
    return $numeros;
}



function seRepite($num,$bus){
    $count =0;
    for($i = 0; $i<sizeof($num);$i++){
        if($bus == $num[$i]){
            $repiten = $num[$i];
            $count++;
        }
    }
    return $count;
}


function countDuplicate($num){
    $cout = 0;
    $repiten = [];
    $aux = array_unique($num);
    foreach($aux as $v){
        if(seRepite($num,$v)>=2){
            array_push($repiten,$v);
            $cout++;
        }
    }
    if($cout !=0){
        echo "La cantidad de numeros que se repiten es de ".$cout. " y son: \n";
        foreach ($repiten as $value){
            echo $value."\n";
        }
    }else{
        echo "No hay elementos duplicados";
    }



}

//php count.php (terminal)

