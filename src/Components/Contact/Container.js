import React from 'react';

export default function Container(){
    return(
        <div class="container">

	<div class="row">

		{/* <!-- Contact Details --> */}
		<div class="col-md-4">

			<h4 class="headline margin-bottom-30">Encuentranos aqui</h4>

			{/* <!-- Contact Details --> */}
			<div class="sidebar-textbox">
				<p>aliqua tempor dolore malis sint fore duis summis dolore velit esse nisi sint
					malis fugiat noster anim fore duis quid</p>

				<ul class="contact-details">
					<li><i class="im im-icon-Phone-2"></i> <strong>Telefono:</strong> <span><a href="tel:55204000">55 20 4000 </a></span></li>
					<li><i class="im im-icon-Envelope"></i> <strong>Correo:</strong> <span><a href="mailto:contacto@rojkind.com.mx">contacto@rojkind.com.mx</a></span></li>
				</ul>
			</div>

		</div>

		{/* <!-- Contact Form --> */}
		<div class="col-md-8">

			<section id="contact">
				<h4 class="headline margin-bottom-35">Contacto</h4>

				<div id="contact-message"></div>

					<form method="post" action="contact.php" name="contactform" id="contactform" autocomplete="on">

					<div class="row">
						<div class="col-md-6">
							<div>
								<input name="name" type="text" id="name" placeholder="Nombre" required="required" />
							</div>
						</div>

						<div class="col-md-6">
							<div>
								<input name="email" type="email" id="email" placeholder="Correo" pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$" required="required" />
							</div>
						</div>
					</div>

					<div>
						<input name="subject" type="text" id="subject" placeholder="Tema" required="required" />
					</div>

					<div>
						<textarea name="comments" cols="40" rows="3" id="comments" placeholder="Mensaje" spellcheck="true" required="required"></textarea>
					</div>

					<input type="submit" class="submit button" id="submit" value="Enviar mensaje" />

					</form>
			</section>
		</div>
		{/* <!-- Contact Form / End --> */}

	</div>

</div>
    )
}