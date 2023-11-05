/*
 * @Email: allen0101stanton@outlook.com
 * @Author: ww
 * @Description: 
 */
/**
 * @description: Use {@link formatWalletAddress} instead.
 * @param {string} address - The address to format.
 * @param {string} position - The position of ellipsis.
 * @param {number} ellipsisLength - The length of ellipsis.
 * @returns {string} The formatted address.
 */
export const formatWalletAddress = (address: string, position: "tail" | "middle", ellipsisLength: number = 3): string => {
    const ellipsis = "...";
    return address.slice(0, position === "tail" ? 10 : 5) + (position === "tail" ? ellipsis : ellipsis + address.slice(-ellipsisLength));
};
export { formatWalletAddress as formatAddress };