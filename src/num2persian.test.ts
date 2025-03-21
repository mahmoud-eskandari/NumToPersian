
import num2persian  from './num2persian';

describe('num2persian', () => {
  it('should convert zero correctly', () => {
    expect(num2persian(0)).toBe('صفر');
    expect(num2persian('0')).toBe('صفر');
  });

  it('should convert small integers correctly', () => {
    expect(num2persian(1)).toBe('یک');
    expect(num2persian(10)).toBe('ده');
    expect(num2persian(19)).toBe('نوزده');
    expect(num2persian(20)).toBe('بیست');
    expect(num2persian(21)).toBe('بیست و یک');
    expect(num2persian(99)).toBe('نود و نه');
  });

  it('should convert large integers correctly', () => {
    expect(num2persian(100)).toBe('یکصد');
    expect(num2persian(1000)).toBe('یک هزار');
    expect(num2persian(1000000)).toBe('یک میلیون');
    expect(num2persian(123456789)).toBe('یکصد و بیست و سه میلیون و چهارصد و پنجاه و شش هزار و هفتصد و هشتاد و نه');
  });

  it('should handle negative numbers correctly', () => {
    expect(num2persian(-1)).toBe('منفی یک');
    expect(num2persian(-123)).toBe('منفی یکصد و بیست و سه');
    expect(num2persian('-1000')).toBe('منفی یک هزار');
  });

  it('should handle float numbers correctly', () => {
    expect(num2persian(1.5)).toBe('یک ممیز پنج دهم');

    expect(num2persian(-99.99)).toBe('منفی نود و نه ممیز نود و نه صدم');
    expect(num2persian('0.88')).toBe('صفر ممیز هشتاد و هشت صدم');
  });

  it('should handle edge cases', () => {
    expect(num2persian('abc')).toBe('صفر'); // Invalid input
    expect(num2persian('')).toBe('صفر'); // Empty string
    expect(num2persian(NaN)).toBe('صفر'); // NaN
    expect(num2persian('1234567890123456789012345678901234567890123456789012345678901234567890')).toBe('خارج از محدوده'); // Very large number
  });

});