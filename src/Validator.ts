/*
 * @Email: allen0101stanton@outlook.com
 * @Author: ww
 * @Description: 
 */
/**
     * 验证中国大陆手机号码是否有效
     * @param phoneNumber - 要验证的手机号码
     * @returns 如果手机号码有效则返回true，否则返回false
     */
export function isValidChinesePhoneNumber(phoneNumber: string) {
    // 去除手机号码中的空格和特殊字符
    const sanitizedNumber = phoneNumber.replace(/[-()\s]/g, '');

    // 中国大陆手机号码验证规则
    const chinesePhoneNumberPattern = /^1\d{10}$/; // 11位数字，以1开头

    if (chinesePhoneNumberPattern.test(sanitizedNumber)) {
        // 号码前三位为号码段，用于更详细的验证
        const numberPrefix = sanitizedNumber.slice(0, 3);

        // 中国大陆常见号码段
        const commonPrefixes = [
            134, 135, 136, 137, 138, 139, 147, 150, 151, 152, 157, 158, 159, 165, 172, 178,182,
            183, 184, 187, 188, 195, 197, 198, 130, 131, 132, 145, 146, 155, 156, 166, 167,171,
            175, 176, 185, 186, 196, 133, 149, 153, 162, 173, 174, 177, 180, 181, 189,191, 193,
            199, 192
        ];

        return commonPrefixes.includes(Number(numberPrefix));
    }
    return false;
}


/**
 * 验证电子邮件地址是否合法
 * @param email - 要验证的电子邮件地址
 * @returns 如果电子邮件地址合法则返回true，否则返回false
 */
export function isValidEmail(email: string): boolean {
    // 电子邮件地址的正则表达式
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}