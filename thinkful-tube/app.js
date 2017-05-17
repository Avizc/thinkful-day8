// App State
const appState={
    // results:[],
    channelIds:[],
    videoIDs: [],
    thumbnails: [],
    nextPageToken: null,
    prevPageToken: null,
    searchTerm: null
};

// This is the endpoint to the Google YouTube API
// API URL: https://www.googleapis.com
// Endpoint: /youtube/v3/search
// Parameters: 
let youTubeBaseURL='https://www.googleapis.com/youtube/v3/search';

// function getDataFromApi(searchTerm, callback) {
//   var query = {
//     part: 'snippet',
//     q: searchTerm,
//     key: 'AIzaSyCAFmQtIe0X1yRuYfEFIp5hNIFRzgEqgB0',
//     pageToken: appState.nextPageToken
//   }
//   $.getJSON(youTubeBaseURL, query, callback);
// }
// State modifications
function getDataAPI(state, searchResult){
    state.searchTerm
}
function getChannelIds(state) {
    state.channelIds
}
function getVideoIDs(state){
    state.videoIds
}
function getThumbNails(state){
    state.thumbnails
}
function goToNextPage(state){
    state.nextPageToken
}
function goToPrevPage(state){
    state.prevPageToken
}

// Render Function
// function nextButton(data) {
//   console.log(data);
//   let previousElement = '';
//   if (data.items) {
//     data.items.forEach(function(item) {
//       previousElement += `<a href="https://www.youtube.com/results?sp=SCjqAwA%253D&q=worth+it"><button type="button" class="button next">NEXT</button></a>`
//     });
//   }

// }

// Render Function
function render(state){
  //if (state. //)

}

function displayYOUTUBESearchData(data) {
    console.log(data);
    appState.nextPageToken = (data.nextPageToken);
    var resultElement = '';
    if (data.items) {
        data.items.forEach(function(item) {
            // console.log(data.items);
            // console.log(item.snippet.thumbnails.high.url);
            resultElement += `<a href="https://www.youtube.com/watch?v=${item.id.videoId}"><img src=${item.snippet.thumbnails.high.url}></a><p><a href="https://www.youtube.com/channel/${item.snippet.channelId}">${item.snippet.channelTitle}</a></p>`;
            console.log(item.id.videoId);
        });
    }
    else {
        resultElement += '<p>No results</p>';
}

$('.js-search-results').html(resultElement);
}


function watchSubmit() {
}
// getDataFromApi('Hamilton', logData);
function nextPage() {
}

// Event Listeners
function eventListeners(){
    // Look for what was submitted in the search, grabs the API
    $('.js-search-form').submit(function(e) {
        // e.preventDefault();
        // var query = $(this).find('.js-query').val();
        // getDataFromApi(query, displayYOUTUBESearchData);
        getDataAPI(appState);
        render(appState);
    });
    // Move on to the next page if selected
    $('.next').click(function(event) {
        // console.log(appState.nextPageToken);
        // var query = $('.js-query').val();
        // getDataFromApi(query, displayYOUTUBESearchData);
        goToNextPage(appState);
        render(appState);
    });
}

$(function(){
  eventListeners();
  render(appState, '');
});


