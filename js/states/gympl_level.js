var GumpleRush = GumpleRush || {};
var hrac = hrac || {};

GumpleRush.Gympl = function(){};
GumpleRush.Gympl.prototype = {

  preload: function() {
      this.time.advancedTiming = true;
      this.game.load.tilemap("gymplik", "assets/gumple/gymplik.json", null, Phaser.Tilemap.TILED_JSON);
      this.game.load.image("dvere", "assets/gumple/sady_dlazdic/dvere.png");
      this.game.load.image("schody", "assets/gumple/sady_dlazdic/schody.png");
      this.game.load.image("podlaha_strecha_barvy", "assets/gumple/sady_dlazdic/podlaha_strecha_barvy.png");
    },

  create: function() {

    var mapa;
    var kolize;

    this.game.stage.backgroundColor = "#0b7cb4";
    this.mapa = this.game.add.tilemap("gymplik");
    this.mapa.addTilesetImage("kolize", "dvere");
    this.mapa.addTilesetImage("kolize", "schody");
    this.mapa.addTilesetImage("kolize", "podlaha_strecha_barvy");

    //this.kolize = this.mapa.createLayer("kolize");

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
