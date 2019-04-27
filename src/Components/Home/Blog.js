import React from 'react';
import BLOG_POST_01 from '../../images/blog-post-01.jpg'
import BLOG_POST_02 from '../../images/blog-post-02.jpg'
import BLOG_POST_03 from '../../images/blog-post-03.jpg'


export default function Blog() {
    return (
        <section class="fullwidth margin-top-95 margin-bottom-0">

	<h3 class="headline-box">Blog & noticias</h3>

	<div class="container">
		<div class="row">

			<div class="col-md-4">


				<div class="blog-post">


					<a href="blog-post.html" class="post-img">
						<img src={BLOG_POST_01} alt=""/>
					</a>


					<div class="post-content">
						<h3><a href="#">8 Tips para encontrar tu nueva casa</a></h3>
						<p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae. </p>

						<a href="blog-post.html" class="read-more">Leer mas <i class="fa fa-angle-right"></i></a>
					</div>

				</div>


			</div>

			<div class="col-md-4">


				<div class="blog-post">


					<a href="blog-post.html" class="post-img">
						<img src={BLOG_POST_02} alt=""/>
					</a>


					<div class="post-content">
						<h3><a href="#">Analysis de mercado 2019</a></h3>
						<p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae. </p>

						<a href="blog-post.html" class="read-more">Leer mas <i class="fa fa-angle-right"></i></a>
					</div>

				</div>


			</div>

			<div class="col-md-4">


				<div class="blog-post">


					<a href="blog-post.html" class="post-img">
						<img src={BLOG_POST_03} alt=""/>
					</a>


					<div class="post-content">
						<h3><a href="#">¿Como conseguir un credito hipotecario?</a></h3>
						<p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae. </p>

						<a href="blog-post.html" class="read-more">Leer mas <i class="fa fa-angle-right"></i></a>
					</div>

				</div>


			</div>

		</div>
	</div>
</section>
    )
}