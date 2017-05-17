// This is the endpoint to the Google YouTube API
// API URL: https://www.googleapis.com
// Endpoint: /youtube/v3/search
// Parameters: 
let YOUTUBE_BASE_URL='https://www.googleapis.com/youtube/v3/search';
function getDataFromApi(searchTerm, callback) {
  var query = {
    part: 'snippet',
    key: 'AIzaSyCAFmQtIe0X1yRuYfEFIp5hNIFRzgEqgB0',
    q: searchTerm
  }
  $.getJSON(YOUTUBE_BASE_URL, query, callback);
}
function displayYOUTUBESearchData(data) {
  var resultElement = '';
  if (data.Search) {
    data.Search.forEach(function(item) {
     resultElement += '<p>' + item.Title + '</p>';
    });
  }
  else {
    resultElement += '<p>No results</p>';
  }
  
  $('.js-search-results').html(resultElement);
}

function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromApi(query, displayYOUTUBESearchData);
  });
}

$(function(){watchSubmit();});
