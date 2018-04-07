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
            G.res.array[i].current += (G.res.array[i].increment * G.res.array[i].bonus);
            // Keep within bounds of zero and max you can hold
            if(G.res.array[i].current > G.res.array[i].max) G.res.array[i].current = G.res.array[i].max;
            if(G.res.array[i].current < 0) G.res.array[i].current = 0;
            console.log()
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




