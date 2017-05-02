angular.module('app').controller('mainCtrl', function($scope, mainSrv){
  console.log('Enjoy your stay.');



  $(function() {

  var $window           = $(window),
      win_height_padded = $window.height() * 1.1,
      isTouch           = Modernizr.touch;

  if (isTouch) { $('.revealOnScroll').addClass('animated'); }

  $window.on('scroll', revealOnScroll);

  function revealOnScroll() {
    var scrolled = $window.scrollTop(),
        win_height_padded = $window.height() * 1.1;

    // Showed...
    $(".revealOnScroll:not(.animated)").each(function () {
      var $this     = $(this),
          offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
        if ($this.data('timeout')) {
          window.setTimeout(function(){
            $this.addClass('animated fadeInLeft ');
          }, parseInt($this.data('timeout'),20));
        } else {
          $this.addClass('animated fadeInLeft ');
        }
      }
    });
    // Hidden...
   $(".revealOnScroll.animated").each(function (index) {
      var $this     = $(this),
          offsetTop = $this.offset().top;
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('animated fadeInUp shake fadeInLeft')
      }
    });
  }

  revealOnScroll();
});

    $scope.collapsibleElements = [{
        icon: 'mdi-image-filter-drama',
        title: 'Skema',
        stack: 'Stack: ReactJS, ExpressJS, NodeJS, ElephantSQL',
        description: 'Description: Scheduling app for service businesses. \n Notes: Facebook Authorization, Collaboration with 3 developers, Component based'
    },{
        icon: 'mdi-maps-place',
        title: 'TQKIT',
        stack: 'Stack: AngularJS, ExpressJS, NodeJS, PostgreSQL',
        description: 'Description: Client Management tool and work ticket system to faciliate project oversight'
    },{
        icon: 'mdi-social-whatshot',
        title: 'MyReps',
        stack: 'Stack: AngularJS, ExpressJS, NodeJS, PostgreSQL',
        description: 'Description: Google Civic API Integration to find local, state, and congressional representatives based on location'
    }
];






})
