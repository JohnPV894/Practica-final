<?php
require __DIR__ .'/../../vendor/autoload.php'; // Carga automática de dependencias
require 'config/config.php';


function agregarUsuario($id,$nombreusuario,$contra,$rol)
{
    $objeto_mongo_usuario=[ 
        "_id"=>$id,
        "nombreUsuario" => $nombreusuario,
        "contraUsuario" => $contra,
        "rol"=>$rol
  
  ];
    $mongo = obtenerClienteMongoDB();
    $bd = $mongo->selectDatabase("ERP");
    $coleccionUsuarios = $bd ->selectCollection("usuarios");
    $coleccionUsuarios->insertOne($objeto_mongo_usuario);
}


 
// Objeto mongo
$mongo = obtenerClienteMongoDB();
$bd = $mongo->selectDatabase("ERP");
$coleccionUsuarios = $bd ->selectCollection("usuarios");


//Validar un inicio de sesion 

//1 recuperar del archivo html las credenciales y almacenarlas en variables 
$contraUsuario = $_POST["contra"];
$nombreUsuario = $_POST["nombreusuario"];


//2 validar que no esten vacios
if (!empty($contraUsuario) && !empty($nombreUsuario)) {//Comprobacion de que la variable no esta vacia

    echo "Formulario no esta vacio";
    //3 recuperar el objeto de la collecion usuario de mongo db
    if ($coleccionUsuarios ->findOne(['nombreUsuario' =>$nombreUsuario ]) and 
        $coleccionUsuarios ->findOne(['contraUsuario' =>$contraUsuario ])) {
        echo "credenciales Correctas";
           
        header("location:http://localhost:3000/src/interfaces/inicio.html");
    }
    else {
        echo "credenciales Incorrectas";
        header("location:http://localhost:3000/src/interfaces/login.html");
    }

}else{
    //echo "formulario esta vacio";
    header("location:http://localhost:3000/src/interfaces/login.html");
    
}



//4 recorrer y validar si las credenciales son correctas
//ultimo devolver con header al login.html o a inicio.html dependiendo de las credenciales