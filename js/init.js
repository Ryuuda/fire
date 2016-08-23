(function(exports) {

    // var dataList = new XMLHttpRequest();
    // dataList.open( "GET", "https://staging.screeningnow.com/api/v1/assets/testplaylist/", false); // false for synchronous request
    // dataList.send( null );
    // console.log(dataList)
    // var resObj = JSON.parse(dataList.responseText);
    // var playList = {};
    // if(resObj.success == false){
    //     console.log(resObj.error.message)
    // }
    // else{
    //     console.log(resObj)
    //     playList.media = resObj.media;
    //     console.log(playList)
    //     var playlistJSON = JSON.stringify(playList);
    //     // console.log(playlistJSON)
    // }


    'use strict';
    //initialize the app
    var settings = {
        Model: JSONMediaModel,
        PlayerView: PlayerView,
        PlaylistView: PlaylistPlayerView,
        //make this dataURL into an ajax call that gets a list of all videos
        dataURL: "https://staging.screeningnow.com/api/v1/assets/testplaylist/",
        // playList: playlistJSON,
        showSearch: true,
        displayButtons:false,
        skipLength: 10,
        controlsHideTime: 3000,
        networkTimeout: 20,
        retryTimes: 3
    };

    exports.app = new App(settings);
}(window));
