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
    this.load.spritesheet('ruza', 'assets/postavy/ruza_prototyp.png', 32, 32);
    this.load.tilemap("satny", "assets/pozadi_saten.json", null, Phaser.Tilemap.TILED_JSON);

  },
  create: function() {
    this.state.start("Level1");
  }
};
