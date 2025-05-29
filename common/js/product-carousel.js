$(document).ready(function () {
    $('.next').on('click', function () {
        var currentBlock = $('.hex-block.active');
        var nextBlock = currentBlock.next();

        if (nextBlock.length) {
            currentBlock.removeClass('active');
            nextBlock.addClass('active');
        }
    });

    $('.prev').on('click', function () {
        var currentBlock = $('.hex-block.active');
        var prevBlock = currentBlock.prev();

        if (prevBlock.length) {
            currentBlock.removeClass('active');
            prevBlock.addClass('active');
        }
    });
    $('.next-gold').on('click', function () {
        var currentBlock = $('.hex-gold-block.active');
        var nextBlock = currentBlock.next();

        if (nextBlock.length) {
            currentBlock.removeClass('active');
            nextBlock.addClass('active');
        }
    });

    $('.prev-gold').on('click', function () {
        var currentBlock = $('.hex-gold-block.active');
        var prevBlock = currentBlock.prev();

        if (prevBlock.length) {
            currentBlock.removeClass('active');
            prevBlock.addClass('active');
        }
    });
});