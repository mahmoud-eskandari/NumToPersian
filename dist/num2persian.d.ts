/**
 * Main function to convert a number to Persian words
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
export default num2persian;
