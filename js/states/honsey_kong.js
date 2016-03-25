var GumpleRush = GumpleRush || {};
var hrac = hrac || {};

GumpleRush.Honsey_Kong = function() {};
GumpleRush.Honsey_Kong.prototype = {

  preload: function() {
    this.game.time.advancedTiming = true;
  },
  create: function() {

    this.mapa = this.game.add.tilemap("honsey_kong_mapa");
    this.game.stage.backgroundColor = "#000000";
    this.mapa.addTilesetImage("tramy", "honsey_kong_dlazdice");

    this.kolize = this.mapa.createLayer("kolize");
    this.mapa.setCollisionBetween(1, 2, true, "kolize");
    this.game.world.setBounds(0, 0, 720, 450);

    this.seznam_dlazdic_kolize = this.kolize.getTiles(0, 0, this.game.world.width, this.game.world.height);
    for (var i = 0; i < this.seznam_dlazdic_kolize.length; i++) {
      if (this.seznam_dlazdic_kolize[i].index == 1) {
        this.seznam_dlazdic_kolize[i].setCollision(true, true, true, false); // left, right, top, bottom
      }
    }

    this.zebrik1 = this.game.add.sprite(540, 288, "zebrik");
    this.zebrik2 = this.game.add.sprite(540, 96, "zebrik");
    this.zebrik3 = this.game.add.sprite(160, 192, "zebrik");
    this.game.physics.arcade.enable(this.zebrik1);
    this.game.physics.arcade.enable(this.zebrik2);
    this.game.physics.arcade.enable(this.zebrik3);

    this.hrac = this.add.sprite(100, 300, "ruza");
    this.game.physics.arcade.enable(this.hrac);
    this.hrac.body.gravity.y = 1000;
    this.hrac.animations.add("beh", [2, 3], 5, true);
    this.hrac.animations.add("klid", [0, 4], 1, true);
    this.hrac.animations.add("skrceni", [4, 4], 1, true);
    this.hrac.skok = -255; //-225 je tak akorát, ale při vyšších číslech má hráč vyšší šanci na přeskočení barelu
    this.hrac.rychlost = 175;
    this.hrac.body.drag.x = 5000;
    this.hrac.zivoty = 3;

    this.barely = this.game.add.group();
    this.barely.enableBody = true;
    this.vytvoreniNovehoBarelu();
    this.game.time.events.loop(3000, this.vytvoreniNovehoBarelu, this);


    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.wasd = {
      up: this.game.input.keyboard.addKey(Phaser.Keyboard.W),
      down: this.game.input.keyboard.addKey(Phaser.Keyboard.S),
      left: this.game.input.keyboard.addKey(Phaser.Keyboard.A),
      right: this.game.input.keyboard.addKey(Phaser.Keyboard.D),
    };
    this.skok = this.game.add.audio("skok");
    this.skok.volume = 0.6;

    this.klavesaF = this.game.input.keyboard.addKey(Phaser.Keyboard.F);
    this.klavesaF.onDown.add(this.celaObrazovka, this);

    stisk_a = false;
    stisk_b = false;
    stisk_l = false;
    stisk_p = false;

    if (!this.game.device.desktop) {
      this.game.input.onDown.add(this.celaObrazovkaMobil, this);

      this.button_a = this.game.add.button(524, 307, "button_a", null, this, 1, 0, 1, 0);
      this.button_a.fixedToCamera = true;
      this.button_a.events.onInputOver.add(function() { stisk_a = true; });
      this.button_a.events.onInputOut.add(function() { stisk_a = false; });
      this.button_a.events.onInputDown.add(function() { stisk_a = true; });
      this.button_a.events.onInputUp.add(function() { stisk_a = false; });

      this.button_b = this.game.add.button(622, 307, "button_b", null, this, 1, 0, 1, 0);
      this.button_b.fixedToCamera = true;
      this.button_b.events.onInputOver.add(function() { stisk_b = true; });
      this.button_b.events.onInputOut.add(function() { stisk_b = false; });
      this.button_b.events.onInputDown.add(function() { stisk_b = true; });
      this.button_b.events.onInputUp.add(function() { stisk_b = false; });

      this.button_l = this.game.add.button(2, 307, "button_l", null, this, 1, 0, 1, 0);
      this.button_l.fixedToCamera = true;
      this.button_l.events.onInputOver.add(function() { stisk_l = true; });
      this.button_l.events.onInputOut.add(function() { stisk_l = false; });
      this.button_l.events.onInputDown.add(function() { stisk_l = true; });
      this.button_l.events.onInputUp.add(function() { stisk_l = false; });

      this.button_p = this.game.add.button(100, 307, "button_p", null, this, 1, 0, 1, 0);
      this.button_p.fixedToCamera = true;
      this.button_p.events.onInputOver.add(function() { stisk_p = true; });
      this.button_p.events.onInputOut.add(function() { stisk_p = false; });
      this.button_p.events.onInputDown.add(function() { stisk_p = true; });
      this.button_p.events.onInputUp.add(function() { stisk_p = false; });
    }


    this.srdicka = this.game.add.image(this.game.world.width - 70, 10, "hearts");
    this.srdicka.cropEnabled = true;
    this.srdicka.kontrolacasu = 0;
    this.srdicka.frekvence = 1000;

    this.hudba = this.game.add.audio("honsey_kong_hudba");
    this.hudba.loop = true;
    this.hudba.play();

    this.hit = this.game.add.audio("hit");

  },
  vytvoreniNovehoBarelu: function() {
    this.barel = this.barely.create(150, 20, "barel");
    this.barel.body.gravity.y = 1000;
    this.barel.animations.add("kutaleni", [0, 1, 2, 3], 5, true);
    this.barel.animations.play("kutaleni");
    this.barel.body.velocity.x = 100;
    this.barel.body.bounce.x = 1;
    this.barel.body.bounce.y = 1;
    this.barel.anchor.setTo(0.5, 0.5);
    this.barel.outOfBoundsKill = true;
    this.barel.body.drag.y = 800;
  },
  celaObrazovkaMobil: function() {
    this.game.scale.startFullScreen(false);
  },
  celaObrazovka: function() {
    if (this.game.scale.isFullScreen) {
      this.game.scale.stopFullScreen();
    } else {
      this.game.scale.startFullScreen(false);
    }
  },
  testZebriku: function(a, b) {
    return this.game.physics.arcade.overlap(a, b);
  },
  uberHraciZivotu(x) {
    this.hrac.zivoty = this.hrac.zivoty - x;
    this.hit.play();
    this.hrac.body.velocity.y = -100;
    if ("vibrate" in navigator) {
      navigator.vibrate(150);
    }
    this.cropRect = new Phaser.Rectangle(0, 0, (this.hrac.zivoty / 3) * 50, 15);
    this.srdicka.crop(this.cropRect);
    this.srdicka.updateCrop();
    this.srdicka.kontrolacasu = this.game.time.now;

  },
  update: function() {
    this.game.physics.arcade.collide(this.hrac, this.kolize);
    this.game.physics.arcade.collide(this.barely, this.kolize);

    if ((this.wasd.up.isDown || this.cursors.up.isDown || stisk_a) && this.hrac.body.blocked.down) {
      this.hrac.body.velocity.y = this.hrac.skok;
      this.skok.play();
    }
    if (this.cursors.right.isDown || this.wasd.right.isDown || stisk_p) {
      this.hrac.body.velocity.x = this.hrac.rychlost;
      this.hrac.animations.play("beh");
    } else if (this.cursors.left.isDown || this.wasd.left.isDown || stisk_l) {
      this.hrac.body.velocity.x = -this.hrac.rychlost;
      this.hrac.animations.play("beh");
    } else if ((this.wasd.down.isDown || this.cursors.down.isDown || stisk_b) && this.hrac.body.blocked.down) {
      this.hrac.animations.play("skrceni");
    } else {
      this.hrac.animations.play("klid");
    }

    if ((this.testZebriku(this.hrac, this.zebrik1) || this.testZebriku(this.hrac, this.zebrik2) || this.testZebriku(this.hrac, this.zebrik3)) && (this.wasd.up.isDown || this.cursors.up.isDown || stisk_a)) {
      this.hrac.body.velocity.y = -50;
    }

    if (this.game.physics.arcade.overlap(this.hrac, this.barely) && (this.game.time.now - this.srdicka.kontrolacasu > this.srdicka.frekvence) || (this.hrac.position.y > this.game.height + 100)) {
      this.uberHraciZivotu(1);
    }

    if (this.game.input.currentPointers == 0 && !this.game.input.activePointer.isMouse) {
      stisk_a = false;
      stisk_b = false;
      stisk_l = false;
      stisk_p = false;
    }

    if (this.hrac.zivoty < 1) {
      this.hudba.stop();
      this.game.state.start("Honsey_Kong");
    }
  },
  render: function() {
    this.game.debug.text(this.game.time.fps || 'neviem', 10, 10, "#1ec133", "Press Start 2P");
  }
};
