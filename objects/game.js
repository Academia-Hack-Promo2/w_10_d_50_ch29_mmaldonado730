'use strict';


(function () {
	
	var player1 = new Player('player1');
	var player2 = new Player('player2');

	player1.setFaction(settings.factions[1]);
	player2.setFaction(settings.factions[0]);

	console.log(player1);
	console.log(player2);
    
    var t = true
	while (t) {				
		player1.attack(player2);
		player2.attack(player1);
		t = false
	};

})();