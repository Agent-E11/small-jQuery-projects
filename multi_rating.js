$(document).ready(function(){
    // Populate each rating box with stars
    $('.rating-list').each(function(_, rating_list){
        $(rating_list).html(`
            <a class="list-inline-item m-0 star">&#9733;</a>
            <a class="list-inline-item m-0 star">&#9733;</a>
            <a class="list-inline-item m-0 star">&#9733;</a>
            <a class="list-inline-item m-0 star">&#9733;</a>
            <a class="list-inline-item m-0 star">&#9733;</a>
        `).addClass('list-inline');
    });

    // Update rating when a star is clicked
    $('.star').click(function(event){
        event.preventDefault(); // Don't redirect

        const clicked_star = $(this);
        const rating_list = $(clicked_star).parent();

        // The index of the current star, in relation to the list of stars
        // (Ignores non-stars)
        let index = $(`#${rating_list.attr('id')} a.star`).index(clicked_star);

        // Color the stars based on index
        $(`#${rating_list.attr('id')} a.star`).each(function(_, obj){
            const current_star = $(this);

            // If "the index of the current star, in the list of stars" is less than "the index of the clicked star"
            if ($(`#${rating_list.attr('id')} a.star`).index(current_star) <= index) {
                // Give it the active color
                current_star.addClass('active-star');
                current_star.removeClass('inactive-star');
            } else {
                // Give it the inactive color
                current_star.addClass('inactive-star');
                current_star.removeClass('active-star');
            }
        });
    });
});
