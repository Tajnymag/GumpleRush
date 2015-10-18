var GumpleRush = GumpleRush || {};
var hrac = hrac || {};

GumpleRush.Level1 = function(){};
GumpleRush.Level1.prototype = {

  preload: function() {
      this.game.time.advancedTiming = true;
    },

  create: function() {
    //stvoření hráče
    this.hrac = this.game.add.sprite(100, 300, 'ruza');//TODO
    this.hrac.scale.setTo(1.5);//TODO
 },

  update: function() {
  },

  render: function()
    {
        this.game.debug.text(this.game.time.fps || '--', 20, 70, "#00ff00", "40px Courier");
    }

};
