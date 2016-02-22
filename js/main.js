var GumpleRush = GumpleRush || {};

GumpleRush.game = new Phaser.Game(512, 288, Phaser.CANVAS, "hra", null, false, false);
GumpleRush.game.state.add("Boot", GumpleRush.Boot);
GumpleRush.game.state.add("Preload", GumpleRush.Preload);
GumpleRush.game.state.add("Menu", GumpleRush.Menu);
GumpleRush.game.state.add("Gympl", GumpleRush.Gympl);

GumpleRush.game.state.start("Boot");
