var GumpleRush = GumpleRush || {};

GumpleRush.Boot = function(){};

GumpleRush.Boot.prototype = {

  preload: function() {
    this.game.load.image("nacitacipruh", "assets/menu/nacitacipruh.png");
  },
  create: function() {
    //barva pozadí
    this.game.stage.backgroundColor = "#fff";
    //zarovnání
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    //this.scale.setScreenSize(true);
    //fyzikální engine
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    //spuštění stateu Preload
    this.state.start("Preload");
  }
};
