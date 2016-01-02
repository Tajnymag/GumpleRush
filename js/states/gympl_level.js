var GumpleRush = GumpleRush || {};
var hrac = hrac || {};

GumpleRush.Gympl = function(){};
GumpleRush.Gympl.prototype = {

  preload: function() {
      this.time.advancedTiming = true;
      this.game.load.tilemap("gymplik", "assets/gumple/gymplik_one.json", null, Phaser.Tilemap.TILED_JSON);
      this.load.image("textury", "assets/gumple/sady_dlazdic/final_version.png");
    },

  create: function() {

    this.mapa = this.game.add.tilemap("gymplik");
    this.game.stage.backgroundColor = "#0b7cb4";
    this.mapa.addTilesetImage("final_version", "textury");

    this.vzhled = this.mapa.createLayer("vzhled");
    this.kolize = this.mapa.createLayer("kolize");
    this.mapa.setCollisionBetween(1, 100000, true, "kolize");
    this.game.world.setBounds(0, 0, 1200, 720);

    //stvoření hráče
    this.hrac = this.add.sprite(300, 600, "ruza");
    this.game.physics.arcade.enable(this.hrac);
    this.hrac.body.gravity.y = 1000;
    this.hrac.animations.add("beh", [2,3], 5, true);
    this.hrac.animations.play("beh");

    this.game.camera.follow(this.hrac);

    this.cursors = this.game.input.keyboard.createCursorKeys();
 },

  update: function() {
    this.game.physics.arcade.collide(this.hrac, this.kolize);
    this.hrac.body.drag.x = 2000;

    if(this.cursors.up.isDown && this.hrac.body.blocked.down) {
      this.hrac.body.velocity.y = -700;
    }
    if(this.cursors.right.isDown) {
      this.hrac.body.velocity.x = 500;
    }
    if(this.cursors.left.isDown) {
      this.hrac.body.velocity.x = -500;
    }
  },

  render: function()
    {
        this.game.debug.text(this.game.time.fps || 'neviem', 10, 10, "#1ec133", "Press Start 2P");
    }

};
