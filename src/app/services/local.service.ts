import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  public static saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public static getData(key: string) {
    return localStorage.getItem(key)
  }

  public static removeData(key: string) {
    localStorage.removeItem(key);
  }

  public static clearData() {
    localStorage.clear();
  }

  public static getLoggedUser() {
    let user = localStorage.getItem('user');
    if (user != null) {
      return JSON.parse(user);
    }
  }
}
