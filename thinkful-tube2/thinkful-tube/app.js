// App State
const appState={
    results:[]
};

// This is the endpoint to the Google YouTube API
// API URL: https://www.googleapis.com
// Endpoint: /youtube/v3/search
// Parameters: 
let youTubeBaseURL='https://www.googleapis.com/youtube/v3/search';
// State modifications
function getDataFromApi(searchTerm, callback) {
  var query = {
    part: 'snippet',
    q: searchTerm,
    key: 'AIzaSyCAFmQtIe0X1yRuYfEFIp5hNIFRzgEqgB0'
  }
  $.getJSON(youTubeBaseURL, query, callback);
}
// const logData=(data)=>{
//     console.log(data);
// };
// Render Function
function 
function displayYOUTUBESearchData(data) {
    console.log(data);
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
// Event Listeners
function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromApi(query, displayYOUTUBESearchData);
  });
}
// getDataFromApi('Hamilton', logData);

$(function(){watchSubmit();});
