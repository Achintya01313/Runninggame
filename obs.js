class Obs{

    constructor(){
        this.r = 75;
        this.x = width;
        this.y = height - this.r;
    }

    move(){
        this.x -= 15;
    }

    show(){
        fill(255, 0, 0);
         image(obssprite.png,this.x, this.y, this.r, this.r)
    }

}