/**
 * @author Dan
 */

function SolarSystem() {
	this.planets = [];
	
	//TODO:
	this.warpPlanet = null;
	this.positon = null;
	
	this.addPlanet = function(planet) {
		this.planets.push(planet);
	}
	
	//not sure is we will need these but just in case
	this.update = function() {
		for(var i = 0; i < this.planets.length; i++) {
			this.planets[i].update();
		}
	}
	
	this.draw = function() {
		for (var i = 0; i < this.planets.length; i++) {
			this.planets[i].draw();
		}
	}
	
	//create some hardcoded planets for now...
	//args are position, type, size, owner, connected planets, 
	//ships garrisoned
	this.addPlanet(new Planet({x:0,y:0,z:0}, "factory", 30, 
							   "player", [], []));
	
	this.addPlanet(new Planet({x:10,y:10,z:0}, "plasma", 30, 
							  "player", [], []));
	
	this.addPlanet(new Planet({x:-10,y:-10,z:0}, "steel", 30, 
							  "computer", [], []));
	
	this.addPlanet(new Planet({x:-30,y:-30,z:0}, "antimatter", 30, 
							  "neutral", [], []));

	this.planets[0].linkPlanet(this.planets[1]);
	this.planets[0].linkPlanet(this.planets[2]);
	this.planets[2].linkPlanet(this.planets[3]);	
}
