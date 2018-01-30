// register components
Vue.component('svg-template', {
    template: '#svg-template',
    props: ['spaces'],
    methods: {
    	getClass(space) {
      	let classes = ['parking-space', space.style];
        if (space.isEmpty) {
        	classes.push('empty');
        }
        return classes.join(' ');
    }
}
})

// create a root instance
new Vue({
    el: '#parking',
    data: {
    title: 'Parking',
    //Parking lot template for Lot96
    spaces: [
        { x: 0, y: 0, isEmpty: true, style: 'horiz', columnNum: 1},
        { x: 0, y: 20, isEmpty: true, style: 'horiz', columnNum: 1},
        { x: 0, y: 40, isEmpty: true, style: 'horiz', columnNum: 1},
        { x: 0, y: 60, isEmpty: true, style: 'horiz', columnNum: 1},
        { x: 0, y: 80, isEmpty: true, style: 'horiz', columnNum: 1},
        { x: 0, y: 100, isEmpty: true, style: 'horiz', columnNum: 1},
        { x: 0, y: 120, isEmpty: true, style: 'horiz', columnNum: 1},
        { x: 0, y: 140, isEmpty: true, style: 'horiz', columnNum: 1},
        { x: 0, y: 160, isEmpty: true, style: 'horiz', columnNum: 1},
        { x: 0, y: 180, isEmpty: true, style: 'horiz', columnNum: 1},
        { x: 0, y: 200, isEmpty: true, style: 'horiz', columnNum: 1},
        { x: 0, y: 220, isEmpty: true, style: 'horiz', columnNum: 1},
        { x: 0, y: 240, isEmpty: true, style: 'horiz', columnNum: 1},
        { x: 0, y: 260, isEmpty: true, style: 'horiz', columnNum: 1},
        { x: 0, y: 280, isEmpty: true, style: 'horiz', columnNum: 1},
        { x: 0, y: 300, isEmpty: true, style: 'horiz', columnNum: 1},
        { x: 0, y: 320, isEmpty: true, style: 'horiz', columnNum: 1},
        { x: 0, y: 340, isEmpty: true, style: 'horiz', columnNum: 1},
        
        { x: 120, y: 0, isEmpty: true, style: 'horiz', columnNum: 2},
        { x: 120, y: 20, isEmpty: true, style: 'horiz', columnNum: 2},
        { x: 120, y: 40, isEmpty: true, style: 'horiz', columnNum: 2},
        { x: 120, y: 60, isEmpty: true, style: 'horiz', columnNum: 2},
        { x: 120, y: 80, isEmpty: true, style: 'horiz', columnNum: 2},
        { x: 120, y: 100, isEmpty: true, style: 'horiz', columnNum: 2},
        { x: 120, y: 120, isEmpty: true, style: 'horiz', columnNum: 2},
        { x: 120, y: 140, isEmpty: true, style: 'horiz', columnNum: 2},
        { x: 120, y: 160, isEmpty: true, style: 'horiz', columnNum: 2},
        { x: 120, y: 180, isEmpty: true, style: 'horiz', columnNum: 2},
        { x: 120, y: 200, isEmpty: true, style: 'horiz', columnNum: 2},
        { x: 120, y: 220, isEmpty: true, style: 'horiz', columnNum: 2},
        
        { x: 160, y: 0, isEmpty: true, style: 'horiz', columnNum: 3},
        { x: 160, y: 20, isEmpty: true, style: 'horiz', columnNum: 3},
        { x: 160, y: 40, isEmpty: true, style: 'horiz', columnNum: 3},
        { x: 160, y: 60, isEmpty: true, style: 'horiz', columnNum: 3},
        { x: 160, y: 80, isEmpty: true, style: 'horiz', columnNum: 3},
        { x: 160, y: 100, isEmpty: true, style: 'horiz', columnNum: 3},
        { x: 160, y: 120, isEmpty: true, style: 'horiz', columnNum: 3},
        { x: 160, y: 140, isEmpty: true, style: 'horiz', columnNum: 3},
        { x: 160, y: 160, isEmpty: true, style: 'horiz', columnNum: 3},
        { x: 160, y: 180, isEmpty: true, style: 'horiz', columnNum: 3},
        { x: 160, y: 200, isEmpty: true, style: 'horiz', columnNum: 3},
        { x: 160, y: 220, isEmpty: true, style: 'horiz', columnNum: 3},
        
        { x: 280, y: 0, isEmpty: true, style: 'horiz', columnNum: 4},
        { x: 280, y: 20, isEmpty: true, style: 'horiz', columnNum: 4},
        { x: 280, y: 40, isEmpty: true, style: 'horiz', columnNum: 4},
        { x: 280, y: 60, isEmpty: true, style: 'horiz', columnNum: 4},
        { x: 280, y: 80, isEmpty: true, style: 'horiz', columnNum: 4},
        { x: 280, y: 100, isEmpty: true, style: 'horiz', columnNum: 4},
        { x: 280, y: 120, isEmpty: true, style: 'horiz', columnNum: 4},
        { x: 280, y: 140, isEmpty: true, style: 'horiz', columnNum: 4},
        
        { x: 320, y: 0, isEmpty: true, style: 'horiz', columnNum: 5},
        { x: 320, y: 20, isEmpty: true, style: 'horiz', columnNum: 5},
        { x: 320, y: 40, isEmpty: true, style: 'horiz', columnNum: 5},
        { x: 320, y: 60, isEmpty: true, style: 'horiz', columnNum: 5},
        { x: 320, y: 80, isEmpty: true, style: 'horiz', columnNum: 5},
        { x: 320, y: 100, isEmpty: true, style: 'horiz', columnNum: 5},

        { x: 40, y: 360, isEmpty: true, style: 'vert', columnNum: 6},
        { x: 60, y: 360, isEmpty: true, style: 'vert', columnNum: 6},
        { x: 80, y: 360, isEmpty: true, style: 'vert', columnNum: 6},
        { x: 100, y: 360, isEmpty: true, style: 'vert', columnNum: 6},
        { x: 120, y: 360, isEmpty: true, style: 'vert', columnNum: 6},
        { x: 140, y: 360, isEmpty: true, style: 'vert', columnNum: 6},
        { x: 160, y: 360, isEmpty: true, style: 'vert', columnNum: 6},
        { x: 180, y: 360, isEmpty: true, style: 'vert', columnNum: 6},
        { x: 200, y: 360, isEmpty: true, style: 'vert', columnNum: 6},
        { x: 220, y: 360, isEmpty: true, style: 'vert', columnNum: 6},
        { x: 240, y: 360, isEmpty: true, style: 'vert', columnNum: 6},
        { x: 260, y: 360, isEmpty: true, style: 'vert', columnNum: 6},
        { x: 280, y: 360, isEmpty: true, style: 'vert', columnNum: 6},
        { x: 300, y: 360, isEmpty: true, style: 'vert', columnNum: 6},
        { x: 320, y: 360, isEmpty: true, style: 'vert', columnNum: 6},
        { x: 340, y: 360, isEmpty: true, style: 'vert', columnNum: 6},
        { x: 360, y: 360, isEmpty: true, style: 'vert', columnNum: 6},
        { x: 380, y: 360, isEmpty: true, style: 'vert', columnNum: 6},
        { x: 400, y: 360, isEmpty: true, style: 'vert', columnNum: 6},
        { x: 420, y: 360, isEmpty: true, style: 'vert', columnNum: 6},
        { x: 440, y: 360, isEmpty: true, style: 'vert', columnNum: 6},
    ]
    },
    methods: {
        //Change values in template
        change: function(data) {
            var dbData = JSON.parse(data);
            var i = 0;
            for (i = 0; i < dbData.length; i++) {
                if (dbData[i].spot_status == 'open') {
                    this.spaces[i].isEmpty = true;
                }
                else {
                    this.spaces[i].isEmpty = false;
                }
            } 
        },
        //Get values from the database
        refresh: function() {
            var self = this;
            $.ajax ({ 
                type : 'POST',
                data : { },
                url  : 'login2.php',              // <=== CALL THE PHP FUNCTION HERE.
                success: function (data) {
                self.change(data);
              },
              error: function ( xhr ) {
                alert( "error" );
              }
            });
        },
        //Testing API
        getSpot: function() {
            var self =  this;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                   // Typical action to be performed when the document is ready:
                    var thingerStatus = JSON.parse(xhttp.responseText);
                    if (thingerStatus.out == 'open') {
                        self.spaces[0].isEmpty = true;
                    }
                    else {
                        self.spaces[0].isEmpty = false;
                    }
                }
            };
            xhttp.open("GET", "https://api.thinger.io/v2/users/osegroup/devices/esp32/SONIC?authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXYiOiJlc3AzMiIsImlhdCI6MTUwMDkxMDU2NywianRpIjoiNTk3NjEzZTc1YmU2YzZhOGMyNTA2YTFjIiwidXNyIjoib3NlZ3JvdXAifQ.fhzBVuqtwc0YHYXTD-wQ3JJ0XQcSjTIYq1RbDdmwJAM", true);
            xhttp.send();
        }
    },
    created: function () {
        this.refresh();
        this.getSpot();
    }
})
