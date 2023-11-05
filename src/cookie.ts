/*
 * @Email: allen0101stanton@outlook.com
 * @Author: ww
 * @Description: 
 */
export class CookieHelper {
    /**
     * 设置Cookie
     * @param name - Cookie的名称
     * @param value - Cookie的值
     * @param days - Cookie的过期天数
     */
    static set(name: string, value: string, days: number) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = `expires=${date.toUTCString()}`;
      document.cookie = `${name}=${value}; ${expires}; path=/`;
    }
  
    /**
     * 获取Cookie的值
     * @param name - Cookie的名称
     * @returns Cookie的值，如果Cookie不存在则返回null
     */
    static get(name: string): string | null {
      const cookieName = `${name}=`;
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
          return cookie.substring(cookieName.length, cookie.length);
        }
      }
      return null;
    }
  
    /**
     * 删除Cookie
     * @param name - 要删除的Cookie的名称
     */
    static delete(name: string) {
      this.set(name, '', -1);
    }
  }
