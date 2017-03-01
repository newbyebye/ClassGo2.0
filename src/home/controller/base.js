'use strict';

export default class extends think.controller.base {
  /**
   * some base method in here
   */

  __display(){
    console.log(this);
    if (checkMobile(this.userAgent())) {
      return this.display(`mobile/${this.http.controller}/${this.http.action}`)
    } else {
      return this.display();
    }
  }
}