(function() {
  'use strict';
  window.fee = window.fee || {};

  var myToken;


  $('.tButton').on('click', function submitToken(event){
      myToken = $('input').val();
      $.ajax({
        url: 'https://api.github.com/users/jisaacks/orgs',
        method: 'GET',
        dataType: 'json',
        headers: {
          Authorization: 'token ' + myToken
        }
      })
      .done(function handleSuccess(data) {
        console.log('in the success handler!');
        console.log(data);
      })
      .fail(function errorCallback(xhr, errorType) {
        console.log(xhr);
      });

  });

























}());
