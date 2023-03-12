$('a').click(function(){
    if(this.attr('target') != "_blank" && this.attr('href') !="" && this.attr('href') !="#"){
        $('#pre_loader').show();
    }
});
window.addEventListener("load", function(){
    $('#pre_loader').hide();
});