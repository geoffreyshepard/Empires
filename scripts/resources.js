// This file handles the Basic Resource Creation, Game Loop Incrementing, & Resource Display

G.res = {
  init: function(name) {
    this.name = name;
    this.click = 1;
    this.clickBonus = 1;
    this.increment = 1;
    this.current = 300;
    this.max = 500;
    this.bonus = 1;
  },

  array: [],

  updateResourceView: function(current, max, increment) {
    if (current) {
      $food.find("span[data-res-current]").html(G.res.food.current.toFixed(2));
      $wood.find("span[data-res-current]").html(G.res.wood.current.toFixed(2));
      $stone
        .find("span[data-res-current]")
        .html(G.res.stone.current.toFixed(2));
    }
    if (max) {
      $food.find("span[data-res-max]").html(G.res.food.max.toFixed(2));
      $wood.find("span[data-res-max]").html(G.res.wood.max.toFixed(2));
      $stone.find("span[data-res-max]").html(G.res.stone.max.toFixed(2));
    }
    if (increment) {
      $food.find("span[data-res-inc]").html(G.res.food.increment.toFixed(2));
      $wood.find("span[data-res-inc]").html(G.res.wood.increment.toFixed(2));
      $stone.find("span[data-res-inc]").html(G.res.stone.increment.toFixed(2));
    }
  },

  incrementRes: function() {
    for (i = 0; i < G.res.array.length; i++) {
      var resName = "G.res." + G.res.array[i],
        current = eval(resName).current,
        increment = eval(resName).increment,
        max = eval(resName).max,
        bonus = eval(resName).bonus;

      current += increment * bonus;
      if (current > max) current = max;
      if (current < 0) current = 0;

      eval(resName).current = current;
    }

    this.updateResourceView(true, false, false);
  },

  purchaseItem(object, quantity, name) {
    // object = [
    //     {
    //         resNam: 'wood',
    //         cost: 100
    //     },
    //     {
    //         resName: 'stone',
    //         cost: 50
    //     },
    //     etc.....
    // ]

    var errorMessage = "Can't afford " + quantity + " " + name + ": Missing ";
    var canBuild = true;

    // Checks to make sure you can afford before removing resources
    // Builds out error message if you can not build the item
    for (var x = 0; x < object.length; x++) {
      var resName = "G.res." + object[x].resName;
      var current = eval(resName).current;
      var cost = object[x].cost;

      if (cost * quantity > current) {
        canBuild = false;
        var missingResource = cost * quantity - current;
        errorMessage +=
          object[x].resName + " " + missingResource.toFixed(2) + " ";
      }
    }

    if (canBuild) {
      for (var x = 0; x < object.length; x++) {
        eval("G.res." + object[x].resName).current -= object[x].cost * quantity;
      }
      this.updateResourceView(true, false, false);
      return true;
    } else {
      // You can not build the item displaying errorMessage why
      // TODO: @resources display why you can build the item to the screen
      console.log(errorMessage);
      return false;
    }
  },

  clickRes: function() {
    this.current += this.click * this.clickBonus;
  },

  createResource: function(name) {
    function Resource() {}
    Resource.prototype = G.res;

    var createdResource = new Resource();
    createdResource.init(name);

    return createdResource;
  },

  createAllResources: function() {
    G.res.food = G.res.createResource("food");
    G.res.array.push("food");
    G.res.wood = G.res.createResource("wood");
    G.res.array.push("wood");
    G.res.stone = G.res.createResource("stone");
    G.res.array.push("stone");
  }
};
