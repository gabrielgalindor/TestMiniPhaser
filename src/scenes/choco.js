import {fwidth, fheight, centerw, centerh, centerhroad} from '../ENV.js';
import {game} from '../index.js';



export class minigame extends Phaser.Scene{
    
    constructor(){
        super({key:"minigame", active:false});
        this.speed = 1;
        this.seaObjects = [];
        this.CreateSeaObject = false;
        this.CreateSeaTimer = 0;
    }

    preload()
    {
        this.load.image('bg-ballenaschoco','./assets/ballenaschoco/background.jpg');
        this.load.image('seaballenas','./assets/ballenaschoco/sea8bits.jpg');
        this.load.image('whale', './assets/ballenaschoco/whal02.png');
    }
    create()
    {
        this.background = this.add.tileSprite(centerw,centerh,game.config.width,game.config.height,'bg-ballenaschoco');
        this.sea = this.add.tileSprite(0,centerh+200,2711,204,'seaballenas');
        this.seaObjects.push("1");
    }

    update(time,delta)
    {        
        this.backgroundHandler();
        this.seaHandler();
        
    }
    
    backgroundHandler()
    {
        this.background.tilePositionX +=1*this.speed;
        this.sea.tilePositionX +=10*this.speed;
    }
    seaHandler()
    {
        if(this.CreateSeaTimer<100)
        {
            this.CreateSeaTimer+=1;
        }else{
            this.seaObjects.push(this.physics.add.sprite(0,520,"whale").setScale(0.5));
            this.CreateSeaTimer=-100;
        }

        let index = 0;

        this.seaObjects.forEach(element => {
               if(index!=0)
               {
                   element.x+=10*this.speed;
                   if(element.x>1400)
                   {
                       element.destroy();
                       this.removeElementSea(element);
                   }
               }
               index+=1;
        });
    }
    removeElementSea(ELEMENT)
    {
        let isFind = this.seaObjects.indexOf(ELEMENT);
        this.seaObjects.splice(isFind,1);
    }
}