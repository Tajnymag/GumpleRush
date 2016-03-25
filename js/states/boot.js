var GumpleRush = GumpleRush || {};

GumpleRush.Boot = function() {};

GumpleRush.Boot.prototype = {

  preload: function() {

  },
  create: function() {
    //barva pozadí
    this.game.stage.backgroundColor = "#14e4eb";
    //zarovnání
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

    //násilné vypnutí antialiasingu
    Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);

    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    //this.scale.setScreenSize(true);
    //fyzikální engine
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    //spuštění stateu Preload
    this.game.state.start("Preload");
  }
};
