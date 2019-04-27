import React from 'react';

export default function Container() {

    return (
        <div class="container">
	<div class="row">

		{/* <!-- Property Description --> */}
		<div class="col-lg-8 col-md-7">
			<div class="property-description">

				{/* <!-- Main Features --> */}
				<ul class="property-main-features">
					<li>Construcción <span>400 m&sup2;</span></li>
					<li>Recámaras <span>2</span></li>
					<li>Baños <span>1</span></li>
					<li>Estacionamientos <span>3</span></li>
				</ul>


				{/* <!-- Description --> */}
				<h3 class="desc-headline">Descripción</h3>
				<div class="show-more">
					<p>
						Ut euismod ultricies sollicitudin. Curabitur sed dapibus nulla. Nulla eget iaculis lectus. Mauris ac maximus neque. Nam in mauris quis libero sodales eleifend. Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut tristique elit risus at metus. Sed fermentum, lorem vitae efficitur imperdiet, neque velit tristique turpis, et iaculis mi tortor finibus turpis.
					</p>

					<p>
						 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra a. Aliquam pellentesque nibh et nibh feugiat gravida. Maecenas ultricies, diam vitae semper placerat, velit risus accumsan nisl, eget tempor lacus est vel nunc. Proin accumsan elit sed neque euismod fringilla. Curabitur lobortis nunc velit, et fermentum urna dapibus non. Vivamus magna lorem, elementum id gravida ac, laoreet tristique augue. Maecenas dictum lacus eu nunc porttitor, ut hendrerit arcu efficitur.
					</p>

					<p>
						Nam mattis lobortis felis eu blandit. Morbi tellus ligula, interdum sit amet ipsum et, viverra hendrerit lectus. Nunc efficitur sem vel est laoreet, sed bibendum eros viverra. Vestibulum finibus, ligula sed euismod tincidunt, lacus libero lobortis ligula, sit amet molestie ipsum purus ut tortor. Nunc varius, dui et sollicitudin facilisis, erat felis imperdiet felis, et iaculis dui magna vitae diam. Donec mattis diam nisl, quis ullamcorper enim malesuada non. Curabitur lobortis eu mauris nec vestibulum. Nam efficitur, ex ac semper malesuada, nisi odio consequat dui, hendrerit vulputate odio dui vitae massa. Aliquam tortor urna, tincidunt ut euismod quis, semper vel ipsum. Ut non vestibulum mauris. Morbi euismod, felis non hendrerit viverra, nunc sapien bibendum ligula, eget vehicula nunc dolor eu ex. Quisque in semper odio. Donec auctor blandit ligula. Integer id lectus non nibh vulputate efficitur quis at arcu.
					</p>

					<a href="#" class="show-more-button">Ver mas <i class="fa fa-angle-down"></i></a>
				</div>

				{/* <!-- Features --> */}
				<h3 class="desc-headline">Amenities</h3>
				<ul class="property-features checkboxes margin-top-0">
					<li>Aire acondicionado</li>
					<li>Alberca</li>
					<li>Gimnasio</li>
					<li>Alarma</li>
					<li>Fibra Optica</li>
				</ul>


				{/* <!-- Floorplans --> */}
				<h3 class="desc-headline no-border">Planos</h3>
				{/* <!-- Accordion --> */}
				<div class="style-1 fp-accordion">
					<div class="accordion">

						<h3>Piso Uno <span>460 m&sup2;</span> <i class="fa fa-angle-down"></i> </h3>
						<div>
						<a class="floor-pic mfp-image" href="https://i.imgur.com/kChy7IU.jpg">
							<img src="https://i.imgur.com/kChy7IU.jpg" alt=""/>
						</a>
						<p>Mauris mauris ante, blandit et, ultrices a, susceros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate aliquam egestas litora torquent conubia.</p>
						</div>

						<h3>Piso Dos <span>220 m&sup2;</span> <i class="fa fa-angle-down"></i> </h3>
						<div>
						<a class="floor-pic mfp-image" href="https://i.imgur.com/kChy7IU.jpg">
							<img src="https://i.imgur.com/kChy7IU.jpg" alt=""/>
						</a>
						<p>Mauris mauris ante, blandit et, ultrices a, susceros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate aliquam egestas litora torquent conubia.</p>
						</div>

					</div>
				</div>


				{/* <!-- Location --> */}
				<h3 class="desc-headline no-border" id="location">Ubicación</h3>
				<div id="propertyMap-container">
					<div id="propertyMap" data-latitude="40.7427837" data-longitude="-73.11445617675781"></div>
					<a href="#" id="streetView">Street View</a>
				</div>


				{/* <!-- Similar Listings Container --> */}
				<h3 class="desc-headline no-border margin-bottom-35 margin-top-60">Propiedades Similares</h3>

				{/* <!-- Layout Switcher --> */}

				<div class="layout-switcher hidden"><a href="#" class="list"><i class="fa fa-th-list"></i></a></div>
				<div class="listings-container list-layout">

					{/* <!-- Listing Item --> */}
					<div class="listing-item">

						<a href="#" class="listing-img-container">

							<div class="listing-badges">
								<span>Renta</span>
							</div>

							<div class="listing-img-content">
								<span class="listing-price">$17,000</span>
								<span class="like-icon"></span>
							</div>

							<img src="images/listing-03.jpg" alt=""/>

						</a>

						<div class="listing-content">

							<div class="listing-title">
								<h4><a href="#">Torres Altas</a></h4>
								<a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom" class="listing-address popup-gmaps">
									<i class="fa fa-map-marker"></i>
									Monte Atos, Lomas de Chapultepec.
								</a>

								<a href="#" class="details button border">Detalles</a>
							</div>

							<ul class="listing-details">
								<li>230 m&sup2;</li>
								<li>1 Recámaras</li>
								<li>3 Habitaciónes</li>
								<li>2 Baños</li>
							</ul>

							<div class="listing-footer">
								<a href="#"><i class="fa fa-user"></i> Juan Sanchez</a>
							</div>

						</div>
						{/* <!-- Listing Item / End --> */}

					</div>
					{/* <!-- Listing Item / End --> */}


					{/* <!-- Listing Item --> */}
					<div class="listing-item">

						<a href="#" class="listing-img-container">

							<div class="listing-badges">
								<span>Venta</span>
							</div>

							<div class="listing-img-content">
								<span class="listing-price">$420,000</span>
								<span class="like-icon"></span>
							</div>

							<div><img src="images/listing-04.jpg" alt=""/></div>

						</a>

						<div class="listing-content">

							<div class="listing-title">
								<h4><a href="#">Torres Ultra</a></h4>
								<a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom" class="listing-address popup-gmaps">
									<i class="fa fa-map-marker"></i>
									Palmas, Lomas de Chapultepec.
								</a>

								<a href="#" class="details button border">Detalles</a>
							</div>

							<ul class="listing-details">
								<li>540 m&sup2;</li>
								<li>1 Recámaras</li>
								<li>3 Habitaciónes</li>
								<li>2 Baños</li>
							</ul>

							<div class="listing-footer">
								<a href="#"><i class="fa fa-user"></i> Leor Cohen</a>
							</div>

						</div>
						{/* <!-- Listing Item / End --> */}

					</div>
					{/* <!-- Listing Item / End --> */}


					{/* <!-- Listing Item --> */}
					<div class="listing-item">

						<a href="#" class="listing-img-container">
							<div class="listing-badges">
								<span>Venta</span>
							</div>

							<div class="listing-img-content">
								<span class="listing-price">$535,000</span>
								<span class="like-icon"></span>
							</div>

							<img src="images/listing-05.jpg" alt=""/>
						</a>

						<div class="listing-content">

							<div class="listing-title">
								<h4><a href="#">Condominio Lomas</a></h4>
								<a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom" class="listing-address popup-gmaps">
									<i class="fa fa-map-marker"></i>
									Montes Urales, Lomas de Chapultepec.
								</a>

								<a href="#" class="details button border">Detalles</a>
							</div>

							<ul class="listing-details">
								<li>350 m&sup2;</li>
								<li>1 Recámaras</li>
								<li>3 Habitaciónes</li>
								<li>2 Baños</li>
							</ul>

							<div class="listing-footer">
								<a href="#"><i class="fa fa-user"></i> Martha Halpert</a>
							</div>

						</div>
						{/* <!-- Listing Item / End --> */}

					</div>
					{/* <!-- Listing Item / End --> */}

				</div>
				{/* <!-- Similar Listings Container / End --> */}

			</div>
		</div>
		{/* <!-- Property Description / End --> */}


		{/* <!-- Sidebar --> */}
		<div class="col-lg-4 col-md-5">
			<div class="sidebar sticky right">

				{/* <!-- Widget --> */}
				<div class="widget margin-bottom-30">
					<button class="widget-button with-tip" data-tip-content="Imprimir"><i class="sl sl-icon-printer"></i></button>
					<button class="widget-button with-tip" data-tip-content="Agregar a favoritos"><i class="fa fa-star-o"></i></button>
					<div class="clearfix"></div>
				</div>
				{/* <!-- Widget / End --> */}


				{/* <!-- Widget --> */}
				<div class="widget">

					{/* <!-- Agent Widget --> */}
					<div class="agent-widget">
						<div class="agent-title">
							<div class="agent-photo"><img src="images/agent-avatar.jpg" alt="" /></div>
							<div class="agent-details">
								<h4><a href="#">Sergio Rojkind</a></h4>
								<span><i class="sl sl-icon-call-in"></i><a href="tel:551001000">044 55 100 1000</a></span>
							</div>
							<div class="clearfix"></div>
						</div>

						<input type="text" placeholder="Tu Correo" pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$"/>
						<input type="text" placeholder="Tu Celular"/>
						<textarea>Estoy interesado en la propiedad [ID 123456] y quisiera saber mas.</textarea>
						<button class="button fullwidth margin-top-5">Enviar Mensaje</button>
					</div>
					{/* <!-- Agent Widget / End --> */}

				</div>
				{/* <!-- Widget / End --> */}


				{/* <!-- Widget --> */}
				<div class="widget">
					<h3 class="margin-bottom-30 margin-top-30">Simulador Crédito Hipotecario</h3>

					{/* <!-- Mortgage Calculator --> */}
					<form action="javascript:void(0);" autocomplete="off" class="mortgageCalc" data-calc-currency="MXN">
						<div class="calc-input">
							<div class="pick-price tip" data-tip-content="Set This Property Price"></div>
						    <input type="text" id="amount" name="amount" placeholder="Precio" required/>
						    <label for="amount" class="fa fa-usd"></label>
						</div>

						<div class="calc-input">
						    <input type="text" id="downpayment" placeholder="Enganche"/>
						    <label for="downpayment" class="fa fa-usd"></label>
						</div>

						<div class="calc-input">
							<input type="text" id="years" placeholder="Tiempo" required/>
							<label for="years" class="fa fa-calendar-o"></label>
						</div>

						<div class="calc-input">
							<input type="text" id="interest" placeholder="Tasa de Interes" required/>
							<label for="interest" class="fa fa-percent"></label>
						</div>

						<button class="button calc-button" formvalidate>Calcular</button>
						<div class="calc-output-container"><div class="notification success">Pago Mensual: <strong class="calc-output"></strong></div></div>
					</form>
					{/* <!-- Mortgage Calculator / End --> */}

				</div>
				{/* <!-- Widget / End --> */}


			</div>
		</div>
		{/* <!-- Sidebar / End --> */}

	</div>
</div>
    )
}