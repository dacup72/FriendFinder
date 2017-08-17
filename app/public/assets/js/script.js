
var config = {
  ".chosen-select": {},
  ".chosen-select-deselect":{
      allow_single_deselect: true
  },
  ".chosen-select-no-single": {
      disable_search_threshold: 10
  },
  ".chosen-select-no-results": {
      no_result_text: "It's empty!"
  },
  ".chosen-select-width": {
      width: "95%"
  }
};

for (var selector in config) {
  $(selector).chosen(config[selector]);
}

$("#submit").on("click", function(event){
event.preventDefault();

function validating(){
  var correct = true;
  $(".form-control").each(function(){
      if ($(this).val() === ""){
          correct = false;
          }
  });
  
  $(".chosen-select").each(function(){
      if ($(this).val()=== ""){
          correct = false;
      }
  });
  return correct;
}

if (validating()){
  
  var userData = {
    name: $("#name").val(),
    photo: $("#photo").val(),
    scores: [
      $("#q1").val(),
      $("#q2").val(),
      $("#q3").val(),
      $("#q4").val(),
      $("#q5").val(),
      $("#q6").val(),
      $("#q7").val(),
      $("#q8").val(),
      $("#q9").val(),
      $("#q10").val()
    ]
  };

  $.post("/api/friends", userData, function(data) {
    
    $("#match-name").text(data.name);
    $("#match-img").attr("src", data.photo);
    $("#results-modal").modal("toggle");
  });
} else {
  alert("Parts of the form are missing. Please fill out every question.");
}
});