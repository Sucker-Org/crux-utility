/*
 * @Email: allen0101stanton@outlook.com
 * @Author: ww
 * @Description: 
 */
/**
 * @description: 格式化时间戳
 * @param {Date} date - 要格式化的日期对象
 * @param {string} fmt - 格式字符串，如 "yyyy-MM-dd hh:mm:ss"
 * @return {string} - 格式化后的时间戳字符串
 */
export function formatDates(date: Date, fmt: string): string {
    const options = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        'S': date.getMilliseconds(), // 毫秒
    };

    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').slice(-RegExp.$1.length));
    }

    for (const key in options) {
        if (new RegExp('(' + key + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (options[key]) : (`00${options[key]}`.slice(('' + options[key]).length)));
        }
    }

    return fmt;
}

/**
 * @description: 将时间戳格式化为指定的日期和时间格式
 * @param {number} timestamp - 时间戳
 * @param {string} format - 格式字符串，如 "yyyy-MM-dd hh:mm:ss"
 * @return {string} - 格式化后的日期和时间字符串
 */
export function formatTimestamp(timestamp: number, format: string): string {
    const date = new Date(timestamp);
    const options = {
        'yyyy': date.getFullYear(),
        'MM': String(date.getMonth() + 1).padStart(2, '0'),
        'dd': String(date.getDate()).padStart(2, '0'),
        'hh': String(date.getHours()).padStart(2, '0'),
        'mm': String(date.getMinutes()).padStart(2, '0'),
        'ss': String(date.getSeconds()).padStart(2, '0'),
    };

    return format.replace(/(yyyy|MM|dd|hh|mm|ss)/g, (match) => options[match]);
}