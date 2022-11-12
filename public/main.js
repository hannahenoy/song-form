let trash = document.getElementsByClassName("trash");




Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function(){
    fetch('profile', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'id': element.id
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});