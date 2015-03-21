function draw() {
			var canvas = document.getElementById('tutorial');
			if(canvas.getContext) {
				var ctx = canvas.getContext('2d');	
				

				for (var i = 0; i < 6; i++){
    				for (var j = 0; j < 6; j++){
    					if((i % 2 == 0 && j % 2 == 0) || (i % 2 == 1 && j % 2 == 1)) {
    						ctx.fillStyle = 'rgb(0, 255, 0)';
    					} else {
    						ctx.fillStyle = 'rgb(255, 0, 0)';
    					}
      					//ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' +
                       	//Math.floor(255-42.5*j) + ',0)';
      					ctx.fillRect(j*25,i*25,25,25);
    				}
  				}
			}
		}



function myFunction() {
	var lol = "3" + 4 + 5 + 6;
	document.getElementById("demo").innerHTML = lol;
}

/*
var cars = [
 	"Audi",
 	"BMW",
 	"Opel"
 ];
*/


var person = {
	firstName: "Marcin",
	lastName: = "Obyrtacz",
	age: 23
};

