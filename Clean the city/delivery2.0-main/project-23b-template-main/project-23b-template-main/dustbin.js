class dustbin extends BaseClass {
    constructor(x,y,width,height){
        super(x,y,width,height);
       
    }
    display(){
        super.display();
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
    }
}