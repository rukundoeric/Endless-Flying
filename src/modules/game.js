/* eslint-disable no-undef */
import { gameConfig } from './config';

const game = new Phaser.Game(gameConfig);
const mainState = {
  preload() {
    game.load.image('plane', '../assets/images/plane.png');
    game.load.image('pipe', '../assets/images/pipe.png');
    game.load.image('background', '../assets/images/background.png');
  },
  create() {
    game.add.tileSprite(0, 0, 1000, 600, 'background');
    // game.stage.backgroundColor = '#71c5cf';

    // start physics
    game.physics.startSystem(Phaser.Physics.ARCADE);
    this.plane = game.add.sprite(100, 245, 'plane');
    // appyphyisics to plane
    game.physics.arcade.enable(this.plane);
    this.plane.body.gravity.y = 1000;

    // jump
    const spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.add(this.jump, this);
    // Pause
    const pKey = game.input.keyboard.addKey(Phaser.Keyboard.P);
    pKey.onDown.add(this.pause, this);


    this.pipes = game.add.group();

    this.timer = game.time.events.loop(2000, this.addRowOfPipes, this);

    this.score = 0;
    this.labelScore = game.add.text(20, 20, '0', { font: '30px Arial', fill: '#fff' });


    this.plane.width = 68;
    this.plane.height = 55;
  },
  pause() {
    if (game.paused) {
      game.paused = false;
    } else {
      game.paused = true;
    }
  },
  update() {
    // restart game if plane goes above or blow screen
    if (this.plane.y < 0 || this.plane.y > 600) {
      this.restartGame();
    }
    game.physics.arcade.overlap(this.plane, this.pipes, this.restartGame, null, this);
  },
  jump() {
    this.plane.body.velocity.y = -350;
  },
  restartGame() {
    game.state.start('main');
  },
  addOnePipe(x, y) {
    const pipe = game.add.sprite(x, y, 'pipe');
    this.pipes.add(pipe);
    game.physics.arcade.enable(pipe);
    pipe.body.velocity.x = -200;
    pipe.checkWorldBounds = true;
    pipe.outOfBoundsKill = true;
  },
  addRowOfPipes() {
    const hole = Math.floor(Math.random() * 4) + 1;
    for (let i = 0; i < 10; i += 1) {
      if (i !== hole && i !== hole + 1) {
        this.addOnePipe(700, i * 100 + 10);
      }
    }
    this.score += 100;
    this.labelScore.text = this.score;
  },
};

export default () => {
  game.state.add('main', mainState);
  game.state.start('main');
};