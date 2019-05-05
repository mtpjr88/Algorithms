const Rest = require('./Rest');

class Main {
  constructor() {
    this.response = null;
    this.log = this.log.bind(this);
    this.log('Main Invocation');
    this.getRepos()
  }

  log(string) {
    const date = new Date();
    console.log(`{${date.toUTCString()}} - \n${string}`);
    return this;
  }


  async getRepos() {
     this.response = await Rest.get('test');
     return this;
  }



}

new Main();

