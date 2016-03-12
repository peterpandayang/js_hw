$(function() {
    customers.sort(compareByAttr("revenue", true));
    
    function compareByAttr(attr, desc) {
        return function(c1, c2) {
            if (c1[attr] > c2[attr]) {
                return 1 * (desc ? -1 : 1);
            } else if (c1[attr] < c2[attr]) {
                return -1 * (desc ? -1 : 1);
            } else {
                return 0;
            }
        };
    }
    
    industries.sort();
    var $sel = $('#industrySel');
    $.each(industries, function(index, val) {
        $opt = $('<option></option>').val(val).text(val);
        $sel.append($opt);
    });
    
    $('th:last span').addClass('desc');

    var $tbody = $('tbody');

    $.each(customers, function(index, customer) {
        $tr = $('<tr></tr>').attr('id', customer.name)
                .append($('<td></td>').text(customer.name))
                .append($('<td></td>').text(customer.industry))
                .append($('<td></td>').text(customer.state))
                .append($('<td></td>').text(customer.revenue))
        $tbody.append($tr);
    });
    
    $('span').on('click', function() {
        $('tbody tr').unhighlight();
        var attr = $(this).parent().attr('id');
        var desc = $(this).is('.desc');
        customers.sort(compareByAttr(attr, !desc));
        $.each(customers, function(index, customer) {
            var curr = $tbody.find("[id='" + customer.name + "']");
            $tbody.append(curr);
        });
        $('span').removeClass();
        $(this).addClass(desc ? 'asc' : 'desc');
        highlight($('#highlight').val());
    });
    
    $('#industrySel').on('change', function() {
        var sel = $(this).val();
        if (sel === "All") {
            $('tbody tr').show();
        } else {
            $('tbody tr').each(function() {
                if ($(this).find('td:eq(1)').text() === $('#industrySel').val()) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
    })
    
    $('#highlight').on('keyup', function() {
        $('tbody tr').unhighlight();
        highlight($(this).val());
    });
    
    function highlight(term) {
        if (term !== "") {
            $('tbody tr').highlight(term);
        }
    }
});