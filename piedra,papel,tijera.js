var pc;
var movpc;
var jugador;
var movJugador;
var ganadasJugador=0;
var ganadasMaquina=0;

function aleatorio(min, max){
    return Math.random()*(max-min)+min;
}

function juegoMaquina(){
    pc = Math.floor(aleatorio(1,4));

    if (pc==1){
        movpc= "piedra";
        document.getElementById("maquina").innerHTML='<img src="piedraMaquina.jpg">';
    } else{
        if (pc==2){
            movpc= "papel";
            document.getElementById("maquina").innerHTML='<img src="papelMaquina.jpg">';
        } else{
            movpc= "tijera";
            document.getElementById("maquina").innerHTML='<img src="tijeraMaquina.jpg">';
        }
    }  
    
}

function piedra(){
    movJugador= "piedra";
    juegoMaquina();
    jugar();
    document.getElementById("jugador").innerHTML='<img src="piedraJugador.jpg">';
    document.getElementById("marcador").innerHTML="<h2>Jugador "+ganadasJugador+" "+ganadasMaquina+" Máquina</h2>";
}

function papel(){
    movJugador= "papel";
    juegoMaquina();
    jugar();
    document.getElementById("jugador").innerHTML='<img src="papelJugador.jpg">';
    document.getElementById("marcador").innerHTML="<h2>Jugador "+ganadasJugador+" "+ganadasMaquina+" Máquina</h2>";
}

function tijera(){
    movJugador= "tijera";
    juegoMaquina();
    jugar();
    document.getElementById("jugador").innerHTML='<img src="tijeraJugador.jpg">';
    document.getElementById("marcador").innerHTML="<h2>Jugador "+ganadasJugador+" "+ganadasMaquina+" Máquina</h2>";
}

function ganador(){
    if (movpc=="piedra" && movJugador=="piedra"){
        res="empate";
    }
    if (movpc=="piedra" && movJugador=="papel"){
        res="Papel le gana a piedra, gana jugador";
        ganadasJugador++;
    }
    if (movpc=="piedra" && movJugador=="tijera"){
        res="Piedra gana a tijera, gana la máquina";
        ganadasMaquina++;
    }
    if (movpc=="papel" && movJugador=="papel"){
        res="empate";
    }
    if (movpc=="papel" && movJugador=="piedra"){
        res="El papel gana a piedra, gana la maquina";
        ganadasMaquina++;
    }
    if (movpc=="papel" && movJugador=="tijera"){
        res="La tijera gana a papel, jugador gana";
        ganadasJugador++;
    }
    if (movpc=="tijera" && movJugador=="tijera"){
        res="empate";
    }
    if (movpc=="tijera" && movJugador=="papel"){
        res="Tijera gana a papel, gana la maquina";
        ganadasMaquina++;
    }
    if (movpc=="tijera" && movJugador=="piedra"){
        res="Piedra gana a tijera, gana jugador";
        ganadasJugador++;
    }    
}

juegoJugador();
function jugar(){
    ganador();
    document.getElementById("ganador").innerHTML="<h2>"+res+"</h2>";
    console.log("Ganadas maquina: "+ganadasMaquina);
}




function juegoJugador(){
    /*jugador = parseInt(prompt("Por favor seleccione una opcion \n 1.Piedra \n 2.Papel \n 3.Tijera"));
    
    if (jugador==1){
        movJugador= "piedra";
        juegoMaquina();
            jugar();
        document.getElementById("jugador").innerHTML='<img src="piedraJugador.jpg">';
    }
    
    if (jugador==2){
        movJugador= "papel";
        juegoMaquina();
            jugar();
        document.getElementById("jugador").innerHTML='<img src="papelJugador.jpg">';
    }
    
    if (jugador==3){
        movJugador= "tijera";
        juegoMaquina();
            jugar();
        document.getElementById("jugador").innerHTML='<img src="tijeraJugador.jpg">';
    }*/
    
        /*var buttonPiedra = document.getElementById("botonPiedra").value;
        buttonPiedra = addEventListener("click", function(e){
            movJugador= "piedra";
            juegoMaquina();
            jugar();
            document.getElementById("jugador").innerHTML='<img src="piedraJugador.jpg">';
        });
    
        var buttonPapel = document.getElementById("botonPapel").value;
        buttonPapel = addEventListener("click", function(e){
            movJugador= "papel";
            juegoMaquina();
            jugar();
            document.getElementById("jugador").innerHTML='<img src="papelJugador.jpg">';
        });
    
        var buttonTijera = document.getElementById("botonTijera").value;
        buttonTijera = addEventListener("click", function(e){
            movJugador= "tijera";
            juegoMaquina();
            jugar();
            document.getElementById("jugador").innerHTML='<img src="tijeraJugador.jpg">';
        });*/
        
    }