var GumpleRush = GumpleRush || {};
var hrac = hrac || {};

GumpleRush.Gympl = function() {};
GumpleRush.Gympl.prototype = {

  preload: function() {
    this.time.advancedTiming = true;
  },
  create: function() {
    this.mapa = this.game.add.tilemap("gymplik");
    this.game.stage.backgroundColor = "#0b7cb4";
    this.mapa.addTilesetImage("final_version", "textury");

    this.vzhled = this.mapa.createLayer("vzhled");
    this.kolize = this.mapa.createLayer("kolize");
    this.mapa.setCollisionBetween(1, 100000, true, "kolize");
    this.game.world.setBounds(0, 0, 1200, 720);

    this.seznam_dlazdic_vzhledu = this.vzhled.getTiles(0, 0, this.game.world.width, this.game.world.height);
    for (var i = 0; i < this.seznam_dlazdic_vzhledu.length; i++) {
      if (this.seznam_dlazdic_vzhledu[i].index == 49 || this.seznam_dlazdic_vzhledu[i].index == 48) {
        this.seznam_dlazdic_vzhledu[i].setCollision(false, false, true, false); // left, right, top, bottom
      }
    }
    this.seznam_dlazdic_kolize = this.kolize.getTiles(0, 0, this.game.world.width, this.game.world.height);
    for (var i = 0; i < this.seznam_dlazdic_kolize.length; i++) {
      if (this.seznam_dlazdic_kolize[i].index == 18) {
        this.seznam_dlazdic_kolize[i].setCollision(false, false, true, false); // left, right, top, bottom
      }
    }

    //stvoření hráče
    this.hrac = this.add.sprite(300, 600, "ruza");
    this.game.physics.arcade.enable(this.hrac);
    this.hrac.body.gravity.y = 1000;
    this.hrac.animations.add("beh", [2, 3], 5, true);
    this.hrac.animations.add("klid", [0, 4], 1, true);
    this.hrac.animations.add("skrceni", [4, 4], 1, true);

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
    this.vlasta.animations.add("beh", [0, 1], 5, true);
    this.vlasta.animations.play("beh");
  },
  update: function() {
    this.game.physics.arcade.collide(this.hrac, this.kolize);
    this.game.physics.arcade.collide(this.hrac, this.vzhled);
    this.game.physics.arcade.collide(this.vlasta, this.kolize);

    this.hrac.body.drag.x = 5000;

    if (this.wasd.up.isDown && this.hrac.body.blocked.down || this.cursors.up.isDown && this.hrac.body.blocked.down) {
      this.hrac.body.velocity.y = -300;
    }
    if (this.cursors.right.isDown || this.wasd.right.isDown) {
      this.hrac.body.velocity.x = 500;
      this.hrac.animations.play("beh");
    } else if (this.cursors.left.isDown || this.wasd.left.isDown) {
      this.hrac.body.velocity.x = -500;
      this.hrac.animations.play("beh");
    } else if (this.wasd.down.isDown && this.hrac.body.blocked.down || this.cursors.down.isDown && this.hrac.body.blocked.down) {
      this.hrac.animations.play("skrceni");
    } else {
      this.hrac.animations.play("klid");
    }
  },

  render: function() {
    this.game.debug.text(this.game.time.fps || 'neviem', 10, 10, "#1ec133", "Press Start 2P");
  }
};
