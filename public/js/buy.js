
$("form").submit(function(){
                        var $form = $(this);
                        $.post(
                            $form.attr("/"),
                            $form.serialize() 
                        );
                        $("#buttonBuy").text("Заказ оформлен!");
                         $("#buttonBuy").prop('disabled', true);
                        return false;
                    });

