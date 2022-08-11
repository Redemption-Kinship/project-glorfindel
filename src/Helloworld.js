class HelloWorld {
  constructor() {

  }
  handleMessage(message) {
    const { chatRoom, content } = message;
    if (content === 'hello'){
    	chatRoom.sendMessage('world');
	}
  }
}

module.exports = {
	HelloWorld: HelloWorld
}