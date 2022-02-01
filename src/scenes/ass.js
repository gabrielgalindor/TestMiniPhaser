import {fwidth, fheight, centerw, centerh, centerhroad} from '../ENV.js';
import {game} from '../index.js';



export class assGame extends Phaser.Scene{
    
    constructor(){
        super({key:"minigame", active:false});
    }

    preload()
    {


        this.load.atlas('assShake','./assets/nocpy/sprite1.png','./assets/nocpy/shakeAss.json');
        this.load.image('noCpyBackground','./assets/nocpy/background.png');
    }
    create()
    {
        this.background = this.add.tileSprite(centerw,centerh,game.config.width,game.config.height,'noCpyBackground');
        this.title = this.add.sprite(300,centerh-300,'assShake','ass0.png');

        this.anims.create({
            key:'assShake',
            repeat:-1,
            frameRate:24,
            frames:this.anims.generateFrameNames('assShake',{
                prefix:'ass',
                suffix:'.png',
                start:0,
                end:11
            })
        });

        this.title.play({ key: 'assShake', repeat: -1 });

        this.text1 = this.add.text(100, 50, 'In you, I count stars', { fontFamily: 'Bitwise, "Arial", Times, serif', fontSize: '2rem', color: '#ffffff', stroke: "#0000fa", strokeThickness :2});
        this.text2 = this.add.text(800, 650, 'In you, I taste God', { fontFamily: 'Bitwise, "Arial", Times, serif', fontSize: '2rem', color: '#ffffff', stroke: "#0000fa", strokeThickness :2});
      
    }

    update(time,delta)
    {        
        this.background.tilePositionX +=10
    }

}