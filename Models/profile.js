const users = []

module.exports = class Profile{


    constructor(name,height,weight,age,PA,gender){
        this.name = name
        this.height=height;
        this.weight=weight;
        this.age=age;
        this.PA=PA;
        this.gender=gender;

    }

    calcDailyCalories(){
        let EER;
        if(this.gender == 1){
            EER = 662 - (9.53 * this.age) + this.PA * ((15.91 * this.weight) + (539.6 * this.height) );
        }else{
            EER = 354 - (6.91 * this.age) + this.PA * ((9.36 * this.weight) + (726 * this.height) );
        }
         return EER;
    }

    save() {
        users.push(this);
    }

    static fetchAll() {
        return users;
    }

    

}


