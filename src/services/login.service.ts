import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  isLogin: boolean = false;

  constructor() {
  }

  login(user: string, pass: string) {
    if(user === 'test' && pass === 'test') {
      this.isLogin = true;
      return true;
    }
    return false;
  }

  logout() {
    this.isLogin = false;
  }
}
