var Academy = Academy || {};

Academy.generateItem = function(item, section_li) {
  $('<a>')
    .attr('href', item.attr('href'))
    .attr('target', '_blank')
    .html(item.text())
    .appendTo(
      $('<li>')
      .appendTo(section_li)
    );
}

Academy.generateSection = function(section) {
  section_li = $('<li>')
    .addClass('nav-header')
    .html(section.attr('name'))
    .appendTo($('#navList'));
  section.find('item').each(function() {
    Academy.generateItem($(this), section_li);
  });
}

Academy.getSidebar = function() {
  $.ajax({
    type: "GET",
    url: "data/academy_sidebar.xml",
    dataType: "xml",
    success: function(xml) {
      $(xml).find('section').each(function(){
        Academy.generateSection($(this));
      });
    }
  });
}