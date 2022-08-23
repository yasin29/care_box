const R = 6371e3; // metres
const x = 23.760553125947684 * Math.PI / 180;
const y = 23.813676977644572 * Math.PI / 180;
const i = (23.813676977644572 - 23.760553125947684) * Math.PI / 180;
const z = (90.42413504023418 - 90.38927467742258) * Math.PI / 180;

const a = Math.sin(i / 2) * Math.sin(i / 2) +
    Math.cos(x) * Math.cos(y) *
    Math.sin(z / 2) * Math.sin(z / 2);
const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

const d = (R * c) / 1000;
console.log(d)