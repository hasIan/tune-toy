(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
var Phaser = (typeof window !== "undefined" ? window.Phaser : typeof global !== "undefined" ? global.Phaser : null);

module.exports = function (game, screen) {
    return {
        preload: function () {
            // Load assets
            game.load.image('logo', 'img/logo.png');
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

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
(function (global){
var Phaser = (typeof window !== "undefined" ? window.Phaser : typeof global !== "undefined" ? global.Phaser : null);

module.exports = function (game, screen) {
    return {
        preload: function () {
            // Load assets
            game.load.image('logo', 'img/logo.png');
            game.physics.startSystem(Phaser.Physics.ARCADE);
        },
        create: function () {
            // Set up the stage
            this.count = 0;
            this.sprite = game.add.sprite(screen.x / 2, screen.y / 2, 'logo');
            this.sprite.anchor.setTo(0.5, 0.5);
            // game.game.backgroundColor = '#3498db';
            game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
            this.sprite.body.bounce.set(1);
            this.sprite.body.collideWorldBounds = true;
            this.sprite.body.velocity.setTo(500, 500);
        },
        update: function () {
            // Main loop; called 60 times/s
            this.sprite.body.angularVelocity = Math.cos(Math.PI / 180 * this.count++) * 360;
            this.count %= 360;
        }
    }
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
(function (global){
var Phaser = (typeof window !== "undefined" ? window.Phaser : typeof global !== "undefined" ? global.Phaser : null);
var stateNames = ['spin', 'spin-scale'];
var screen = {
    x: window.innerWidth - 20,
    y: window.innerHeight - 20
};
var stage = new Phaser.Game(screen.x, screen.y, Phaser.AUTO, 'mainDiv');
var states = {
  'spin': require('./effects/spin')(stage, screen),
  'spin-scale': require('./effects/spin-scale')(stage, screen)
};
var selectedState = window.location.hash.slice(1);
selectedState = states[selectedState] ? selectedState : 'spin'

function loadStates(states, game, screen) {
    var state, i;
    for (state in states) {
        game.state.add(state, states[state]);
        console.log('Added state', state);
    }
}

loadStates(states, stage, screen);
stage.state.start(selectedState);

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./effects/spin":2,"./effects/spin-scale":1}]},{},[3])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbW9sZWUvd29ya3NwYWNlL3R1bmUtdG95L25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9pbW9sZWUvd29ya3NwYWNlL3R1bmUtdG95L3d3dy9qcy9lZmZlY3RzL3NwaW4tc2NhbGUuanMiLCIvVXNlcnMvaW1vbGVlL3dvcmtzcGFjZS90dW5lLXRveS93d3cvanMvZWZmZWN0cy9zcGluLmpzIiwiL1VzZXJzL2ltb2xlZS93b3Jrc3BhY2UvdHVuZS10b3kvd3d3L2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xudmFyIFBoYXNlciA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LlBoYXNlciA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwuUGhhc2VyIDogbnVsbCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGdhbWUsIHNjcmVlbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHByZWxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIExvYWQgYXNzZXRzXG4gICAgICAgICAgICBnYW1lLmxvYWQuaW1hZ2UoJ2xvZ28nLCAnaW1nL2xvZ28ucG5nJyk7XG4gICAgICAgICAgICBnYW1lLnBoeXNpY3Muc3RhcnRTeXN0ZW0oUGhhc2VyLlBoeXNpY3MuQVJDQURFKTtcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBTZXQgdXAgdGhlIHN0YWdlXG4gICAgICAgICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlID0gZ2FtZS5hZGQuc3ByaXRlKHNjcmVlbi54IC8gMiwgc2NyZWVuLnkgLyAyLCAnbG9nbycpO1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcbiAgICAgICAgICAgIGdhbWUucGh5c2ljcy5lbmFibGUodGhpcy5zcHJpdGUsIFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5ib2R5LmJvdW5jZS5zZXQoMC44NSk7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5ib2R5LnZlbG9jaXR5LnNldFRvKDUwMCwgNTAwKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBNYWluIGxvb3A7IGNhbGxlZCA2MCB0aW1lcy9zXG4gICAgICAgICAgICB2YXIgc2NhbGUgPSAwLjIgKyAoTWF0aC5jb3MoTWF0aC5QSSAqIHRoaXMuY291bnQgLyA3MjApICsgMSkgKiAwLjQ7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5zY2FsZS5zZXRUbyhzY2FsZSwgc2NhbGUpO1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUuYm9keS5hbmd1bGFyVmVsb2NpdHkgPSBNYXRoLmNvcyhNYXRoLlBJICogdGhpcy5jb3VudCAvIDM2MCkgKiAyMDA7XG4gICAgICAgICAgICB0aGlzLmNvdW50ID0gKHRoaXMuY291bnQgKyAyKSAlIDE0NDA7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5zcHJpdGUuYm9keS52ZWxvY2l0eS54KSA8IDEwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUuYm9keS52ZWxvY2l0eS5zZXRUbyg1MDAsIDUwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG59KS5jYWxsKHRoaXMsdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KSIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbnZhciBQaGFzZXIgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5QaGFzZXIgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsLlBoYXNlciA6IG51bGwpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChnYW1lLCBzY3JlZW4pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcmVsb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBMb2FkIGFzc2V0c1xuICAgICAgICAgICAgZ2FtZS5sb2FkLmltYWdlKCdsb2dvJywgJ2ltZy9sb2dvLnBuZycpO1xuICAgICAgICAgICAgZ2FtZS5waHlzaWNzLnN0YXJ0U3lzdGVtKFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gU2V0IHVwIHRoZSBzdGFnZVxuICAgICAgICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZSA9IGdhbWUuYWRkLnNwcml0ZShzY3JlZW4ueCAvIDIsIHNjcmVlbi55IC8gMiwgJ2xvZ28nKTtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gICAgICAgICAgICAvLyBnYW1lLmdhbWUuYmFja2dyb3VuZENvbG9yID0gJyMzNDk4ZGInO1xuICAgICAgICAgICAgZ2FtZS5waHlzaWNzLmVuYWJsZSh0aGlzLnNwcml0ZSwgUGhhc2VyLlBoeXNpY3MuQVJDQURFKTtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLmJvZHkuYm91bmNlLnNldCgxKTtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLmJvZHkudmVsb2NpdHkuc2V0VG8oNTAwLCA1MDApO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIE1haW4gbG9vcDsgY2FsbGVkIDYwIHRpbWVzL3NcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLmJvZHkuYW5ndWxhclZlbG9jaXR5ID0gTWF0aC5jb3MoTWF0aC5QSSAvIDE4MCAqIHRoaXMuY291bnQrKykgKiAzNjA7XG4gICAgICAgICAgICB0aGlzLmNvdW50ICU9IDM2MDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbn0pLmNhbGwodGhpcyx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pIiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xudmFyIFBoYXNlciA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LlBoYXNlciA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwuUGhhc2VyIDogbnVsbCk7XG52YXIgc3RhdGVOYW1lcyA9IFsnc3BpbicsICdzcGluLXNjYWxlJ107XG52YXIgc2NyZWVuID0ge1xuICAgIHg6IHdpbmRvdy5pbm5lcldpZHRoIC0gMjAsXG4gICAgeTogd2luZG93LmlubmVySGVpZ2h0IC0gMjBcbn07XG52YXIgc3RhZ2UgPSBuZXcgUGhhc2VyLkdhbWUoc2NyZWVuLngsIHNjcmVlbi55LCBQaGFzZXIuQVVUTywgJ21haW5EaXYnKTtcbnZhciBzdGF0ZXMgPSB7XG4gICdzcGluJzogcmVxdWlyZSgnLi9lZmZlY3RzL3NwaW4nKShzdGFnZSwgc2NyZWVuKSxcbiAgJ3NwaW4tc2NhbGUnOiByZXF1aXJlKCcuL2VmZmVjdHMvc3Bpbi1zY2FsZScpKHN0YWdlLCBzY3JlZW4pXG59O1xudmFyIHNlbGVjdGVkU3RhdGUgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKTtcbnNlbGVjdGVkU3RhdGUgPSBzdGF0ZXNbc2VsZWN0ZWRTdGF0ZV0gPyBzZWxlY3RlZFN0YXRlIDogJ3NwaW4nXG5cbmZ1bmN0aW9uIGxvYWRTdGF0ZXMoc3RhdGVzLCBnYW1lLCBzY3JlZW4pIHtcbiAgICB2YXIgc3RhdGUsIGk7XG4gICAgZm9yIChzdGF0ZSBpbiBzdGF0ZXMpIHtcbiAgICAgICAgZ2FtZS5zdGF0ZS5hZGQoc3RhdGUsIHN0YXRlc1tzdGF0ZV0pO1xuICAgICAgICBjb25zb2xlLmxvZygnQWRkZWQgc3RhdGUnLCBzdGF0ZSk7XG4gICAgfVxufVxuXG5sb2FkU3RhdGVzKHN0YXRlcywgc3RhZ2UsIHNjcmVlbik7XG5zdGFnZS5zdGF0ZS5zdGFydChzZWxlY3RlZFN0YXRlKTtcblxufSkuY2FsbCh0aGlzLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSkiXX0=
