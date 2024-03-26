function checkText(){
    var text = document.getElementById("text").value;
    $.ajax({
        url: '/censor',
        type: 'POST',
        data: {text: text},
        success: function(response) {
            document.getElementById("output").innerText = response;
        }
    });
}