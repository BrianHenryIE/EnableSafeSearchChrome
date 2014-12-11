/************************************************************************************
 When the browser starts, Safe Search is turned on.
 *************************************************************************************/


$(document).ready(function() {


    // Google Search
    $.get("https://www.google.com/preferences", function(data) {

        var sig = $(data).find("input[name='sig']").val();

        sig = sig.replace("=", "%3D")

        var url = "https://www.google.com/setprefs?sig="+sig+"&submit2=Save+Preferences&safeui=on"

        $.get(url);

    });


    // Bing Search
    $.get("http://www.bing.com/account/general", function(data) {

        var sid = $(data).find("input[name='sid']").val();
        var guid = $(data).find("input[name='GUID']").val();
        var url = 'http://www.bing.com/account/general?adlt_set=strict&geoname=Dublin%2C+County+Dublin&geonamedef=Dublin%2C+County+Dublin&setlang=NO_OP&setplang=NO_OP&enASset=1&enAS=1&pref_sbmt=1&ru=http%3A%2F%2Fwww.bing.com%3A80%2F&GUID='+guid+'&uid=DC00F7C2&sid='+sid;

        $.get(url);

    });


    $.get( "https://www.youtube.com", function( data ) {

        var myRegexp = /'XSRF_TOKEN': "(.*)",/g;
        var match = myRegexp.exec(data);
        var session_token  = match[1];  // abc

        $.post('https://www.youtube.com/set_safety_mode',
            'safety_mode=true&next_url=https%3A%2F%2Fwww.youtube.com%2F&session_token='+encodeURIComponent(session_token));

    });


});


