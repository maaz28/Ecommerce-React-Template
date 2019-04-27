import React from 'react';

export default function TitleBar (props) {
    return (
        <div id="titlebar">
	<div class="container">
		<div class="row">
			<div class="col-md-12">

				<h2>{props.value}</h2>

			</div>
		</div>
	</div>
</div>
    )
}