import React from 'react';

export default function FlipBanner() {
    return (
<a href="#" class="flip-banner parallax" data-background="images/flip-banner-bg.jpg" data-color="#444" data-color-opacity="0.9" data-img-width="2500" data-img-height="1600">
	<div class="flip-banner-content">
		<h2 class="flip-visible">Ayudamos a que las personas y las propiedades se encuentren.</h2>
		<h2 class="flip-hidden">Ver Propiedades <i class="sl sl-icon-arrow-right"></i></h2>
	</div>
</a>
    )
}