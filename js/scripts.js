$(document).ready(function() {
  $("#goal-button").click(function() {
    if($("#new-goal").val()!=""){
      $("#goal-list").append("<li class='list-item'>" + $("#new-goal").val() + "</li>");
      $("#new-goal").val("");
    }
  })
})
