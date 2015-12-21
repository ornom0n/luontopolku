(function(){
	var cursorChecker;
	var x, y;

  (function init(){
    
  })();

  document.onmousemove = function( event ) {
  	x = event.clientX;
    y = event.clientY;

    var trees = document.getElementsByClassName('tree');
  	var heka = document.getElementsByClassName('heka');
  	var newLeft, newTop, hekaLeft, hekaTop;

  	for( var i = 0; i < trees.length; i++ ){
  		transformation( trees[i], x, y, 8, 10 );
  	}

  	transformation( heka[0], x, y, 15, 15 );

  }

  function transformation( _element, _x, _y, _leftSpeed, _topSpeed ){
  	var newLeft = -( _x / _leftSpeed );
  	var newTop = -( _y / _topSpeed );
  	_element.style.transform = 'translate(' + newLeft + 'px, '+ newTop + 'px)';
  }

})();