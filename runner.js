 class Runner{
    constructor(){
        this.r = 100;
        this.x = 50;
        this.y = height - 50;
        this.vy = 0;
        this.gravity = 2
 }
        show(){
            noFill();
            fill(0, 250, 255)  
            rectMode(CENTER);      
            rect(this.x, this.y, this.r, this.r);
        }
        move(){
            this.v += this.vy;
            this.vy += this.gravity;
            this.y = constrain(this.y,0, height - this.r)
        }
        jump(){
            if(this.y == height - this.r){
            this.vy = -25;
            }
        }

        hits(train){
        return collideRectRect(this.x ,this.y ,this.r ,this.r ,train.x ,train.y ,train.r ,train.r );
        }        
 }