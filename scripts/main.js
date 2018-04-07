// Cache Dom Bindings
var $timeDay     = $("span[data-time='day']"),
    $timeMonth   = $("span[data-time='month']"),
    $timeYear    = $("span[data-time='year']");

// Game Settings and Initialization
var G = {

    settings: {
        currentTickSpeed: 1000,
        time: {
            ticks: 0,
            day: 1,
            month: 1,
            year: 1
        }
    },

    init : function(){
        this.loop()
    },

    loop : function(){
        setTimeout(
            function(){ 
                G.updateTime(); 
                G.loop();
            },
            this.settings.currentTickSpeed
        );
    }

};


G.updateTime = function(){
    G.settings.time.ticks ++;

	G.settings.time.day ++;
	if(G.settings.time.day > 30){
		G.settings.time.day = 1;
		G.settings.time.month ++;
		// TODO : Add Autosave Here
		if(G.settings.time.month > 12){
			G.settings.time.month = 1;
			G.settings.time.year ++;
		}
    }
    
    $timeDay.html(G.settings.time.day);
    $timeMonth.html(G.settings.time.month);
    $timeYear.html(G.settings.time.year);
}




G.init();