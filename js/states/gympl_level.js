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
    this.wasd = {
      up: this.game.input.keyboard.addKey(Phaser.Keyboard.W),
      down: this.game.input.keyboard.addKey(Phaser.Keyboard.S),
      left: this.game.input.keyboard.addKey(Phaser.Keyboard.A),
      right: this.game.input.keyboard.addKey(Phaser.Keyboard.D),
    };

    this.vlasta = this.add.sprite(500, 600, "vlasta");
    this.game.physics.arcade.enable(this.vlasta);
    this.vlasta.body.gravity.y = 1000;
    this.vlasta.animations.add("beh", [0,1], 5, true);
    this.vlasta.animations.play("beh");
 },
  update: function() {
    this.game.physics.arcade.collide(this.hrac, this.kolize);
    this.game.physics.arcade.collide(this.vlasta, this.kolize);

    if(this.hrac.body.blocked.down) {
      this.hrac.body.drag.x = 5000;
    }
    else {
      this.hrac.body.drag.x = 1000;
    }
    if(this.wasd.up.isDown && this.hrac.body.blocked.down || this.cursors.up.isDown && this.hrac.body.blocked.down) {
      this.hrac.body.velocity.y = -300;
    }
    if(this.cursors.right.isDown || this.wasd.right.isDown) {
      this.hrac.body.velocity.x = 500;
    }
    else if(this.cursors.left.isDown || this.wasd.left.isDown) {
      this.hrac.body.velocity.x = -500;
    }
  },

  render: function()
    {
        this.game.debug.text(this.game.time.fps || 'neviem', 10, 10, "#1ec133", "Press Start 2P");
    }

};
