const studentA = {
  name: "Pepa",
  surname: "Pig",
  lastNightSleepHours: 4,
  mark: 4,
  introduceYourself() {
    return `Hola me llamo ${this.name} ${this.surname} y he dormido ${this.lastNightSleepHours} horas`;
  },
};
console.log(studentA.introduceYourself());
