const names = [
  'AA',
  'BB',
  'CC',
  'DD',
  'EE',
  'FF',
  'aaa',
  'bbb',
  'ccc',
  'ddd',
  'eee',
  'fff',
  'yyy',
  'ttt',
  'rrr',
  'iii',
  'ooo',
  'lll',
  'mmm',
  'ppp',
  '897',
];

const numbers = [
  '00',
  '11',
  '22',
  '33',
  '44',
  '55',
  '66',
  '777',
  '888',
  '999',
  '000',
  '333444',
  '5555333',
  '777666',
  '77543',
  '78544',
  '757453',
  '123534',
  '87645',
  '324722',
  '67575',
];

const bodies = [
  'afsdfasfasgdfg',
  'fghfghdf',
  'sdreyrty',
  '4564756',
  'cvbcv ',
  'gfhtrydfghkj3',
  'qwsdf',
  'dsfsdgdf',
  'cvbx',
  'sadfgjfgfh',
  'qewfdfbrt',
  'uihjnm',
  'xcvxcfdger',
  '345567rgsdg',
  'nm,cvbcv345',
  'bgmxcvf57',
  'wsaczxvcvbgf',
  '5678refgj',
  ',nbncvg346',
  'xcbcvnjrtyrt',
  '3456dfgdfg',
];

class Controller {
  async getMessage() {
    let randomRoomId = newRandomNumber(0, 20);
    let randomMessage = names[newRandomNumber(0, 20)];
    var randomDirection = 'incoming';

    if (newRandomNumber(0, 1) == 0) {
      randomDirection = 'incoming';
    } else {
      randomDirection = 'outgoing';
    }

    let message = {
      roomId: randomRoomId,
      fromName: names[randomRoomId],
      fromNumber: numbers[randomRoomId],
      body: {
        receivedAt: new Date().toDateString().toString(),
        body: randomMessage,
        direction: randomDirection,
      },
    };
    return new Promise((resolve, _) => resolve(message));
  }
}

function newRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = Controller;
