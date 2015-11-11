var GumpleRush = GumpleRush || {};
var hrac = hrac || {};

GumpleRush.Gympl = function(){};
GumpleRush.Gympl.prototype = {

  preload: function() {
      this.time.advancedTiming = true;
    },

  create: function() {
    //stvoření hráče
    this.hrac = this.add.sprite(100, 300, "ruza");//TODO
    this.hrac.animations.add("beh", [2,3], 5, true);
    this.hrac.animations.play("beh");
 },

  update: function() {
  },

  render: function()
    {
        this.game.debug.text(this.game.time.fps || '--', 20, 70, "#00ff00", "40px Courier");
    }

};
