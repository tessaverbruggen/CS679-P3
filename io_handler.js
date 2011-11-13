function handleMouseMove(evt)
{
	mousex = Math.max(0,Math.min(canvas.width,evt.clientX-10));
	mousez = Math.max(0,Math.min(canvas.height,evt.clientY-10));
}
function handleMouseDown(evt)
{
}
function handleMouseUp(evt)
{
}
function handleKeyDown(evt) {
	switch (evt.keyCode) {
		case 87:  // w
			human.fwd = true;
		break;
		case 83:  // s
			human.bck = true;
		break;
		case 65:  // a
			human.left = true;
		break;
		case 68:  // d
			human.right = true;
		break;
	}
}
function handleKeyUp(evt) {
	switch (evt.keyCode) {
		case 87:  // w
			human.fwd = false;
		break;
		case 83:  // s
			human.bck = false;
		break;
		case 65:  // a
			human.left = false;
		break;
		case 68:  // d
			human.right = false;
		break;
	}
}