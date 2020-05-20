$(document).ready(function () {
    $('#getStart').click(function () {
        $('#fail').hide();
        let name = $('#inpName').val(),
            email = $('#inpEm').val(),
            message = $('#inpMess').val(),
            fail = '';
        if (name.length <= 1) {
            fail = 'Enter Name';
        } else if (email.split('@').length - 1 == 0 ||
            email.split('.').length - 1 == 0) {
            fail = 'email is not correct';
        } else if (message.length >= 25) {
            fail = 'Message:25 character limit';
        }
        if (fail != '') {
            $('#fail').html(fail + '<div class="clear"><br></div>');
            $('#fail').show();
            return false;
        }
        $.ajax({
            url: '/ajax/feedback.php',
            type: 'POST',
            cache: false,
            data: { 'name': name, 'email': email, 'message': message },
            dataType: 'html',
            success: function (data) {

            }
        });
    });
});