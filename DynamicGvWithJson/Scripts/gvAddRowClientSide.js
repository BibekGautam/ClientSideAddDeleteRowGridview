/// <reference path="jquery-1.8.2.min.js" />
//$(document).ready(function () {
//    $('#Popup').hide();
//});
function AddNewRecord() {
    if ($.trim($('table#gvDynamicRowAdd tbody tr:last').find(':input[type=text]').val()) == "") {
        var LastRowPosition = $('table#gvDynamicRowAdd tbody tr:last').offset().top;
        $('#Popup').show().css("display", "block").animate({ top: LastRowPosition - 8 }, 500);
        $('table#gvDynamicRowAdd tbody tr:last').find(':input[type=text]').focus();
        return;
    }
    if ($.trim($('table#gvDynamicRowAdd tbody tr:last').find('select option:selected').val()) == "0") {
        var LastRowPosition = $('table#gvDynamicRowAdd tbody tr:last').offset().top;
        $('#Popup').show().css("display", "block").animate({ top: LastRowPosition - 8 }, 500);
        $('table#gvDynamicRowAdd tbody tr:last').find('select').focus();
        return;
    }
    $('#Popup').show().css("display", "none");
    var grd = document.getElementById('gvDynamicRowAdd');
    var index = $("tr:last td:nth-child(1) span").text();
    var tbod = grd.rows[0].parentNode;
    var newRow = grd.rows[grd.rows.length - 1].cloneNode(true);
    var $row = $(newRow);
    index = parseInt(index) + 1;
    $row.find(':input[type=text]').val("");
    //$row.find('#lblId').html(index);
    tbod.appendChild(newRow);
    $('table#gvDynamicRowAdd tbody tr').each(function (i, n) {
        $(this).find('span').html(i);
    });
}

$(document).ready(function () {
    $("table#gvDynamicRowAdd .removeRow").live("click", function () {
        $('#Popup').show().css("display", "none");
        var NumberOfrows = $('table#gvDynamicRowAdd tbody tr').length;
        //one is header and another is one row so minimum number of rows is 2
        if (NumberOfrows > 2) {
            var Confirm = window.confirm("Are you sure you want to delete this record?")
            if (Confirm) {
                $(this).parents("tr").remove();
            }
        }
        $('table#gvDynamicRowAdd tbody tr').each(function (i, n) {
            $(this).find('span').html(i);
        });
    });
});

function TableToJson() {
    var rows = [];
    var JsonRow = '{';
    $('table#gvDynamicRowAdd tbody tr').each(function (i, n) {
        var $row = $(n);
        var Numberoftd = $row.children('td').length;
        //if not header and if not prototype
        if (i != 0) {
            $(this).find('td').each(function (j, d) {
                //if not last column(which contains delete link)
                if (j != 3) {
                    var $td = $(d);
                    //if not last column for current tr
                    if (j != Numberoftd - 2) {
                        if ($td.find('span').length > 0) {
                            JsonRow = JsonRow + '"' + $.trim($(this).closest('table').find('th').eq($td.index()).text()) + '"' + ":" + '"' + $td.find('span').text() + '",'
                        }
                        else if ($td.find('input[type=text]').length > 0) {
                            JsonRow = JsonRow + '"' + $.trim($(this).closest('table').find('th').eq($td.index()).text()) + '"' + ":" + '"' + $td.find('input[type=text]').val() + '",'
                        }
                        else {
                            JsonRow = JsonRow + '"' + $.trim($(this).closest('table').find('th').eq($td.index()).text()) + '"' + ":" + '"' + $td.find('select option:selected').val() + '",'
                        }
                    }
                    //if it is the last column for current tr
                    else {
                        if ($td.find('span').length > 0) {
                            JsonRow = JsonRow + '"' + $.trim($(this).closest('table').find('th').eq($td.index()).text().replace("Remove", "")) + '"' + ":" + '"' + $td.find('span').text() + '"}'
                        }
                        else if ($td.find('input[type=text]').length > 0) {
                            JsonRow = JsonRow + '"' + $.trim($(this).closest('table').find('th').eq($td.index()).text().replace("Remove", "")) + '"' + ":" + '"' + $td.find('input[type=text]').val() + '"}'
                        }
                        else {
                            JsonRow = JsonRow + '"' + $.trim($(this).closest('table').find('th').eq($td.index()).text().replace("Remove", "")) + '"' + ":" + '"' + $td.find('select option:selected').val() + '"}'
                        }
                    }
                }
            });
            alert(JsonRow);
            rows.push(JsonRow);
            JsonRow = '{';
        }
    });
    alert(rows);
    //debugger;
}
    