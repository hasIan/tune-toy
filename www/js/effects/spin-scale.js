var Phaser = require('phaser');

module.exports = function (game, screen) {
    return {
        preload: function () {
            // Load assets
            game.load.image('logo', '../../img/logo.png');
            game.physics.startSystem(Phaser.Physics.ARCADE);
        },
        create: function () {
            // Set up the stage
            this.count = 0;
            this.sprite = game.add.sprite(screen.x / 2, screen.y / 2, 'logo');
            this.sprite.anchor.setTo(0.5, 0.5);
            game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
            this.sprite.body.bounce.set(0.85);
            this.sprite.body.collideWorldBounds = true;
            this.sprite.body.velocity.setTo(500, 500);
        },
        update: function () {
            // Main loop; called 60 times/s
            var scale = 0.2 + (Math.cos(Math.PI * this.count / 720) + 1) * 0.4;
            this.sprite.scale.setTo(scale, scale);
            this.sprite.body.angularVelocity = Math.cos(Math.PI * this.count / 360) * 200;
            this.count = (this.count + 2) % 1440;
            if (Math.abs(this.sprite.body.velocity.x) < 10) {
                this.sprite.body.velocity.setTo(500, 500);
            }
        }
    }
};
