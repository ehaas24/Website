$('.front a').on('click', function() {
    $('#nav-box').removeShowClasses().addClass('show-bottom');
});
$('.bottom a').on('click', function() {
    $('#nav-box').removeShowClasses().addClass('show-back');
});
$('.back a').on('click', function() {
    $('#nav-box').removeShowClasses().addClass('show-top');
});
$('.top a').on('click', function() {
    $('#nav-box').removeShowClasses().addClass('show-front')
});


var rotateClasses = ["show-bottom", "show-back", "show-top", "show-front"];
var indx = 0;

function rotateBlock() {
    indx++;

    if(indx === rotateClasses.length) {
      indx = 0;
    }

    var newSide = rotateClasses[indx];
     $('#nav-box').removeShowClasses().addClass(newSide);
}

setInterval(function() {
    rotateBlock();
}, 2000);

jQuery.fn.removeShowClasses = function() {
    $(this).removeClass('show-front show-back show-top show-bottom');
    return $(this);
};
