$(document).on('ready', function(){
    
    $('#a-image').Jcrop({
        onSelect: showCoords,
        onChange: showCoords
    });
});

function showCoords(c)
{
    console.log(c.x);
    
};