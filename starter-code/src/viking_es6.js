class Soldier {

    constructor(healthArg, strengthArg){
      this.health = healthArg;
      this.strength = strengthArg;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(amountOfDamage){
        this.health -= amountOfDamage;
    }

}
    

class Viking extends Soldier {

    constructor(name, health, strength){
        // super as a function that receives 2 arguments
        super(health, strength);
        this.name = name;
    }

    receiveDamage(amount){
        // use super as the object to reach receiveDamage() method from the parent
        super.receiveDamage(amount);

        if(this.health > 0){
            return `${this.name} has received ${amount} points of damage`;
        } else{
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry(){
        return "Odin Owns You All!";
    }
}
    
    
class Saxon extends Soldier{

    receiveDamage(amount){

        super.receiveDamage(amount);

        if(this.health > 0){
            return `A Saxon has received ${amount} points of damage`
        } else{
            return `A Saxon has died in act of combat`
        }
    }

}
    
    

class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(whichViking){
        this.vikingArmy.push(whichViking);
    }

    addSaxon(whichSaxon){
        this.saxonArmy.push(whichSaxon);
    }

    vikingAttack(){

        var randVik = Math.floor(Math.random()* this.vikingArmy.length);
        var randSax = Math.floor(Math.random()* this.saxonArmy.length);
        var blah = theWar.saxonArmy[randSax].receiveDamage(  theWar.vikingArmy[randVik].attack());


        if(this.saxonArmy[randSax].health <=0){
            this.saxonArmy.splice(randSax, 1);
        }

        return blah;
    }


    saxonAttack(){

        var randVik = Math.floor(Math.random()* this.vikingArmy.length);
        var randSax = Math.floor(Math.random()* this.saxonArmy.length);
        var blah = theWar.vikingArmy[randVik].receiveDamage(  theWar.saxonArmy[randSax].attack());
        
        if(this.vikingArmy[randVik].health <= 0){
            this.vikingArmy.splice(randVik,1);
        }
        return blah;
    }
    

}
    
    // var theWar = new War();
    // var saxon1 = new Saxon(50, 50)
    // var saxon2 = new Saxon(60, 50)
    // var saxon3 = new Saxon(50, 60)
    // var saxon4 = new Saxon(90, 50)
    // var saxon5 = new Saxon(50, 100)
    // theWar.addSaxon(saxon1)
    // theWar.addSaxon(saxon2)
    // theWar.addSaxon(saxon3)
    // theWar.addSaxon(saxon4)
    // theWar.addSaxon(saxon5)
    // var vik1 = new Viking('ragnara', 100, 150)
    // var vik2 = new Viking('erlock', 120, 120)
    // var vik3 = new Viking('manyar', 180, 100)
    // var vik4 = new Viking('brok', 100, 150)
    // var vik5 = new Viking('erlika', 100, 150)
    // theWar.addViking(vik1)
    // theWar.addViking(vik2)
    // theWar.addViking(vik3)
    // theWar.addViking(vik4)
    // theWar.addViking(vik5)
    
    
    // console.log(theWar);
    
    
    //   theWar.saxonAttack();
    //   theWar.vikingAttack();
    //   theWar.saxonAttack();
    //   theWar.vikingAttack();
    
    
    
    // console.log(theWar);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    