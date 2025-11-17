/**
 * Simple helper function to format the current UTC time.
 * @returns {string} The current time string.
 */
export function getCurrentTime(): string {
    // Explicitly returning the time part as a string
    return new Date().toUTCString().split(' ')[4] || '00:00:00';
}
