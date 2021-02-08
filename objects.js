let car = {
    name: "Ferrari",
    color: "red",
    started: false,
    start: function(){
        if(this.started == false) {
            console.log("Starting the " + this.name);
            this.started = true;
            console.log("Car started!");
        } else{
            console.log(this.name +" already started!");
        } 
    },
    stop: function(){
        if(this.started == true){
            console.log("Stopping the " + this.name);
            this.started = false;
            console.log("Car stoped!");
        } else {
            console.log(this.name + " not started!");
        } 
    }
};

//console.log(car.name);
//console.log(car.color);
car.start();
car.start();
//car.stop();