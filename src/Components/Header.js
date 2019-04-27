import React from 'react';

export default function Header(){
    return (
      <div className="App">
      <div id="top-bar">
		<div class="container">

			<div class="left-side">

				<ul class="top-bar-menu">
					<li><i class="fa fa-phone"></i><a href="tel:55204000"> 55 20 4000 </a></li>
					<li><i class="fa fa-envelope"></i> <a href="mailto:contacto@rojkind.com.mx">contacto@rojkind.com.mx</a></li>
				</ul>

			</div>
			<div class="right-side">

				<ul class="social-icons">
					<li><a class="facebook" href="#"><i class="icon-facebook"></i></a></li>
					<li><a class="twitter" href="#"><i class="icon-twitter"></i></a></li>
					<li><a class="linkedin" href="#"><i class="icon-linkedin"></i></a></li>
				</ul>

			</div>

		</div>
	</div>
	<div class="clearfix"></div>
      </div>
    );
}