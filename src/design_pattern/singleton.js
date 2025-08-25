class Database {
  constructor(url) {
    this.url = url;
  }

  static getInstance() {
    if (typeof Database.instance === "object") {
      return Database.instance;
    }
    Database.instance = new Database("http://local:8545");
    return Database.instance;
  }
}

const instance1 = Database.getInstance();
const instance2 = Database.getInstance();

console.log("Is the same? ", instance1 === instance2);
