function Maze(){
	this.name="Maze";
	this.rooms=[];
	this.addRoom=function(room){
		this.rooms.push(room);
	}
}

function Room(num){
	this.name="Room";
	this.id=num;
	this.north=null;
	this.south=null;
	this.east=null;
	this.west=null;
}

function Wall(){
	this.name="Wall";
}

function Door(h1,h2){
	this.name="Door";
	this.h1=h1;
	this.h2=h2;
	this.isOpen=false;
}

function MazeGame(){
	this.name="MazeGame";
	this.maze=null;
}

function NormalMazeCreator(){
	this.name="NormalMazeCreator";
	this.createMaze=function(){
		var mz=this.makeMaze();
		var h1=this.makeRoom(1);
		var h2=this.makeRoom(2);
		var door=this.makeDoor(h1,h2);
		h1.north=door;
		h1.east=this.makeWall();
		h1.south=this.makeWall();
		h1.west=this.makeWall();
		h2.south=door;
		h2.north=this.makeWall();
		h2.east=this.makeWall();
		h2.west=this.makeWall();
		mz.addRoom(h1);
		mz.addRoom(h2);
		return mz;

	}
	this.makeRoom=function(num){
		return new Room(num);
	}
	this.makeWall=function(){
		return new Wall();
	}
	this.makeDoor=function(h1,h2){
		return new Door(h1,h2);
	}
	this.makeMaze=function(){
		return new Maze();
	}
}