// 定时器
let time = 5;
// 已选中的ID集合
let selIds = [];
$(function () {
    let index = 0;
    let lis = $(".left-content ul li");
    time = setInterval(function () {
        index++;
        let random = Math.ceil(Math.random() * (lis.length + 1));
        lis.removeClass("check");
        let li = $(lis).eq(random - 1);
        $(li).addClass("check");
        if (li.attr('id') != null) {
            if (index % 10 === 0) {
                if (selIds.length === 0) {
                    selIds.push(li.attr("id"));
                    appendToRight(li.find("span").text());
                } else {
                    for (let i = 0; i < selIds.length; i++) {
                        if ($.inArray(li.attr('id'), selIds) === -1) {
                            selIds.push(li.attr("id"));
                            appendToRight(li.find("span").text());
                        }
                    }
                }
            }
        }
        // 选中5个就停止
        if (selIds.length === 1) {
            clearInterval(time);
            $(".left-content ul li").removeClass("check");
        }
    }, 100);
})

// 选中的项目添加到右侧列表
function appendToRight(name) {
    let html = "<li>" + name + "</li>";
    $(".right-content .select-result").append(html);
}
