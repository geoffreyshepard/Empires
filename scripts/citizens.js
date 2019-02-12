// This file handles the Basic Citizen Creation, Management, & Citizen Display

G.citizens = {
  init: function() {
    this.current = 1;
    this.max = 10;
    this.mood = 10;
  },

  calculateMood: function() {
    // Calculate the current mood
  },

  calculateMigration: function() {
    if (G.citizens.current < G.citizens.max) {
      if (G.citizens.mood > Math.floor(Math.random() * 101)) {
        G.citizens.current++;
      }
    }
  },

  updateCitizenView: function() {
    $citizen.find("span[data-citizens='current']").html(G.citizens.current);
    $citizen.find("span[data-citizens='max']").html(G.citizens.max);
    $citizen.find("span[data-citizens='mood']").html(G.citizens.mood);
  },

  citizenLoop: function() {
    this.calculateMood();
    this.calculateMigration();
    this.updateCitizenView();
  }
};
