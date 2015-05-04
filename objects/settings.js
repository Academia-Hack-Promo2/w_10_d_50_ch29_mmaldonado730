"use strict";

var settings = (function () {

	var attack1 = new Attack('Kunai', 100);
	var attack2 = new Attack('shuriken', 50);
	var attack3 = new Attack('Wakizashi', 1500);
	var attack4 = new Attack('Fukiya', 500);
	var attack5 = new Attack('Abrojo', 500);

	var ninja = new Faction('ninja');

	ninja.addAttack(attack1);
	ninja.addAttack(attack2);
	ninja.addAttack(attack3);
	ninja.addAttack(attack4);
	ninja.addAttack(attack5);

	var attack0 = new Attack('no attack', 0);
	var attack6 = new Attack('bite', 500);
	var attack7 = new Attack('step', 1000);
	var attack8 = new Attack('tail whipe', 500);

	var dinosaur = new Faction('dinosaur');

	dinosaur.addAttack(attack0);
	dinosaur.addAttack(attack6);
	dinosaur.addAttack(attack7);
	dinosaur.addAttack(attack8);

	return {
		factions: [ninja, dinosaur]
	};

})();