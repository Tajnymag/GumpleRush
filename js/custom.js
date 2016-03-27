GumpleRush.game.nacteniGamepadu = function() {
  this.button_a = GumpleRush.game.add.button(524, 307, "button_a", null, this, 1, 0, 1, 0);
  this.button_a.fixedToCamera = true;
  this.button_a.events.onInputOver.add(function() { stisk_a = true; });
  this.button_a.events.onInputOut.add(function() { stisk_a = false; });
  this.button_a.events.onInputDown.add(function() { stisk_a = true; });
  this.button_a.events.onInputUp.add(function() { stisk_a = false; });

  this.button_b = GumpleRush.game.add.button(622, 307, "button_b", null, this, 1, 0, 1, 0);
  this.button_b.fixedToCamera = true;
  this.button_b.events.onInputOver.add(function() { stisk_b = true; });
  this.button_b.events.onInputOut.add(function() { stisk_b = false; });
  this.button_b.events.onInputDown.add(function() { stisk_b = true; });
  this.button_b.events.onInputUp.add(function() { stisk_b = false; });

  this.button_l = GumpleRush.game.add.button(2, 307, "button_l", null, this, 1, 0, 1, 0);
  this.button_l.fixedToCamera = true;
  this.button_l.events.onInputOver.add(function() { stisk_l = true; });
  this.button_l.events.onInputOut.add(function() { stisk_l = false; });
  this.button_l.events.onInputDown.add(function() { stisk_l = true; });
  this.button_l.events.onInputUp.add(function() { stisk_l = false; });

  this.button_p = GumpleRush.game.add.button(100, 307, "button_p", null, this, 1, 0, 1, 0);
  this.button_p.fixedToCamera = true;
  this.button_p.events.onInputOver.add(function() { stisk_p = true; });
  this.button_p.events.onInputOut.add(function() { stisk_p = false; });
  this.button_p.events.onInputDown.add(function() { stisk_p = true; });
  this.button_p.events.onInputUp.add(function() { stisk_p = false; });
};
