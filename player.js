function Player() {
    this.w = 80;
    this.h = 144;

    this.x = floor(width/2 - this.w/2);
    this.y = floor((3 * height/4) - this.h/2);

    this.show = function() {
        image(car1, this.x, this.y);
    }

    this.turnLeft = function() {
        this.x -= 5;
        this.x = constrain(this.x, 0, width-this.w);
    }

    this.turnRight = function() {
        this.x += 2;
        this.x = constrain(this.x, 0, width-this.w);
    }
}
