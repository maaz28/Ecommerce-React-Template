import React from 'react';
import IMG from '../../images/listing-01.jpg'

export default function Content () {
    return (
        <div class="container">
	<div class="row">

		<div class="col-md-12">
			<h3 class="headline margin-bottom-25 margin-top-65">Nuevas Propiedades</h3>
		</div>


		<div class="col-md-12">
			<div class="carousel">


					<div class="carousel-item">
					<div class="listing-item">

						<a href="single-property-page-1.html" class="listing-img-container">

							<div class="listing-badges">
								<span>Venta</span>
							</div>

							<div class="listing-img-content">
								<span class="listing-price">$5,100,000 USD</span>
								<span class="like-icon with-tip" data-tip-content="Agregar a favoritos"></span>
							</div>

							<div class="listing-carousel">
								<div><img src={IMG} alt=""/></div>
								<div><img src="images/listing-01b.jpg" alt=""/></div>
								<div><img src="images/listing-01c.jpg" alt=""/></div>
							</div>

						</a>

						<div class="listing-content">

							<div class="listing-title">
								<h4><a href="single-property-page-1.html">Departamento Nuevo</a></h4>
								<a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom" class="listing-address popup-gmaps">
									<i class="fa fa-map-marker"></i>
									Montes Urales, Lomas de Chapultepec.
								</a>
							</div>

							<ul class="listing-features">
								<li>Construcción <span>530 m&sup2;</span></li>
								<li>Recámaras <span>2</span></li>
								<li>Baños <span>1</span></li>
							</ul>

							<div class="listing-footer">
								<a href="#"><i class="fa fa-user"></i> Juan Herrera</a>
							</div>

						</div>

					</div>
				</div>



				<div class="carousel-item">
					<div class="listing-item">

						<a href="single-property-page-2.html" class="listing-img-container">

							<div class="listing-badges">
								<span>Renta</span>
							</div>

							<div class="listing-img-content">
								<span class="listing-price">$24,000 MXN</span>
								<span class="like-icon with-tip" data-tip-content=" Agregar a favoritos"></span>

							</div>

							<img src={IMG} alt=""/>

						</a>

						<div class="listing-content">

							<div class="listing-title">
								<h4><a href="single-property-page-2.html">Vistas Espectaculares</a></h4>
								<a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom" class="listing-address popup-gmaps">
									<i class="fa fa-map-marker"></i>
									Hegel, Polanco.
								</a>
							</div>

							<ul class="listing-features">
								<li>Construcción <span>100 m&sup2;</span></li>
								<li>Recámaras <span>2</span></li>
								<li>Baños <span>1</span></li>
							</ul>

							<div class="listing-footer">
								<a href="#"><i class="fa fa-user"></i> Sergio Rojkind</a>
							</div>

						</div>

					</div>
				</div>



				<div class="carousel-item">
					<div class="listing-item">

						<a href="single-property-page-1.html" class="listing-img-container">

							<div class="listing-badges">
								<span>Renta</span>
							</div>

							<div class="listing-img-content">
								<span class="listing-price">$17,000 MXN</span>
								<span class="like-icon with-tip" data-tip-content=" Agregar a favoritos"></span>

							</div>

							<img src={IMG} alt=""/>

						</a>

						<div class="listing-content">

							<div class="listing-title">
								<h4><a href="single-property-page-1.html">Villas Sol</a></h4>
								<a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom" class="listing-address popup-gmaps">
									<i class="fa fa-map-marker"></i>
									Monte Blanco, Lomas de Chapultepec.
								</a>
							</div>

							<ul class="listing-features">
								<li>Construcción <span>150 m&sup2;</span></li>
								<li>Recámaras <span>2</span></li>
								<li>Baños <span>1</span></li>
							</ul>

							<div class="listing-footer">
								<a href="#"><i class="fa fa-user"></i> Diego Luna</a>
							</div>

						</div>
	

					</div>
				</div>



				<div class="carousel-item">
					<div class="listing-item">


						<a href="single-property-page-3.html" class="listing-img-container">

							<div class="listing-badges">
								<span>Venta</span>
							</div>

							<div class="listing-img-content">
								<span class="listing-price">$420,000</span>
								<span class="like-icon with-tip" data-tip-content=" Agregar a favoritos"></span>

							</div>

							<div class="listing-carousel">
								<div><img src={IMG} alt=""/></div>
								<div><img src="images/listing-04b.jpg" alt=""/></div>
							</div>

						</a>

						<div class="listing-content">

							<div class="listing-title">
								<h4><a href="single-property-page-3.html">Departamento</a></h4>
								<a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom" class="listing-address popup-gmaps">
									<i class="fa fa-map-marker"></i>
									Monte Blanco, Lomas de Chapultepec.
								</a>
							</div>

							<ul class="listing-features">
								<li>Construcción <span>530 m&sup2;</span></li>
								<li>Recámaras <span>2</span></li>
								<li>Baños <span>1</span></li>
							</ul>

							<div class="listing-footer">
								<a href="#"><i class="fa fa-user"></i> Juan Sanchez</a>
							</div>

						</div>
	

					</div>
				</div>



				<div class="carousel-item">
					<div class="listing-item">


						<a href="single-property-page-1.html" class="listing-img-container">
							<div class="listing-badges">
								<span>Venta</span>
							</div>

							<div class="listing-img-content">
								<span class="listing-price">$535,000</span>
								<span class="like-icon with-tip" data-tip-content=" Agregar a favoritos"></span>

							</div>

							<img src={IMG} alt=""/>
						</a>

						<div class="listing-content">

							<div class="listing-title">
								<h4><a href="single-property-page-1.html">Villas del Arbol</a></h4>
								<a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom" class="listing-address popup-gmaps">
									<i class="fa fa-map-marker"></i>
									Monte Blanco, Lomas de Chapultepec.
								</a>
							</div>

							<ul class="listing-features">
								<li>Construcción <span>220 m&sup2;</span></li>
								<li>Recámaras <span>5</span></li>
								<li>Baños <span>3.5</span></li>
							</ul>

							<div class="listing-footer">
								<a href="#"><i class="fa fa-user"></i> Nancy Luz</a>
							</div>

						</div>
	

					</div>
				</div>



			</div>
		</div>

	</div>
</div>
    )
}