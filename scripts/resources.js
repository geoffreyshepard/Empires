// This file handles the Basic Resource Creation, Game Loop Incrementing, & Resource Display


G.res = {

    init : function(name) {
        this.name = name;
        this.click = 1;
        this.clickBonus = 1;
        this.increment = 1;
        this.current = 50;
        this.max = 500;
        this.bonus = 1;
    },

    array : [],

    updateRes : function() {

        for(i=0; i<G.res.array.length; i++){
            var resName     = "G.res." + G.res.array[i],
                current     = eval(resName).current,
                increment   = eval(resName).increment,
                max         = eval(resName).max,
                bonus       = eval(resName).bonus;
            
            current += (increment * bonus);
            current = Number(current.toFixed(2));
            if(current > max) current = max;
            if(current < 0) current = 0;

            eval(resName).current = current;
        }

    },

    clickRes : function() {
        this.current += (this.click * this.clickBonus);
    },

    createResource : function(name){
        function Resource(){};
        Resource.prototype = G.res;

        var createdResource = new Resource();
        createdResource.init(name);

        return createdResource;        
    },

    createAllResources : function(){
        G.res.food = G.res.createResource("food");
        G.res.array.push("food");
        G.res.wood = G.res.createResource("wood");
        G.res.array.push("wood");
        G.res.stone = G.res.createResource("stone");
        G.res.array.push("stone");
    }

};




