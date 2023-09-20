function loadEvents()
{
    casilla=document.getElementsByClassName("div"); 
    jugada=0; 
    indice_casilla=0; 
    turno=[0,0,0,0,0,0,0,0,0]; 
    ganar=[0,0,0,0,0,0,0,0,0];


    document.getElementById("casilla1").addEventListener('click', Change1); 
    document.getElementById("casilla2").addEventListener('click', Change2); 
    document.getElementById("casilla3").addEventListener('click', Change3); 
    document.getElementById("casilla4").addEventListener('click', Change4); 
    document.getElementById("casilla5").addEventListener('click', Change5); 
    document.getElementById("casilla6").addEventListener('click', Change6); 
    document.getElementById("casilla7").addEventListener('click', Change7); 
    document.getElementById("casilla8").addEventListener('click', Change8); 
    document.getElementById("casilla9").addEventListener('click', Change9); 

    document.getElementById("but").addEventListener('click', reset); 
}

function Change1()
{
    if (turno[0]==0)
    {
        turno[0]=1; 
        indice_casilla=0; 
        marcarcasilla (); 

    }
}

function Change2()
{
    if(turno[1]==0)
    {
        turno[1]=1; 
        indice_casilla= 1;
        marcarcasilla (); 
    }
}

function Change3()
{
    if(turno[2]==0)
    {
        turno[2]=2; 
        indice_casilla= 2;
        marcarcasilla (); 
    }
}

function Change4()
{
    if(turno[3]==0)
    {
        turno[3]=3; 
        indice_casilla= 3;
        marcarcasilla (); 
    }
}

function Change5()
{
    if(turno[4]==0)
    {
        turno[4]=4; 
        indice_casilla= 4;
        marcarcasilla (); 
    }
}

function Change6()
{
    if(turno[5]==0)
    {
        turno[5]=5; 
        indice_casilla= 5;
        marcarcasilla (); 
    }
}

function Change7()
{
    if(turno[6]==0)
    {
        turno[6]=6; 
        indice_casilla= 6;
        marcarcasilla (); 
    }
}
function Change8()
{
    if(turno[7]==0)
    {
        turno[7]=7; 
        indice_casilla= 7;
        marcarcasilla (); 
    }
}

function Change9()
{
    if(turno[8]==0)
    {
        turno[8]=8; 
        indice_casilla= 8;
        marcarcasilla(); 
    }
}


function marcarcasilla()
{
    if (jugada==0)
    {
        casilla[indice_casilla].innerHTML = '<img id=img1 src="imagen/X.png" />';  
        jugada=1; 
        ganar[indice_casilla]=1;
       
    }
    else if (jugada==1)
    {
        casilla[indice_casilla].innerHTML = '<img id=img1 src="imagen/O.png" />';  
        jugada=0; 
        ganar[indice_casilla]=2;
        
    }

    if ((ganar[0]==2 && ganar[1]==2 && ganar[2]==2 ) || (ganar[0]==2 && ganar[4]==2 && ganar[8]==2) || (ganar[0]==2 && ganar[3]==2 && ganar[6]==2) || (ganar[1]==2 && ganar[4]==2 && ganar[7]==2) || (ganar[2]==2 && ganar[4]==2 && ganar[6]==2) || (ganar[2]==2 && ganar[5]==2 && ganar[8]==2) || (ganar[2]==2 && ganar[5]==2 && ganar[8]==2)|| (ganar[3]==2 && ganar[4]==2 && ganar[5]==2) || (ganar[0]==2 && ganar[3]==2 && ganar[6]==2) || (ganar[3]==2 && ganar[4]==2 && ganar[5]==2) || (ganar[6]==2 && ganar[7]==2 && ganar[8]==2))
    {
        alert("Felicidades, ha ganado el jugador de las O"); 
        turno=[1,1,1,1,1,1,1,1,1];  
    }

    if ((ganar[0]==1 && ganar[1]==1 && ganar[2]==1 ) || (ganar[0]==1 && ganar[4]==1 && ganar[8]==1) || (ganar[0]==1 && ganar[3]==1 && ganar[6]==1) || (ganar[1]==1 && ganar[4]==1 && ganar[7]==1) || (ganar[2]==1 && ganar[4]==1 && ganar[6]==1) || (ganar[2]==1 && ganar[5]==1 && ganar[8]==1) || (ganar[2]==1 && ganar[5]==1 && ganar[8]==1)|| (ganar[3]==1 && ganar[4]==1 && ganar[5]==1) || (ganar[0]==1 && ganar[3]==1 && ganar[6]==1) || (ganar[3]==1 && ganar[4]==1 && ganar[5]==1) || (ganar[6]==1 && ganar[7]==1 && ganar[8]==1))
    {
        alert("Felicidades, ha ganado el jugador de las X");
        turno=[1,1,1,1,1,1,1,1,1]; 
    }

}



function reset()

    {    
        casilla1.innerHTML=""; 
        casilla2.innerHTML=""; 
        casilla3.innerHTML=""; 
        casilla4.innerHTML=""; 
        casilla5.innerHTML=""; 
        casilla6.innerHTML=""; 
        casilla7.innerHTML=""; 
        casilla8.innerHTML=""; 
        casilla9.innerHTML=""; 
        loadEvents();

    }
    


