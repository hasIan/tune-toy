var Phaser = require('phaser');
var stateNames = ['spin', 'spin-scale'];
var screen = {
    x: window.innerWidth,
    y: window.innerHeight
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
