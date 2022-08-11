// const sum = require('../src/helloworld.js');

const HelloWorld = require('../src/Helloworld.js').HelloWorld;
// Object/Class representing a message from a user
const Message = require('../src/Message.js').Message;
// Object/Class representing a chat room.
const ChatRoom = require('../src/ChatRoom.js').ChatRoom;

// Jest automatic class mocks
jest.mock('../src/ChatRoom');

// Our test specific implementation of a ChatRoom instance
ChatRoom.mockImplementation(() => {
  return {
    // sendMessage method
    // set to a mock function so we can inspect how it's being interacted with (calls, arguments, etc)
    sendMessage: jest.fn()
  }
})

describe("HelloWorld", () => {
  let bot;
  let chatRoom;

  // Runs before each test. Used for cleaning up mocks and setting up variables that are often used
  beforeEach(() => {
    // Resets the mocks (clears all calls to functions, etc)
    ChatRoom.mockClear();

    bot = new HelloWorld();
    chatRoom = new ChatRoom(); // This will create our mock implementation as an instance
  })

  test('hello should respond with world', () => {
    const newMessage = 'hello';
    const want = 'world'

    const msg = new Message(chatRoom, newMessage)

    bot.handleMessage(msg);

    // Only one message should be sent
    expect(chatRoom.sendMessage).toBeCalledTimes(1);
    // The message sent should be 'world'
    expect(chatRoom.sendMessage).toBeCalledWith(want);

  })
  test('non-hello should be ignored', () => {
    const newMessage = 'LFF t2 thrang';

    const msg = new Message(chatRoom, newMessage)

    bot.handleMessage(msg);

    // Only one message should be sent
    expect(chatRoom.sendMessage).toBeCalledTimes(0);

  })

})

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });