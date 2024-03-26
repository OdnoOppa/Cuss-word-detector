var textarea = document.getElementById("text");

textarea.addEventListener("keydown", checkText);

function checkText(event){
    
    if(event.keyCode === 32 || event.key === "Event" || event.keyCode === 13){

        var text = document.getElementById("text").value;
        $.ajax({
            url: '/censor',
            type: 'POST',
            data: {text: text},
            success: function(response) {
                if(event.keyCode === 13)
                    document.getElementById("text").value = response + "\n";
                else 
                    document.getElementById("text").value = response + " ";
            }
        });
    }
}
