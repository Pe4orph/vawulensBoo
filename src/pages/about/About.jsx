import HeaderImage from '../../images/header_bg_1.jpg';
import StoryImage from '../../images/about1.jpg';
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';
import Header from '../../components/Header';
import './about.css';

const About = () => {
	return (
		<>
			<Header title={'About us'} image={HeaderImage}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
				qui provident porro autem doloribus tempore impedit fugit vel
				cum molestiae!
			</Header>

			<section className="about__story">
				<div className="container about__story-container">
					<div className="about__section-image">
						<img src={StoryImage} alt="Our Story Image" />
					</div>
					<div className="about__section-content">
						<h1>Our Story</h1>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Dicta natus consequuntur voluptatibus facilis
							vitae! Sapiente ex corrupti cumque alias aperiam,
							sequi, veniam ut corporis earum, nemo quisquam
							numquam voluptatibus ullam mollitia accusantium quia
							quibusdam doloribus modi asperiores odit quis.
							Dolores tempore quaerat atque qui id.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Ea officiis modi, veritatis qui voluptas sint
							eveniet totam aliquam accusantium tenetur soluta
							itaque, possimus, dolorem voluptates quaerat
							temporibus id ipsam ducimus eum nostrum eligendi
							numquam repellat dolore? Aut facilis ad similique!
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Nemo reiciendis molestiae recusandae possimus
							quasi quam ex. Ipsum minima eum voluptate!
						</p>
					</div>
				</div>
			</section>
			<section className="about__vision">
				<div className="container about__vision-container">
					<div className="about__section-content">
						<h1>Our vision</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Amet eaque dignissimos consequatur delectus
							libero error distinctio veniam vel eos dolor
							voluptatum quae esse aspernatur, perspiciatis
							quidem, minus in dolorem? Aspernatur.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Dolorem dignissimos repellendus, eaque
							cupiditate aut dicta facilis unde obcaecati quam eos
							quibusdam error similique, aperiam harum neque
							recusandae velit amet esse.
						</p>
					</div>
					<div className="about__section-image">
						<img src={VisionImage} alt="Our vision Image" />
					</div>
				</div>
			</section>
			<section className="about__mission">
				<div className="container about__mission-container">
					<div className="about__section-image">
						<img src={MissionImage} alt="Our Mission Image" />
					</div>
					<div className="about__section-content">
						<h1>Our Story</h1>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Dicta natus consequuntur voluptatibus facilis
							vitae! Sapiente ex corrupti cumque alias aperiam,
							sequi, veniam ut corporis earum, nemo quisquam
							numquam voluptatibus ullam mollitia accusantium quia
							quibusdam doloribus modi asperiores odit quis.
							Dolores tempore quaerat atque qui id.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Ea officiis modi, veritatis qui voluptas sint
							eveniet totam aliquam accusantium tenetur soluta
							itaque, possimus, dolorem voluptates quaerat
							temporibus id ipsam ducimus eum nostrum eligendi
							numquam repellat dolore? Aut facilis ad similique!
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Nemo reiciendis molestiae recusandae possimus
							quasi quam ex. Ipsum minima eum voluptate!
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
