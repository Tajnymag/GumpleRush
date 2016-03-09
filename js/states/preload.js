var GumpleRush = GumpleRush || {};

GumpleRush.Preload = function() {};
GumpleRush.Preload.prototype = {
	preload: function() {
		//načítací obrazovka
		this.nacitaci_zprava = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "Gümple Rush se načítá...", {
			font: "16px Press Start 2P",
			fill: "#000000",
			align: "center"
		});
		this.nacitaci_zprava.anchor.setTo(0.5, 0.5);

		//načtení textur a map
		this.load.spritesheet("ruza", "assets/postavy/ruza.png", 20, 24);
		this.load.spritesheet("vlasta", "assets/postavy/Vlasta.png", 15, 26);
		this.game.load.tilemap("gymplik", "assets/gumple/gymplik_one.json", null, Phaser.Tilemap.TILED_JSON);
		this.load.image("textury", "assets/gumple/sady_dlazdic/final_version.png");
		this.load.spritesheet("button_a", "assets/menu/button_a.png", 96, 96);
		this.load.spritesheet("button_b", "assets/menu/button_b.png", 96, 96);
		this.load.spritesheet("button_l", "assets/menu/button_l.png", 96, 96);
		this.load.spritesheet("button_p", "assets/menu/button_p.png", 96, 96);

		//načtení zvuků
		this.game.load.audio("gaudeamus", "assets/gaudeamus.ogg");
		this.game.load.audio("skok", "assets/skok.wav");
		this.game.load.audio("hit", "assets/hit.wav");
		this.game.load.audio("select", "assets/select.wav");
	},
	create: function() {
		this.state.start("Gympl");
	}
};
