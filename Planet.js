/**
 * @author Dan
 */
function Planet(planetPosition, planetType, planetSize, planetOwner,
				connectedPlanets, shipsGarrisoned) {
	this.position = planetPosition;
	this.type = planetType;
	this.size = planetSize;
	this.player = planetOwner;
	this.linkedPlanets = connectedPlanets;
	this.ships = shipsGarrisoned;
	
	this.linkPlanet = function(planet) {
		this.linkedPlanets.push(planet);
		planet.linkedPlanets.push(this);
	}
	
	this.garrisonShip = function(ship) {
		this.ships.push(ship);
	}
	
	this.texture = "";
	this.update = function() {
		// !!! Not sure if this would work like this... Should probably use an enum?
		switch planetType{
		/*
			case "plasma":
				planetOwner.addPlasma(3);
				break;
				//etc.
		*/
			default:
				break;
		}
			
	};
	
	this.draw = function() {
		
	};
	
	//not sure what else we need for now...
}
