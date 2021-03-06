const sum = require('./sum');
// 1 + 2 เท่ากับ 3
test('1 + 2 เท่ากับ 3', ()=> {
  expect(sum(1,2)).toBe(3);
});

// 20 + 1 เท่ากับ 21
test('20 + 1 เท่ากับ 21', ()=> {
  expect(sum(20,1)).toBe(21);
});

// 2 + 5 เท่ากับ ?
test('2 + 5 เท่ากับ 7', ()=> {
  expect(sum(2,5)).toBe(7);
});

// ทำอีก 3 อัน โดยการพิมพ์เอง อย่า copy

// 40.0 + 9.0 เท่ากับ ?
test('40 + 9 เท่ากับ 49', ()=> {
  expect(sum(40,9)).toBe(49);
});
// 100 + 98 เท่ากับ ?
test('100 + 98 เท่ากับ 198', ()=> {
  expect(sum(100,98)).toBe(198);
});

// 33 + 7 เท่ากับ ?
test('33 + 7 เท่ากับ 40' , ()=> {
  expect(sum(33,7)).toBe(40);
});
