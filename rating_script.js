$(document).ready(function(){

    $('a.star').click(function(event){
        event.preventDefault(); // Don't redirect

        // Colors
        const rgb_yellow = 'rgb(230, 176, 0)';
        const rgb_gray = 'rgb(100, 100, 100)';
        // The star that was clicked
        const star = this;
        var idArray = [];

        // Make sure the id is the right length
        if (star.id.length == 5) {
            // Get the number part of the id
            let starNum = parseInt(star.id.slice(4));
            // Make an array of ids that is every `star#` id up to and including the current `star`
            idArray = Array.from(
                {
                    length: starNum + 1
                }, 
                (_, index) => 
                    `star${index}`
            );
        }

        $('.star').each(function(_, obj){
            // For each `.star`, if it's id is in the `idArray`, set its color to yellow,
            // if not, set it to gray
            if (idArray.includes(obj.id)) {
                $(this).css('color', rgb_yellow)
            } else {
                $(this).css('color', rgb_gray)
            }
        });
    });
});
