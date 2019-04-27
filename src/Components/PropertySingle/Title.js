import React from 'react';

export default function Title (props) {
    return (
        <div id="titlebar" class="property-titlebar margin-bottom-0">
	<div class="container">
		<div class="row">
			<div class="col-md-12">

				<a href="listings-list-with-sidebar.html" class="back-to-listings"></a>
				<div class="property-title">
					<h2>Departmento Palmas <span class="property-badge">Venta</span></h2>
					<span>
						<a href="#location" class="listing-address">
							<i class="fa fa-map-marker"></i>
							Palmas, Lomas de Chapultepec, Miguel Hidalgo, CDMX.
						</a>
					</span>
				</div>

				<div class="property-pricing">
					<div class="property-price">$420,000 USD</div>
				</div>


			</div>
		</div>
	</div>
</div>
    )
}