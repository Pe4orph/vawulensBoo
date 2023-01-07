import { AiFillInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

import Header from '../../components/Header';
import Trainer from '../../components/Trainer';
import HeaderImage from '../../images/header_bg_5.jpg';
import { trainers } from '../../data';
import './trainers.css';

const Trainers = () => {
	return (
		<>
			<Header title="Out Trainers" image={HeaderImage}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Similique vero velit, iusto quisquam deleniti corporis.
			</Header>
			<section className="trainers">
				<div className="container trainers__container">
					{trainers.map(({ id, image, name, job, socials }) => {
						return (
							<Trainer
								key={id}
								image={image}
								name={name}
								job={job}
								socials={[
									{
										icon: <AiFillInstagram />,
										linkj: socials[0],
									},
									{
										icon: <AiOutlineTwitter />,
										linkj: socials[1],
									},
									{ icon: <FaFacebook />, linkj: socials[2] },
									{ icon: <FaLinkedin />, linkj: socials[3] },
								]}
							/>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Trainers;
