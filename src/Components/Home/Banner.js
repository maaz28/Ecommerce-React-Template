import React from 'react'

export default function Banner() {
    return (
        <div class="parallax" data-background="images/cate-mex.jpeg" data-color="#36383e" data-color-opacity="0.45" data-img-width="2500" data-img-height="1600">
	<div class="parallax-content">

		<div class="container">
			<div class="row">
				<div class="col-md-12">

					<div class="main-search-container">
						<h2>Encuentra la casa de tus sueños</h2>

						<form class="main-search-form">

							<div class="search-type">
								<label class="active"><input name="tab" type="radio"/>Venta</label>
								<label><input name="tab" type="radio"/>Renta</label>
								<div class="search-type-arrow"></div>
							</div>


							<div class="main-search-box">

								<div class="main-search-input larger-input">
									<input type="text" class="ico-01" id="autocomplete-input" placeholder="Escribe una ciudad, colonia o codigo postal. " value=""/>
									<button class="button">Buscar</button>
								</div>

								<div class="row with-forms">

									<div class="col-md-4">
										<select data-placeholder="Tipo" class="chosen-select-no-single" >
											<option>Departamentos</option>
											<option>Casas</option>
											<option>Commercial</option>
											<option>Terrenos</option>
										</select>
									</div>


									<div class="col-md-4">

										<div class="select-input">
											<input type="text" placeholder="Precio Min" data-unit="MXN"/>
										</div>

									</div>


									<div class="col-md-4">

										<div class="select-input">
											<input type="text" placeholder="Precio Max" data-unit="MXN"/>
										</div>

									</div>

								</div>

								<a href="#" class="more-search-options-trigger" data-open-title="Mas opciónes" data-close-title="Menos opciónes"></a>

								<div class="more-search-options">
									<div class="more-search-options-container">

										<div class="row with-forms">

											<div class="col-md-6">

												<div class="select-input">
													<input type="text" placeholder="m&sup2; min" data-unit="m&sup2;"/>
												</div>

											</div>

											<div class="col-md-6">

												<div class="select-input">
													<input type="text" placeholder="m&sup2; max" data-unit="m&sup2;"/>
												</div>

											</div>

										</div>
										<div class="row with-forms">

											<div class="col-md-6">
												<select data-placeholder="Camas" class="chosen-select-no-single" >
													<option label="blank"></option>
													<option>Camas</option>
													<option>1+</option>
													<option>2+</option>
													<option>3+</option>
													<option>4+</option>
													<option>5+</option>
												</select>
											</div>
											<div class="col-md-6">
												<select data-placeholder="Baños" class="chosen-select-no-single" >
													<option label="blank"></option>
													<option>Baños</option>
													<option>1+</option>
													<option>2+</option>
													<option>3+</option>
													<option>4+</option>
													<option>5+</option>
												</select>
											</div>

										</div>

									</div>
								</div>


							</div>

						</form>

					</div>

				</div>
			</div>
		</div>

	</div>
</div>
    )
}