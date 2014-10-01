function loadContent(href) {
  $('menu li').removeClass('active');
  $('content').text('');

  $.ajax({
    url: href,
    success: function(data) {
      console.log(data);
    }
  })
}

$(function() {
  loadContent('about.html');

  $('menu li a').click(function(event) {
    event.preventDefault();
    var tabName = $(this).attr('href');
    console.log(tabName);
  });

})