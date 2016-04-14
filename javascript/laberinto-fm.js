function JuegoLaberinto(){
	this.nombre="JuegoLaberinto";
	this.laberinto=null;
	this.crearLaberinto=function(){
		this.laberinto=new Laberinto();
		var h1=new Habitacion();
		var h2=new Habitacion();
		var puerta=new Puerta(h1,h2);
		//h1.lados[0]=puerta;
		//h2.lados[2]=puerta;
		h1.norte=puerta;
		h2.sur=puerta;
		this.laberinto.agregarHabitacion(h1);
		this.laberinto.agregarHabitacion(h2);
		return this.laberinto
	}
}

function Laberinto(){
	this.nombre="Laberinto";
	this.habitaciones=[];
	this.agregarHabitacion=function(hab){
		hab.id=this.habitaciones.length;
		this.habitaciones.push(hab);
	}
	this.obtenerHabitacion=function(num){
		return this.habitaciones[num];
	}
}

function Pared(){
	this.nombre="Pared";
}

function Habitacion(){
	this.nombre="Habitacion";
	this.id=null;
	//this.lados=[];
	this.norte=null;
	this.este=null;
	this.oeste=null;
	this.sur=null;
	//this.agregarLado=function(em){
	//	this.lados.push(em);
	//}
	//this.lados.push(new Pared());
	//this.lados.push(new Pared());
	//this.lados.push(new Pared());
	//this.lados.push(new Pared());	
	this.norte=new Pared();
	this.este=new Pared();
	this.oeste=new Pared();
	this.sur=new Pared();
}

function Puerta(h1,h2){
	this.nombre="Puerta";
	this.h1=h1;
	this.h2=h2;
}

function Norte(){
	this.nombre="Norte";
}

function Este(){
	this.nombre="Este";
}
function Oeste(){
	this.nombre="Oeste";
}
function Sur(){
	this.nombre="Sur";
}