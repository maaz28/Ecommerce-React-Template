import React from 'react';
import AGENT01 from '../../images/agent-01.jpg'
import AGENT02 from '../../images/agent-02.jpg'
import AGENT03 from '../../images/agent-03.jpg'
import AGENT04 from '../../images/agent-04.jpg'


export default function Container () {
    return (
        <div class="container">
	<div class="row">

		<div class="col-md-12">
			<div class="row">

				{/* <!-- Agents Container --> */}
				<div class="agents-grid-container">

					{/* <!-- Agent --> */}
					<div class="grid-item col-lg-3 col-md-4 col-sm-6 col-xs-12">
						<div class="agent">

							<div class="agent-avatar">
								<a href="agent-page.html">
									<img src={AGENT01} alt=""/>
									<span class="view-profile-btn">Ver Perfil</span>
								</a>
							</div>

							<div class="agent-content">
								<div class="agent-name">
									<h4><a href="agent-page.html">Prueba Prueba</a></h4>
								</div>

								<ul class="agent-contact-details">
									<li><i class="sl sl-icon-call-in"></i>(044) 55 111 55555</li>
									<li><i class="fa fa-envelope-o "></i><a href="#">prueba@rojkind.com.mx</a></li>
								</ul>

								<ul class="social-icons">
									<li><a class="facebook" href="#"><i class="icon-facebook"></i></a></li>
									<li><a class="twitter" href="#"><i class="icon-twitter"></i></a></li>
									<li><a class="gplus" href="#"><i class="icon-gplus"></i></a></li>
									<li><a class="linkedin" href="#"><i class="icon-linkedin"></i></a></li>
								</ul>
								<div class="clearfix"></div>
							</div>

						</div>
					</div>
					{/* <!-- Agent / End --> */}


					{/* <!-- Agent --> */}
					<div class="grid-item col-lg-3 col-md-4 col-sm-6 col-xs-12">
						<div class="agent">

							<div class="agent-avatar">
								<a href="agent-page.html">
									<img src={AGENT02} alt=""/>
									<span class="view-profile-btn">Ver Perfil</span>
								</a>
							</div>

							<div class="agent-content">
								<div class="agent-name">
									<h4><a href="agent-page.html">Prueba Prueba</a></h4>
								</div>

								<ul class="agent-contact-details">
									<li><i class="sl sl-icon-call-in"></i>(044) 55 111 55555</li>
									<li><i class="fa fa-envelope-o "></i><a href="#">prueba@rojkind.com.mx</a></li>
								</ul>

								<ul class="social-icons">
									<li><a class="facebook" href="#"><i class="icon-facebook"></i></a></li>
									<li><a class="twitter" href="#"><i class="icon-twitter"></i></a></li>
									<li><a class="gplus" href="#"><i class="icon-gplus"></i></a></li>
									<li><a class="linkedin" href="#"><i class="icon-linkedin"></i></a></li>
								</ul>
								<div class="clearfix"></div>
							</div>

						</div>
					</div>
					{/* <!-- Agent / End --> */}


					{/* <!-- Agent --> */}
					<div class="grid-item col-lg-3 col-md-4 col-sm-6 col-xs-12">
						<div class="agent">

							<div class="agent-avatar">
								<a href="agent-page.html">
									<img src={AGENT03} alt=""/>
									<span class="view-profile-btn">Ver Perfil</span>
								</a>
							</div>

							<div class="agent-content">
								<div class="agent-name">
									<h4><a href="agent-page.html">Prueba Prueba</a></h4>
								</div>

								<ul class="agent-contact-details">
									<li><i class="sl sl-icon-call-in"></i>(044) 55 111 55555</li>
									<li><i class="fa fa-envelope-o "></i><a href="#">prueba@rojkind.com.mx</a></li>
								</ul>

								<ul class="social-icons">
									<li><a class="facebook" href="#"><i class="icon-facebook"></i></a></li>
									<li><a class="twitter" href="#"><i class="icon-twitter"></i></a></li>
									<li><a class="gplus" href="#"><i class="icon-gplus"></i></a></li>
									<li><a class="linkedin" href="#"><i class="icon-linkedin"></i></a></li>
								</ul>
								<div class="clearfix"></div>
							</div>

						</div>
					</div>
					{/* <!-- Agent / End --> */}


					{/* <!-- Agent --> */}
					<div class="grid-item col-lg-3 col-md-4 col-sm-6 col-xs-12">
						<div class="agent">

							<div class="agent-avatar">
								<a href="agent-page.html">
									<img src={AGENT04} alt=""/>
									<span class="view-profile-btn">Ver Perfil</span>
								</a>
							</div>

							<div class="agent-content">
								<div class="agent-name">
									<h4><a href="agent-page.html">Prueba Prueba</a></h4>
								</div>

								<ul class="agent-contact-details">
									<li><i class="sl sl-icon-call-in"></i>(044) 55 111 55555</li>
									<li><i class="fa fa-envelope-o "></i><a href="#">prueba@rojkind.com.mx</a></li>
								</ul>

								<ul class="social-icons">
									<li><a class="facebook" href="#"><i class="icon-facebook"></i></a></li>
									<li><a class="twitter" href="#"><i class="icon-twitter"></i></a></li>
									<li><a class="gplus" href="#"><i class="icon-gplus"></i></a></li>
									<li><a class="linkedin" href="#"><i class="icon-linkedin"></i></a></li>
								</ul>
								<div class="clearfix"></div>
							</div>

						</div>
					</div>
					{/* <!-- Agent / End --> */}


				</div>
				{/* <!-- Agents Container / End --> */}

			</div>
		</div>


		<div class="col-md-12">
			<div class="clearfix"></div>
			{/* <!-- Pagination --> */}
			<div class="pagination-container margin-top-20 margin-bottom-20">
				<nav class="pagination">
					<ul>
						<li><a href="#" class="current-page">1</a></li>
						<li><a href="#">2</a></li>
						<li><a href="#">3</a></li>
					</ul>
				</nav>
			</div>
			{/* <!-- Pagination / End --> */}
		</div>

	</div>
</div>

    )
}