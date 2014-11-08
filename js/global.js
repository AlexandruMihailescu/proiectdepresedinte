/*(function($) {
    $.fn.textfill = function(maxFontSize) {
        maxFontSize = parseInt(maxFontSize, 10);
        return this.each(function(){
            var ourText = $("span", this),
                parent = ourText.parent(),
                maxHeight = parent.height(),
                maxWidth = parent.width(),
                fontSize = parseInt(ourText.css("fontSize"), 10),
                multiplierWidth = maxWidth/ourText.width(),
                multiplierHeight = maxHeight/ourText.height();
                multiplier=(multiplierHeight<multiplierWidth)?
                  multiplierHeight: multiplierWidth;
                newSize = (fontSize*(multiplier-0.1));
            ourText.css(
                "fontSize", 
                (maxFontSize > 0 && newSize > maxFontSize) ? 
                    maxFontSize : 
                    newSize
            );
        });
    };
})(jQuery);
window.addEventListener("resize", function(){$("div").textfill()});
$("div").textfill(); */