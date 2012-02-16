$(document).ready(function() {
  $('.title').each(function() {
    var $this = $(this)
    var name = $this.html();
    name = name.replace(/ \(Level \d+\)/, "");
    name = name.replace(/(Apprentice|Master) /, "");
    console.log(name);
    $this.prepend('<img class="medal" src="medals/' + name.toLowerCase() + '.png">');
  });
});
