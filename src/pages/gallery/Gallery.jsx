import HeaderImage from '../../images/header_bg_3.jpg';
import Header from '../../components/Header';
import './gallery.css';

const Gallery = () => {
	const galleryLenght = 15;
	const Images = [];

	for (let i = 1; i <= galleryLenght; i++) {
		Images.push(require(`../../images/gallery${i}.jpg`));
	}

	return (
		<>
			<Header title="Out Gallery" image={HeaderImage}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
				molestiae consequuntur vero nihil fugit.
			</Header>
			<section className="gallery">
				<div className="container gallery__container">
					{Images.map((image, index) => {
						return (
							<article key={index}>
								<img
									src={image}
									alt={`Gallery Image ${index + 1}`}
								/>
							</article>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Gallery;
