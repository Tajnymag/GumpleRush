var GumpleRush = GumpleRush || {};

GumpleRush.Preload = function(){};
GumpleRush.Preload.prototype = {
  preload: function() {
    //načítací obrazovka
    this.nacitaciPruh = this.add.sprite(this.game.world.centerX, this.game.world.centerY, "nacitacipruh");
    this.nacitaciPruh.anchor.setTo(0.5);
    this.nacitaciPruh.scale.setTo(30);
    this.load.setPreloadSprite(this.nacitaciPruh);
    //načtení textur a map
    //TODO

  },
  create: function() {
    this.state.start("Level1");
  }
};
