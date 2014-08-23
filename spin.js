var sizeX = window.innerWidth - 20
  , sizeY = window.innerHeight - 20
  ;

var mainState = {
  preload: function() {
    // Load assets
    stage.load.image('logo', 'logo.png');
    stage.physics.startSystem(Phaser.Physics.ARCADE);
  },
  create: function() {
    // Set up the stage
    this.count = 0;
    this.sprite = stage.add.sprite(sizeX/2, sizeY/2, 'logo');
    this.sprite.anchor.setTo(0.5, 0.5);
    // stage.stage.backgroundColor = '#3498db';
    stage.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    this.sprite.body.bounce.set(1);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.body.velocity.setTo(500, 500);
  },
  update: function() {
    // Main loop; called 60 times/s
    this.sprite.body.angularVelocity = Math.cos(Math.PI * this.count++/180) * 360;
    this.count %= 360;
  }
};

var stage = new Phaser.Game(sizeX, sizeY, Phaser.AUTO, 'tuneDiv');
stage.state.add('main', mainState);
stage.state.start('main');
