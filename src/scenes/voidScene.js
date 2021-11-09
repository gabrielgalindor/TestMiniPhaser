import {fwidth, fheight, centerw, centerh, centerhroad} from '../ENV.js';
import {game} from '../index.js';


export class minigame extends Phaser.Scene{
    constructor(){
        super({key:"minigame", active:false});
    }
    preload()
    {
        

    }
    create()
    {

    }

    update(time,delta)
    {
        this.camera3Deffect();
       
        //fin del ciclo update
    }

    camera3Deffect(){

    }

    createElement(){

    }
}