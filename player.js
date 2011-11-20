function player ()
{
	this.pos = new v3(0,0,0);
	this.zScreenPos = 200;
	
	this.fwd;
	this.bck;
	this.right;
	this.left;	
	
	this.gold = 0;
	this.plasma = 0;
	this.steel = 0;
	this.antimatter = 0;
}

player.prototype.restart = function()
{
}

player.prototype.update = function()
{
}

player.prototype.addGold = function(amount){
	this.gold += amount;
}

player.prototype.addPlasma = function(amount){
	this.plasma += amount;
}

player.prototype.addSteel = function(amount){
	this.steel += amount;
}

player.prototype.addAntimatter = function(amount){
	this.antimatter += amount;
}