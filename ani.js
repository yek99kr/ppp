

window.onload=function(){

    $('.close').click(function(){
        $('.modal iframe').each(function(){
        var el_src = $(this).attr("src");
        $(this).attr("src",el_src);
      });
        $("video").each(function(){
    $(this).get(0).pause();
});

    });



	var modalBtns=document.querySelectorAll(".button");

	modalBtns.forEach(function(btn){
		btn.onclick=function(){
			var modal=btn.getAttribute('data-modal');

			document.getElementById(modal).style.display='block';
		};

	});

	var closeBtns=document.querySelectorAll(".close");

	closeBtns.forEach(function(btn){
		btn.onclick= function(){
			var modal=(btn.closest(".modal").style.display="none");
		};
	});

	window.onclick=function(e){
		if (e.target.className === "modal"){
			e.target,style.display = "none";
		}
	};


	};

	$(document).ready(
	function(){ animateDiv();}
	

	);

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 180;
    var w = $(window).width() - 180;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.a').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.a').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.05;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

};

function openNav() {
  document.getElementById("menu").style.display = "block";
}

function closeNav() {
  document.getElementById("menu").style.display = "none";
}



        document.addEventListener('mousemove', e => {
            document.querySelector('.cursor').setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
        })

          document.addEventListener('click', () => {
            document.querySelector('.cursor').classList.add("expand");

            setTimeout(() => {
                document.querySelector('.cursor').classList.remove("expand");
            }, 500)
        })

   

