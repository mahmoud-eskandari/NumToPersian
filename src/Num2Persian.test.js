/* eslint no-use-before-define: 0 */  // --> OFF

import Num2Persian from './Num2Persian';


test('test 0', () => {
  expect(Num2Persian(0)).toBe('صفر');
});
test('test 100', () => {
  expect(Num2Persian(100)).toBe('یکصد');
});
test('test 101', () => {
  expect(Num2Persian(101)).toBe('یکصد و یک');
});
test('test 1250', () => {
  expect(Num2Persian(1250)).toBe('یک هزار و دویست و پنجاه');
});
test('test 10001', () => {
  expect(Num2Persian(10001)).toBe('ده هزار و یک');
});
test('test 101009', () => {
  expect(Num2Persian(101009)).toBe('یکصد و یک هزار و نه');
});
test('test 5000000', () => {
  expect(Num2Persian(5000000)).toBe('پنج میلیون');
});
test('test 10,000,000,000,000,001', () => {
  expect(Num2Persian('10000000000000001')).toBe('ده بیلیارد و یک');
});
test('test 10,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,002,001', () => {
  expect(Num2Persian('10000000000000000000000000000000000000000000000000000000002001')).toBe('ده دسیلیون و دو هزار و یک');
});
test('test 100,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,001', () => {
  expect(Num2Persian('100000000000000000000000000000000000000000000000000000000000000001')).toBe('یکصد دسیلیارد و یک');
});
