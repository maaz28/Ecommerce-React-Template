import React from 'react';

export default function Search (props) {
    return (
        <section class="search margin-bottom-50">
<div class="container">
	<div class="row">
		<div class="col-md-12">

			{/* <!-- Title --> */}
			<h3 class="search-title">Search</h3>

			{/* <!-- Form --> */}
			<div class="main-search-box no-shadow">


				{/* <!-- Row With Forms --> */}
				<div class="row with-forms">

					{/* <!-- Status --> */}
					<div class="col-md-3">
						<select data-placeholder="Any Status" class="chosen-select-no-single" >
							<option>Any Status</option>
							<option>For Sale</option>
							<option>For Rent</option>
						</select>
					</div>

					{/* <!-- Property Type --> */}
					<div class="col-md-3">
						<select data-placeholder="Any Type" class="chosen-select-no-single" >
							<option>Any Type</option>
							<option>Apartments</option>
							<option>Houses</option>
							<option>Commercial</option>
							<option>Garages</option>
							<option>Lots</option>
						</select>
					</div>

					{/* <!-- Main Search Input --> */}
					<div class="col-md-6">
						<div class="main-search-input">
							<input type="text" placeholder="Enter address e.g. street, city or state" value=""/>
							<button class="button">Search</button>
						</div>
					</div>

				</div>
				{/* <!-- Row With Forms / End --> */}


				{/* <!-- Row With Forms --> */}
				<div class="row with-forms">

					{/* <!-- Min Price --> */}
					<div class="col-md-3">

						{/* <!-- Select Input --> */}
						<div class="select-input disabled-first-option">
							<input type="text" placeholder="Min Area" data-unit="Sq Ft"/>
							<select>
								<option>Min Area</option>
								<option>300</option>
								<option>400</option>
								<option>500</option>
								<option>700</option>
								<option>800</option>
								<option>1000</option>
								<option>1500</option>
							</select>
						</div>
						{/* <!-- Select Input / End --> */}

					</div>

					{/* <!-- Max Price --> */}
					<div class="col-md-3">

						{/* <!-- Select Input --> */}
						<div class="select-input disabled-first-option">
							<input type="text" placeholder="Max Area" data-unit="Sq Ft"/>
							<select>
								<option>Max Area</option>
								<option>300</option>
								<option>400</option>
								<option>500</option>
								<option>700</option>
								<option>800</option>
								<option>1000</option>
								<option>1500</option>
							</select>
						</div>
						{/* <!-- Select Input / End --> */}

					</div>


					{/* <!-- Min Price --> */}
					<div class="col-md-3">

						{/* <!-- Select Input --> */}
						<div class="select-input disabled-first-option">
							<input type="text" placeholder="Min Price" data-unit="USD"/>
							<select>
								<option>Min Price</option>
								<option>1 000</option>
								<option>2 000</option>
								<option>3 000</option>
								<option>4 000</option>
								<option>5 000</option>
								<option>10 000</option>
								<option>15 000</option>
								<option>20 000</option>
								<option>30 000</option>
								<option>40 000</option>
								<option>50 000</option>
								<option>60 000</option>
								<option>70 000</option>
								<option>80 000</option>
								<option>90 000</option>
								<option>100 000</option>
								<option>110 000</option>
								<option>120 000</option>
								<option>130 000</option>
								<option>140 000</option>
								<option>150 000</option>
							</select>
						</div>
						{/* <!-- Select Input / End --> */}

					</div>


					{/* <!-- Max Price --> */}
					<div class="col-md-3">

						{/* <!-- Select Input --> */}
						<div class="select-input disabled-first-option">
							<input type="text" placeholder="Max Price" data-unit="USD"/>
							<select>
								<option>Max Price</option>
								<option>1 000</option>
								<option>2 000</option>
								<option>3 000</option>
								<option>4 000</option>
								<option>5 000</option>
								<option>10 000</option>
								<option>15 000</option>
								<option>20 000</option>
								<option>30 000</option>
								<option>40 000</option>
								<option>50 000</option>
								<option>60 000</option>
								<option>70 000</option>
								<option>80 000</option>
								<option>90 000</option>
								<option>100 000</option>
								<option>110 000</option>
								<option>120 000</option>
								<option>130 000</option>
								<option>140 000</option>
								<option>150 000</option>
							</select>
						</div>
						{/* <!-- Select Input / End --> */}

					</div>

				</div>
				{/* <!-- Row With Forms / End --> */}


				{/* <!-- More Search Options --> */}
				<a href="#" class="more-search-options-trigger margin-top-10" data-open-title="More Options" data-close-title="Less Options"></a>

				<div class="more-search-options relative">
					<div class="more-search-options-container">

						{/* <!-- Row With Forms --> */}
						<div class="row with-forms">

							{/* <!-- Age of Home --> */}
							<div class="col-md-3">
								<select data-placeholder="Age of Home" class="chosen-select-no-single" >
									<option label="blank"></option>
									<option>Age of Home (Any)</option>
									<option>0 - 1 Years</option>
									<option>0 - 5 Years</option>
									<option>0 - 10 Years</option>
									<option>0 - 20 Years</option>
									<option>0 - 50 Years</option>
									<option>50 + Years</option>
								</select>
							</div>

							{/* <!-- Rooms Area --> */}
							<div class="col-md-3">
								<select data-placeholder="Rooms" class="chosen-select-no-single" >
									<option label="blank"></option>
									<option>Rooms (Any)</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</select>
							</div>

							{/* <!-- Min Area --> */}
							<div class="col-md-3">
								<select data-placeholder="Beds" class="chosen-select-no-single" >
									<option label="blank"></option>
									<option>Recamarás (Any)</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</select>
							</div>

							{/* <!-- Max Area --> */}
							<div class="col-md-3">
								<select data-placeholder="Baths" class="chosen-select-no-single" >
									<option label="blank"></option>
									<option>Baños (Any)</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</select>
							</div>

						</div>
						{/* <!-- Row With Forms / End --> */}

					</div>

				</div>
				{/* <!-- More Search Options / End --> */}

			</div>
			{/* <!-- Box / End --> */}
		</div>
	</div>
</div>
</section>
    )
}