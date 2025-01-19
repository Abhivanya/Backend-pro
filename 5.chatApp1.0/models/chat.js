const chats = [];
module.exports = class Chat {
  constructor(username, message) {
    this.username = username;
    this.message = message;
  }

  save() {
    chats.push({ username: this.username, message: this.message });
  }

  static fetchAll() {
    return this.chats;
  }
};
