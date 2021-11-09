import {minigame} from './scenes/minigame.js';
import {fwidth, fheight, centerw, centerh} from './ENV.js';

//Configuracion juego Phaser 3

const config ={
	width: fwidth,
	height: fheight,
	parent:"container",
	type: Phaser.AUTO,
	physics: {
        default: 'arcade',
        arcade: { debug: false }
    },
	scene:[minigame]
}


export var game = new Phaser.Game(config);
