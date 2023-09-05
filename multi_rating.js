$(document).ready(function(){
    // Populate each rating box with stars
    $('.rating-list').each(function(index, box){
        $(box).html(`
            <a class="list-inline-item m-0 star star0">&#9733;</a>
            <a class="list-inline-item m-0 star star1">&#9733;</a>
            <a class="list-inline-item m-0 star star2">&#9733;</a>
            <a class="list-inline-item m-0 star star3">&#9733;</a>
            <a class="list-inline-item m-0 star star4">&#9733;</a>
        `).addClass('list-inline');
    });

    // Update rating when a star is clicked
    $('.star').click(function(event){
        event.preventDefault(); // Don't redirect

        const star = $(this);
        const rating_list = $(star).parent();

        // The index of the current star, in relation to the list of stars
        // (Ignores non-stars)
        let index = $(`#${rating_list.attr('id')} a.star`).index(star)
        // An array of 
        let class_array = [...Array(index+1).keys()].map(function(value){
            return `star${value}`
        });

        // Color the stars based on index
        $(`#${rating_list.attr('id')} a.star`).each(function(_, obj){
            var active = false;
            const star = $(this)

            // If the star has any of the classes, set `active` to true
            for (let star_class of class_array) {
                if (star.hasClass(star_class)) {
                    active = true;
                }
            }

            // Give the star the appropriate class based on whether it is active or not
            if (active) {
                star.addClass('active-star');
                star.removeClass('inactive-star');
            } else {
                star.addClass('inactive-star');
                star.removeClass('active-star');
            }
        });
    });
});
