let d;

d = new Date();

d = d.toString();

d = new Date(2021, 1, 10, 12, 30, 0);

d = new Date('2021-07-10T12:30:00');
d = new Date('07/10/2012 12:30:00');
d = new Date('2022-07-10');
d = new Date('07-10-2022');

// TIME STAMPS
d = Date.now();
d = new Date('07-10-2022 11:30:00');
d = d.getTime();
d = d.valueOf();

d = new Date(1657477800000);

d = Math.floor(Date.now() / 1000);

console.log(d);
