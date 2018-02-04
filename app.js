
// A series of Pittsburgh related functions
// this app.js part of the 'steeler' npm project
// Version 0.0.1 (super alpha testing bit), Todd Edwards - Feb, 2018


module.exports = 
{
    teamcall: function (sport) {

        var call = '';

        if(sport=='football'){

            call='Here We Go Steelers, Here We Go!';

        } else if(sport=='hockey'){

            call="Let's Go Pens!";

        } else if(sport=='baseball') {

            call = "Let's Go Buc's";
        } else {
            call='Here We Go Steelers, Here We Go!';
        }

        return call;

    }

};
