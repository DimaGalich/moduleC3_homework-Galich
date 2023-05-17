function ElectricalDevice(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

// прибор включенный в розетку
ElectricalDevice.prototype.plugIn = function() {
    console.log(this.name + "it is plugged!");
    this.isPlugged = true;
};

// прибор выключеный из розетки
ElectricalDevice.prototype.unplug = function() {
    console.log(this.name + "it is unplugged!");
    this.isPlugged = false;
};

// Лампа
function Lamp(name, brand, power, bulbType) {
    this.name = name;
    this.power = power;
    this.bulbType = bulbType;
    this.isPlugged = true;
}

Lamp.prototype = new ElectricalDevice();

// ПК
function Computer(name, power, type, functionality) {
    this.name = name;
    this.power = power;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
}

Computer.prototype = new ElectricalDevice();

// экземпляр лампы
const tableLamp = new Lamp("Table lamp",  25, "LED");

// экземпляр ПК
const homePC = new Computer("Table PC", 410, "stationary", "for work");

// отключить лампу из розетки
tableLamp.unplug();

// включить ПК в розетку
homePC.plugIn();


console.log(homePC)
console.log(tableLamp)