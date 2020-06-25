// $(function(){
//     $('[data-spy="scroll"]').each(function(){var $spy = $($(this)).offset().top -50 .scrollspy('refresh');});
// });
$(document).ready(function() {
    $(function(){$('[data-toggle="tooltip"]').tooltip()});
    $('.single').select2();
    $(".multiple").select2({maximumSelectionLength:5,allowClear: true});
    $('#JobsNavTabs>ul>li>a.nav-link').click(function(event){
      event.preventDefault();
      var sectionTo = $(this).attr('href');
      $('html, body').animate({scrollTop: $(sectionTo).offset().top -40}, 1500);
    });
    setTimeout(function(){
        $('#Location').modal('show');
    }, 2000);
  });