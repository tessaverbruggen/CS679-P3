//for 2D - GUI/HUD drawing.
//separated from 3D since Nate will be doing mostly 3D
//and Tessa will be doing a bunch of 2D, so it will make
//git merging easier if we aren't both editing the same thing

function draw2d()
{
	// !!! Maybe I don't need to set these things every step...
	this.originX = 0;
	this.originY = 600;

	switch (playState){
		case 0:
			//draw loading screen
			break;
		case 1:
			//Default Game state
			
			//Draw background for HUD
			ctx.fillStyle = '#444400';
			ctx.fillRect(10, 10, cWidth - 20, 80);
		
			ctx.fillStyle = 'black';
			ctx.font = "15pt Calibri";		
			ctx.fillText("Gold: " + player.gold, this.originX + 20, this.originY + 30);
			ctx.fillText("Steel: " + player.steel, this.originX + 20, this.originY + 50);	
			ctx.fillText("Plasma: " + player.plasma, this.originX + 20, this.originY + 70);	
			ctx.fillText("Antimatter: " + player.antimatter, this.originX + 20, this.originY + 90);			
			break;
			
		case 2: // ??
			break;
		case 3: // ??
			break;
	}
}