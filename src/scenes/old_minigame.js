import {fwidth, fheight, centerw, centerh, centerhroad} from '../ENV.js';
import {game} from '../index.js';



export class minigame extends Phaser.Scene{
    
    constructor(){
        super({key:"minigame", active:false});
        this.speed = 1;
       
    }
    preload()
    {
        this.load.image('bg-corrupsol', './assets/rutacorrupsol/bg-corrupsol.jpg');
        this.load.atlas('rc-ruta2', './assets/rutacorrupsol/carretera.png','./assets/rutacorrupsol/bg-road-atlas.json');
        this.load.atlas('spritecar','./assets/rutacorrupsol/sprite-car.png','./assets/rutacorrupsol/spritecar-atlas.json');
        this.load.image('rc-car', './assets/rutacorrupsol/car-test.png');
        this.load.scenePlugin('Camera3DPlugin', './src/js/camera3d.min.js', 'Camera3DPlugin', 'cameras3d');

    }
    create()
    {
        this.background = this.add.tileSprite(centerw,centerh,game.config.width,game.config.height,'bg-corrupsol');
        this.carretera = this.add.sprite(0,centerhroad+5,'rc-ruta2','cposition1.png');
        this.carreteraAnimA = true;
        this.carrteraAnimB = false;

        this.carcharacter = this.physics.add.sprite(400,590,"spritecar","carsprite1-1.png");
        this.carcharacter.setScale(2.5,2.5);
        
        //this.carretera = this.add.tileSprite(400,centerh,600,game.config.height,'rc-ruta');
        //this.elemento = this.add.tileSprite(centerw+this.posx,centerhroad,128,78,'rc-car');
        this.createElement();

        this.anims.create({
            key:'road-a',
            repeat:-1,
            frameRate:12,
            frames:this.anims.generateFrameNames('rc-ruta2',{
                prefix:'cposition',
                suffix:'.png',
                start:0,
                end:2
            })
        });

        this.anims.create({
            key:'road-b',
            repeat:-1,
            frameRate:24,
            frames:this.anims.generateFrameNames('rc-ruta2',{
                prefix:'cposition',
                suffix:'.png',
                start:0,
                end:2
            })
        });
      

        this.anims.create({
            key:'spritecar-a',
            repeat:-1,
            frameRate:24,
            frames:this.anims.generateFrameNames('spritecar',{
                prefix:'carsprite1-',
                suffix:'.png',
                start:0,
                end:2
            })
        });

        this.anims.create({
            key:'spritecar-r',
            repeat:-1,
            frameRate:24,
            frames:this.anims.generateFrameNames('spritecar',{
                prefix:'carsprite2-',
                suffix:'.png',
                start:0,
                end:3
            })
        });

        this.anims.create({
            key:'spritecar-l',
            repeat:-1,
            frameRate:24,
            frames:this.anims.generateFrameNames('spritecar',{
                prefix:'carsprite3-',
                suffix:'.png',
                start:0,
                end:3
            })
        });
       

        this.carretera.play({ key: 'road-a', repeat: -1 });
        this.carcharacter.play({ key: 'spritecar-a', repeat: -1 });

        this.cursor = this.input.keyboard.createCursorKeys();

        this.info = this.add.text(100, 100, 'Hello World', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });
    }

    update(time,delta)
    {
        this.camera3Deffect();
       
        if(this.cursor.left.isDown)
        {
            this.carcharacter.x-=10;
            this.carcharacter.play({ key: 'spritecar-l', repeat: 1 });
        }
        
        if(this.cursor.right.isDown)
        {
            this.carcharacter.x+=10;
            this.carcharacter.play({ key: 'spritecar-r', repeat: 1 });
        }

        if(!this.cursor.left.isDown && !this.cursor.right.isDown)
        {
            this.carcharacter.play({ key: 'spritecar-a', repeat: -1 });
        }

        if(this.cursor.up.isDown)
        {
            if(this.speed < 2)
            {
                this.speed+=0.1;
            }
        }else{
            if(this.speed>1)
            {
                this.speed-=0.1;
            }
        }

        if(this.speed>2 && this.carreteraAnimA)
        {
            this.carretera.play({ key: 'road-b', repeat: -1 });
            this.carreteraAnimA = false;
            this.carreteraAnimB = true;
        }

        if(this.speed<1.5 && this.carreteraAnimB)
        {
            this.carretera.play({ key: 'road-a', repeat: -1 });
            this.carreteraAnimA = true;
            this.carreteraAnimB = false;
        }
        //fin del ciclo update
    }

    camera3Deffect(){
        if(this.transformScale<2)
        {
            this.transformScale += 0.025*this.speed;
            this.elemento.y+=5*this.speed;
            this.elemento.x+=this.posx/40;
            this.elemento.setScale(this.transformScale,this.transformScale);
        }else{
            this.elemento.destroy();
            this.createElement();
        }
    }

    createElement(){
        this.posx =Math.random()*200 -100;
        this.elemento = this.physics.add.image(centerw+this.posx, centerhroad, 'rc-car');
        this.elemento.setScale(0.25,0.25);
        this.transformScale = 0.25;
    }
}