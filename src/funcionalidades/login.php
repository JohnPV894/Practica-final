<?php
require __DIR__ .'/../../vendor/autoload.php'; // Carga automática de dependencias


function obtenerClienteMongoDB()
{
    $cluster = "cluster0.6xkz1.mongodb.net/";
    $usuario = rawurlencode("santiago894");
    $pass = rawurlencode("P5wIGtXue8HvPvli");
    $cadenaConexion = sprintf("mongodb+srv://%s:%s@%s", $usuario, $pass, $cluster);
    $cliente = new MongoDB\Client($cadenaConexion);
    //"mongodb+srv://$usuario:$pass@cluster0.6xkz1.mongodb.net/"
    return $cliente;
}
function mostrarBasesDeDatos()
{
    $listaBD=[];
    $cliente = obtenerClienteMongoDB();
    $basesDeDatos = $cliente->listDatabases();

    //Atencion basesDeDatos es un objeto de la clase mongoDB CUIDADO AL ITERAR
    foreach ($basesDeDatos as $cadaBaseDeDatos) {
        array_push( $listaBD, $cadaBaseDeDatos->getName());
    }

    //El metodo getName devuelve un dato string normal
    for ($i=0; $i <sizeof( $listaBD) ; $i++) { 
        echo"Data Base N°".($i+1).":". $listaBD[$i] ."<br>";
    }
 
    return $listaBD;
}
mostrarBasesDeDatos();

$objeto_mongo_usuario=[ 
      "_id"=>1,
      "nombreUsuario" => "admin",
      "contraUsuario" => "admin"

];