$(document).ready(() => {
    $("#currentDay").text(moment().format('dddd, MMMM Do'));
    let currentHour = moment().get('hour'),
        tmp,
        textarea;
    $('#hoursList li').each((i, elem) => {
        tmp = i + 9;
        textarea = $(elem).find('textarea');
        if(localStorage.getItem(tmp.toString()) !== null) {
            $(textarea).val(localStorage.getItem(tmp.toString()));
        }
        if(currentHour === tmp) {
            textarea.addClass('present');
        } else if (currentHour > tmp) {
            textarea.addClass('past');
        } else if (currentHour < tmp) {
            textarea.addClass('future');
        }
    });
    $('.saveBtn').on('click', e => {
        e.preventDefault();
        let textarea = $(e.currentTarget).prev('textarea');
        localStorage.setItem(textarea.attr('id'), textarea.val());
    });
});