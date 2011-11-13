//game wide global var setup

//set up canvas and webgl vars
var canvas;
var gl;
var shaderProgram;
var shaderProgram_main;
var shaderProgram_flash;
var shaderProgram_phase;
var mvMatrix = mat4.create();
var pMatrix = mat4.create();  
var mvMatrixStack = [];

//path to textures/mesh files
var path = "";

//play state variables
var playState = 0;
var time = 0;
var human = new player();
var cam = new camera();

/*
//archaic globals from P2 as example
var asteroids = new Array();
var enemies = new Array();
var items = new Array();
var lasers = new Array();
var explosions = new Array();
var levelBackground = new background();
var asteroidCt = 0;
var enemyCt = 0;
var itemCt = 0;
var explosionCt = 0;
var levNum = 1;
var numOfLevels = 5;
var lev = new level();
var boss;
var drawInstructions = false;
var levelLength = 10000;
var aimType = false;*/

//load in model files for game
var models = new Array();
var meshNum = 0;
var modelsChecked = 0;
var totalModels = 0; //needs to be hardcoded in
var doOnce = false;
var doneSetup = 0;

//mouse position vars stored
var mousex = 0;
var mousez = 0;

//add event listeners 
window.addEventListener('keydown',handleKeyDown,true);
window.addEventListener('keyup',handleKeyUp,true);
window.addEventListener('mousemove',handleMouseMove,true);
window.addEventListener('mousedown',handleMouseDown,true);
window.addEventListener('mouseup',handleMouseUp,true);

//initialization functions
function preInit() //to be performed and completed with a time gap before initializing the game variables
{
	loadGUI();
	T = setTimeout("drawLevelMenu()", 1/100 * 1000);
	$.get("meshes/meshids.html", function(data){
		getMeshes(data);
	}, 'html');
	//pausecomp(500);
	T = setTimeout("initGame()", 1/60 * 1000);
}
function initGame() //begin the "official" game initialization
{
	//set up drawing
	canvas = document.getElementById("myCanvas");
	gl = canvas.getContext("experimental-webgl");
	gl.viewportWidth = canvas.width;
    gl.viewportHeight = canvas.height;

	// now we can do standard OpenGL stuff
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.enable(gl.DEPTH_TEST);

	T = setTimeout("gameLoop()", 1/60 * 1000);
}

function setupGame() //loads models, lights, and shaders
{
	//initialize all loaded meshes
	initObjects();
	doneSetup = 0.33;
	//initialize lights
	initLights();
	doneSetup = 0.66;
	// make the shaders
	initShaders();
	doneSetup = 1;
}
function checkLoaded() //checks that all models are loaded
{
	if (modelsChecked < totalModels)
		return false;
	else
		return true;
}

//level loading functions
function nextLevel()
{
	playState = 1;
	loadGUI();
	drawGUI();
}
function setupLevel()
{
	$.get("levels/l"+levNum+".html", function(data){
	lev = load_level(data);
	levelLength = lev.length;
	}, 'html');
}

//game play loop
function gameLoop() //switches between game states and performs correct loop operations
{
	switch (playState)
	{
		case 0: //loading screen and instructions
			if (checkLoaded() && !doOnce)
			{
				doOnce = true;
				setupGame();
				setupLevel();
			}
			var tmp = 100*modelsChecked/totalModels+100*doneSetup;
			document.getElementById('loadingBar').style.width = tmp+"px";
			break;
		case 1: // level play
			draw();
			update();
			break;
		case 2: // ??
			break;
		case 3: // ??
			break;
		case 4: // ??
			break;
	}
	T = setTimeout("gameLoop()", 1/60 * 1000);
}


function update(){
	//run update code here
	time += 1;
	time & 314;
	
	//lev.doEvents(); //do level events? is this applicable?
	var i;
	human.update();
	cam.update();
	//detectCollisions(); //we may not need collision detection
	
	if (lev.finished)
	{
		//deal with a completed level
	}
}


function initObjects()
{
	var i,j;
	for (i=0;i<models.length;i++)
	{
		if (models[i] != null)
		{
			models[i].initMaterials();
			for (j=0;j<models[i].meshes.length;j++)
			{
				models[i].meshes[j].bindMesh();
			}
		}
	}	
}

function gameOver() {
	//is this still relevant?
	playState = 4;
	//loadGUI();
}