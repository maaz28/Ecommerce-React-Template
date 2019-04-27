import React from 'react';

export default function MapContainer () {
    return (
        <div class="contact-map margin-bottom-55">

	{/* <!-- Google Maps --> */}
	<div class="google-map-container">
		<div id="propertyMap" data-latitude="19.429367" data-longitude="-99.209006"></div>
		<a href="#" id="streetView">Street View</a>
	</div>
	{/* <!-- Google Maps / End --> */}

	{/* <!-- Office --> */}
	<div class="address-box-container">
		<div class="address-container" data-background-image="images/our-office.jpg">
			<div class="office-address">
				<h3>Corporativo</h3>
				<ul>
					<li>Montes Urales 320</li>
					<li>Lomas de Chapultepec</li>
					<li>CDMX, 11000</li>
				</ul>
			</div>
		</div>
	</div>
	{/* <!-- Office / End --> */}

</div>
    )
}