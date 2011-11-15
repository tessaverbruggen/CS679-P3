function background()
{
	// legacy code from P2 - a background that follows the player. Left for reference in case of need
	// probably will do a skybox/sphere instead, but I'm leaving it for now
	this.pos_a = new v3(0,-400,-500);
	this.model = 5;
	this.pos_b = new v3(0,-400,-500+2304);
	this.flip = true;
	this.lastFlip = 0;
}
background.prototype.update = function()
{
}
