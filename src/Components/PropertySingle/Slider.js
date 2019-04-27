import React from 'react';
import SINGLE_PROPERTY_01 from '../../images/single-property-01.jpg'

export default function Slider (props) {
    return (
        <div class="container">
	<div class="row margin-bottom-50">
		<div class="col-md-12">

			{/* <!-- Slider --> */}
			<div class="property-slider default">
				<a href={SINGLE_PROPERTY_01} data-background-image={SINGLE_PROPERTY_01} class="item mfp-gallery"></a>
				<a href={SINGLE_PROPERTY_01} data-background-image={SINGLE_PROPERTY_01} class="item mfp-gallery"></a>
				<a href={SINGLE_PROPERTY_01} data-background-image={SINGLE_PROPERTY_01} class="item mfp-gallery"></a>
				<a href={SINGLE_PROPERTY_01} data-background-image={SINGLE_PROPERTY_01} class="item mfp-gallery"></a>
				<a href={SINGLE_PROPERTY_01} data-background-image={SINGLE_PROPERTY_01} class="item mfp-gallery"></a>
				<a href={SINGLE_PROPERTY_01} data-background-image={SINGLE_PROPERTY_01} class="item mfp-gallery"></a>
			</div>

			{/* <!-- Slider Thumbs --> */}
			<div class="property-slider-nav">
				<div class="item"><img src={SINGLE_PROPERTY_01} alt=""/></div>
				<div class="item"><img src={SINGLE_PROPERTY_01} alt=""/></div>
				<div class="item"><img src={SINGLE_PROPERTY_01} alt=""/></div>
				<div class="item"><img src={SINGLE_PROPERTY_01} alt=""/></div>
				<div class="item"><img src={SINGLE_PROPERTY_01} alt=""/></div>
				<div class="item"><img src={SINGLE_PROPERTY_01} alt=""/></div>
			</div>

		</div>
	</div>
</div>
    )
}