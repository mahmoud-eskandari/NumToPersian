/**
 * A function for convert a number to mixed Persian words
 * It's a wrapper to main convert function with Persian words only setting
 * @param input - The number to convert (as string or number)
 * @returns The Persian nums & word representation
 */
export declare function num2mixed(input: string | number): string;
/**
 * A wrapper to main convert function with Persian words only setting
 * @param input - The number to convert (as string or number)
 * @returns The Persian word representation
 */
declare const num2persian: (input: string | number) => string;
declare global {
    interface String {
        /**
         * Convert a string number to Persian words
         */
        num2persian(): string;
    }
    interface Number {
        /**
         * Convert a number to Persian words
         */
        num2persian(): string;
    }
}
/**
 * Helper function to convert an English number to Persian Number
 * @param input - Number or String Like: 123
 * @returns The Persian numbers Like: ۱۲۳
 */
export declare function en2fa(value: string | string): string;
/**
 * Helper function to convert a Persian number to English number
 * @param input - Number or String Like: ۱۲۳
 * @returns The Persian numbers Like: 123
 */
export declare function fa2en(value: string): string;
/**
 * Helper function to convert an English number to Persian Number with comma delimited, Money forma
 * @param input - Number or String Like: 123000
 * @returns The Persian numbers Like: ۱۲۳،۰۰۰
*/
export declare function moneyFormat(value: string | number): string;
export default num2persian;
