$(document).ready(function (){
    $("#btn-open-cart").click(function(){
        if($(".visible-cart").size() > 0){
            $(".visible-cart").remove();
            $(".product").removeClass("four");
        }
        else{
            var products = $(".product");
            for(var i = 1; i < products.length + 1; i ++){
                if(i % 4 == 0){
                    $(products[i-1]).addClass("four");
                    $(products[i-1]).after("<div class='col-lg-4 visible-cart'></div><div class='clearfix visible-cart'></div>");
                }
            };
        }
    });
});
