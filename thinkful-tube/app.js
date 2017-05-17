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
const logData=(data)=>{
    console.log(data);
};
// Render Function
function displayYOUTUBESearchData(data) {
  var resultElement = '';
  if (data.Search) {
    data.Search.forEach(function(item) {
     resultElement += `<img src=${snippet.thumbnails.high.url}>`;
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
getDataFromApi('Hamilton', logData);

$(function(){watchSubmit();});
