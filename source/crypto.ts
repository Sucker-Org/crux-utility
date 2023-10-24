/*
 * @Email: allen0101stanton@outlook.com
 * @Author: ww
 * @Description: 
 */
/**
 * @description: 
 * @param {string} address
 * @param {string} position
 * @param {number} ellipsisLength
 * @return {string}
 */
export const formatAddress = (address: string, position: "tail" | "middle", ellipsisLength: number = 3): string => {
    const ellipsis = "...";
    return address.slice(0, position === "tail" ? 10 : 5) + (position === "tail" ? ellipsis : ellipsis + address.slice(-ellipsisLength));
};