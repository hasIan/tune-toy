var Phaser = require('./phaser.min');
var stateNames = ['spin', 'spin-scale'];

function loadStates(stateNames, game, screen) {
    var state;
    for (stateName in stateNames) {
        state = require('./effects/' + stateName)(game, screen);
        game.state.add(stateName, state);
        console.log('Added state', stateName);
    }
}

var screen = {
    x: window.innerWidth - 20,
    y: window.innerHeight - 20
};

var stage = new Phaser.Game(screen.x, screen.y, Phaser.AUTO, 'tuneDiv');
loadStates(stateNames, stage, screen);
stage.state.start('spin');
