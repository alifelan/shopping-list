function addElement(){
    if($("input").val() === ""){
        alert("Please type something.");
        return;
    }
    var li = $("<li></li>");
    li.css("border-left", "6px solid blue")
    var p = $("<p></p>", {
        text: $("input").val(),
    });
    $("input").val("");
    p.css("padding-left", "10px");
    p.css("font-style", "italic");
    p.css("font-size", "20px");
    li.append(p);
    var checkButton = $("<button/>", {
        text: "Check",
        click: function(){
            if(p.css("text-decoration") == "line-through solid rgb(0, 0, 0)"){
                p.css("text-decoration", "none");
                li.css("border-left", "6px solid blue")
            } else {
                p.css("text-decoration", "line-through");
                li.css("border-left", "6px solid grey");
            }
        }
    });
    checkButton.css("margin-left", "10px");
    checkButton.css("background-color", "blue");
    checkButton.css("color", "white");
    checkButton.css("font-size", "16px");
    li.append(checkButton);
    var deleteButton = $("<button/>", {
        text: "Delete",
        click: function(){
            li.remove();
        }
    });
    deleteButton.css("margin-left", "10px");
    deleteButton.css("background-color", "red");
    deleteButton.css("font-size", "16px");
    li.append(deleteButton);
    $("ul").append(li);
};

$("#submitButton").click(addElement);

$("input").keypress(function(e){
    if(e.keyCode== 13){
        e.preventDefault();
        addElement();
    }
});
