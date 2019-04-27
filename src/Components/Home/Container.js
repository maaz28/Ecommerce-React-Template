import React from 'react';
import IMG1 from '../../images/logo.png'

export default function Container() {
    return(
        <div class="container">
	<div class="row">

		<div class="col-md-12"> 
			<h3 class="headline centered margin-bottom-35 margin-top-10">Colonias mas buscadas <span>Encuentra propiedades en las mejores zonas.</span></h3>
		</div>
		<div class="col-md-4" >
			{/* <!-- Image Box --> */}
			<a href="listings-list-with-sidebar.html" class="img-box">

				<div class="listing-badges">

				</div>

				<div class="img-box-content visible">
					<h4>Lomas de Chapultepec </h4>
					<span>14 Propiedades</span>
				</div>
			</a>

		</div>

		<div class="col-md-8">

			{/* <!-- Image Box --> */}
			<a href="listings-list-with-sidebar.html" class="img-box" data-background-image="images/popular-location-02.jpg">
				<div class="img-box-content visible">
					<h4>Condesa</h4>
					<span>24 Propiedades</span>
				</div>
			</a>

		</div>

		<div class="col-md-8">

			{/* <!-- Image Box --> */}
			<a href="listings-list-with-sidebar.html" class="img-box" data-background-image="images/popular-location-03.jpg">
				<div class="img-box-content visible">
					<h4>Polanco </h4>
					<span>12 Propiedades</span>
				</div>
			</a>

		</div>

		<div class="col-md-4">

			{/* <!-- Image Box --> */}
			<a href="listings-list-with-sidebar.html" class="img-box" data-background-image="images/popular-location-04.jpg">
				<div class="img-box-content visible">
					<h4>Santa Fe</h4>
					<span>9 Propiedades</span>
				</div>
			</a>

		</div>

	</div>
</div>
    )
}