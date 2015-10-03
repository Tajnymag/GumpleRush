var GumpleRush = GumpleRush || {};

GumpleRush.game = new Phaser.Game(800, 480, Phaser.AUTO, '', null, false, false);
GumpleRush.game.state.add("Boot", GumpleRush.Boot);
GumpleRush.game.state.add("Preload", GumpleRush.Preload);
GumpleRush.game.state.add("Menu", GumpleRush.Menu);
GumpleRush.game.state.add("Level1", GumpleRush.Level1);

GumpleRush.game.state.start("Boot");
