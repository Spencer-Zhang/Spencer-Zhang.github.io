function loadTab(tabName) {
  $('menu li').removeClass('active');
  $('content div').hide();

  $('menu li#' + tabName).addClass('active');
  $('content div#' + tabName).show();
}

$(function() {
  loadTab('index');

  $('menu li').click(function() {
    var tabName = $(this).attr('id');
    loadTab(tabName);
  });

})