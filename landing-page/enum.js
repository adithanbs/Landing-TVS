const direction = {
     UP:"UP",
     DOWN : "DOWN",
     LEFT : "LEFT",
     RIGHT : "RIGHT"
 };

 function sayDirection(direction) {
     switch (direction) {
        case directon.UP:
        console.log("we are going UP!")
        break;
        case directon.DOWN:
        console.log("we are going DOWN!")
        break;
        case directon.LEFT:
        console.log("we are going LEFT !")
        break;
        case directon.RIGHT:
        console.log("we are going RIGHT!")
        break;
        default:
        console.log("we are going WORING DIRECTION!")
        break;
     }
 }

 sayDirection(direction);

