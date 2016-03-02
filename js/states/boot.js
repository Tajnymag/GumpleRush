var GumpleRush = GumpleRush || {};

GumpleRush.Boot = function() {};

GumpleRush.Boot.prototype = {

  preload: function() {
    //this.game.load.image("nacitacipruh", "assets/menu/nacitacipruh.png");
  },
  create: function() {
    //barva pozadí
    this.game.stage.backgroundColor = "#14e4eb";
    //zarovnání
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

    //násilné vypnutí antialiasingu
    Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);

    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    //this.scale.setScreenSize(true);
    //fyzikální engine
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    //spuštění stateu Preload
    this.state.start("Preload");
  }
};
