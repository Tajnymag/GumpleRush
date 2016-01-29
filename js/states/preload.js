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
    this.load.spritesheet("ruza", "assets/postavy/ruza.png", 20, 24);
    this.load.spritesheet("vlasta", "assets/postavy/Vlasta.png", 15, 26);
  },
  create: function() {
    this.state.start("Gympl");
  }
};
