class ElectricalDevice {
    constructor(name, power){
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }
    // прибор включенный в розетку
    plugIn() {
        console.log(this.name + "it is plugged!");
        this.isPlugged = true;
    }

    // прибор выключеный из розетки
    unplug() {
        console.log(this.name + "it is unplugged!");
        this.isPlugged = false;
    }
}

// Лампа
class Lamp extends ElectricalDevice {
    constructor (name, power, bulbType) {
        super(name, power);
        this.bulbType = bulbType;
        this.isPlugged = true;
    }
}

// ПК
class Computer extends ElectricalDevice {
    constructor(name, power, type, functionality) {
        super(name, power);
        this.type = type;
        this.functionality = functionality;
        this.isPlugged = false;
    }
}

// экземпляр лампы
const tableLamp = new Lamp("Table lamp", 25, "LED");

// экземпляр ПК
const homePC = new Computer("Table PC", 410, "stationary", "for work");

// отключить лампу из розетки
tableLamp.unplug();

// включить ПК в розетку
homePC.plugIn();

// результат
console.log(homePC)
console.log(tableLamp)