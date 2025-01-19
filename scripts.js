/* The following two classes are the classes for the object instances I use in the menu app below*/
class Sauna {
    constructor (width, depth, height, profile, ceiling,) {
        this.width = width;
        this.depth = depth;
        this.height = height;
        this.profile = profile;
        this.ceiling = ceiling;
    }

    describe() {
        return `This sauna has a: 
            width of ${this.width} inches
            depth of ${this.depth} inches
            height of ${this.height} inches
            The wallboard profile is ${this.profile},
            and the ceiling board direction is ${this.ceiling}`
    }

    
}

class Wallboards {
    constructor ( coverage) {
        this.coverage = coverage;
    }

    describe() {
        return `The wallboard has a coverage of ${this.coverage} inches`
    }
}

/* this is the main class I use to drive the menu app program*/
class Menu {
    constructor() {
        this.sauna1 = new Sauna();
        this.lumberTypesArray =[];
        this.wallboard1 = new Wallboards();
        

    }
/*this is the start method*/
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch(selection){
                case `1`:
                    this.enterSaunaDims();
                    break;
                case `2`:
                    this.enterWallboard();
                    break;
                case `3`:
                    this.displaySaunaDims();
                    break;
                case `4` :
                    this.displayWallboard();
                    break;
                case `5`:
                    this.lumberTypes();
                    break;
                case `6`:
                    this.deleteLumbers();
                    break;
                case `7`:
                    this.displayLumbers();
                    break;
                case `8`:
                    this.calculateCoverage();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert(`GoodBye!`);
    }

    showMainMenuOptions() {
        return prompt(`
            0)Exit
            1)Enter Sauna Dimensions
            2)Enter Wall Board information
            3)Display Sauna Dimensions
            4)Display Wall Board information
            5)Enter Lumber Types
            6)Delete Lumber Types
            7)Display Lumber types
            8)Calculate Wall Boards
            `);
    }

    lumberTypesMenu() {
        return prompt(`Enter the name of the wood you wish to use
        0) to exit`);
    }

    enterSaunaDims() {
        this.sauna1.width = prompt("Enter the sauna width in inches");
        this.sauna1.depth = prompt("Enter the sauna depth in inches");
        this.sauna1.height = prompt("Enter the sauna height in inches");
        this.sauna1.profile = prompt("Enter T&G profile of wall lumber ('h` or `v` only)");
        this.sauna1.ceiling = prompt("Enter ceiling board direction ('fb' or 'lr' only)");

       alert (this.sauna1.describe());

    }
    
    enterWallboard(){
        this.wallboard1.coverage = prompt("Enter coverage in inches");

    }

    lumberTypes(){
  
        let woodAnswer = prompt(`Enter the name of the wood you wish to use.
            0) to bo back`);
            this.lumberTypesArray.push(woodAnswer);
            while (woodAnswer != 0){
                woodAnswer = prompt(`Enter the name of the wood you wish to use.
                    0) to bo back`);

                    if(woodAnswer!= 0){
                        this.lumberTypesArray.push(woodAnswer);
                }
            }
            /*The below bit of code was "noted out" because it was creating undesired behavior
            
            this.lumberTypesArray.push(woodAnswer);

            if (woodAnswer != 0) {
                woodAnswer = prompt(`Enter the name of the wood you wish to use.
                    0) to bo back`);
                    this.lumberTypesArray.push(woodAnswer);
            }*/
        
        }
    

    displaySaunaDims(){
        alert(this.sauna1.describe());
    }

    displayWallboard(){
        alert(this.wallboard1.describe());
    }

    displayLumbers() {

        let thisString = "";
        for (let i = 0; i < this.lumberTypesArray.length; i++) {
            thisString += i + ")" + this.lumberTypesArray[i] + ` \n`;

        }
        alert(`Current lumber types:
             ${thisString}`);
    }

    deleteLumbers(){

       let deleteSelection = prompt(`Enter index of lumber type you wish to delete`);
        if (deleteSelection > -1 && deleteSelection <= this.lumberTypesArray.length){
            this.lumberTypesArray.splice(deleteSelection, 1);
            alert(`Element removed`);
        }else{
            alert(`Invalid selection`)
        }

    }
/* this is the calculator logic to calculate lumber requirements for sauna walls */
    calculateCoverage(){
        let wallboardsCount = 0;
        let ceilingBoardsCount = 0;
        if(this.sauna1.profile == `h`){
            wallboardsCount = ((this.sauna1.height / this.wallboard1.coverage) + ((this.sauna1.height / this.wallboard1.coverage) * .12)) * 4;
    }else {
        wallboardsCount = ((this.sauna1.width / this.wallboard1.coverage) + ((this.sauna1.width / this.wallboard1.coverage) * .12)) * 4;
        }

        if(this.sauna1.ceiling == `lr`) {
            ceilingBoardsCount = (this.sauna1.depth / this.wallboard1.coverage + ((this.sauna1.depth / this.wallboard1.coverage) * .12));
        }else{
            ceilingBoardsCount = (this.sauna1.width / this.wallboard1.coverage + ((this.sauna1.width / this.wallboard1.coverage) * .12));
        }

        alert(`Total Wallboard count = ${wallboardsCount}
            Total ceilingboard count = ${ceilingBoardsCount}`);
    }
}
let menu = new Menu();
menu.start();