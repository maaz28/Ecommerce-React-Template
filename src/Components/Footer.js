import React from 'react';
import LOGO from '../images/logo.png'

export default function Footer(){
    return (
        <div id="footer" class="sticky-footer">
	{/* <!-- Main --> */}
	<div class="container">
		<div class="row">
			<div class="col-md-5 col-sm-6">
				<img class="footer-logo" src={LOGO} alt=""/>
				<br/><br/>
				<p>Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper.</p>
			</div>

			<div class="col-md-4 col-sm-6 ">
				<h4>Links</h4>
				<ul class="footer-links">
					<li><a href="#">Inicio</a></li>
					<li><a href="#">Propiedades</a></li>
					<li><a href="#">Nosotros</a></li>
					<li><a href="#">Contacto</a></li>
				</ul>

				<ul class="footer-links">
					<li><a href="#">Blog</a></li>
					<li><a href="#">Nuestros Agentes</a></li>
					<li><a href="#">Contacto</a></li>
				</ul>
				<div class="clearfix"></div>
			</div>

			<div class="col-md-3  col-sm-12">
				<h4>Contacto</h4>
				<div class="text-widget">
					<span>Montes Urales 320, Lomas de Chapultepec, CDMX.</span> <br/>
					Phone: <span><a href="tel:55204000">55 20 4000 </a></span><br/>
					E-Mail:<span> <a href="mailto:contacto@rojkind.com.mx">contacto@rojkind.com.mx</a> </span><br/>
				</div>

				<ul class="social-icons margin-top-20">
					<li><a class="facebook" href="#"><i class="icon-facebook"></i></a></li>
					<li><a class="twitter" href="#"><i class="icon-twitter"></i></a></li>
					<li><a class="linkedin" href="#"><i class="icon-linkedin"></i></a></li>
				</ul>
			</div>

		</div>

		{/* <!-- Copyright --> */}
		<div class="row">
			<div class="col-md-12">
				<div class="copyrights">© 1976 - 2019 Rojkind Impulsora Inmobiliaria.</div>
			</div>
		</div>

	</div>

</div>
    );
}