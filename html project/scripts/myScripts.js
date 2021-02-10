$('.card').find('.card-header').on('click', function () {
    var currIcon = $(this).find('svg');
    if (currIcon.attr('data-icon') === 'plus') {
        $('svg').attr('data-icon', 'plus');
        currIcon.attr('data-icon', 'times')
    } else {
        currIcon.attr('data-icon', 'plus')

    }
});

setVideoInScreen();

window.addEventListener("resize", function () {
    setVideoInScreen()
});

function setVideoInScreen() {
    var pic = $('#enjoy').find('img');
    var width = pic.css('width');
    var height = pic.css('height');
    var sizeOfTheScreenX = (parseInt(width) * 0.7333).toString() + 'px';
    var sizeOfTheScreenY = (parseInt(height) * 0.5568).toString() + 'px';
    $('#video1').css('width', sizeOfTheScreenX)
        .css('height', sizeOfTheScreenY)
    pic = $('#enjoy1').find('img');
    width = pic.css('width');
    height = pic.css('height');
    sizeOfTheScreenX = (parseInt(width) * 0.7333).toString() + 'px';
    sizeOfTheScreenY = (parseInt(height) * 0.5568).toString() + 'px';
    $('#video2').css('width', sizeOfTheScreenX)
        .css('height', sizeOfTheScreenY)
}
