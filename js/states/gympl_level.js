var GumpleRush = GumpleRush || {};
var hrac = hrac || {};

GumpleRush.Gympl = function(){};
GumpleRush.Gympl.prototype = {

  preload: function() {
      this.time.advancedTiming = true;
    },

  create: function() {
    //stvoření hráče
    this.hrac = this.add.sprite(50, 100, "ruza");
    this.hrac.animations.add("beh", [2,3], 5, true);
    this.hrac.animations.play("beh");
 },

  update: function() {
  },

  render: function()
    {
        this.game.debug.text(this.game.time.fps || 'neviem', 10, 10, "#1ec133", "Press Start 2P");
    }

};
