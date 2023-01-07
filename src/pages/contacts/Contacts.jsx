import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';

import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_2.jpg';

import './contacts.css';

const Contacts = () => {
	return (
		<>
			<Header title="Get In Touch" image={HeaderImage}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Necessitatibus cumque impedit numquam aut reprehenderit et!
			</Header>
			<section className="contact">
				<div className="container contacts__container">
					<div className="contacts__wrapper">
						<a
							href="mailto:bdumitrua@gmail.com"
							target="_blank"
							rel="noreferrer noopener"
						>
							<MdEmail />
						</a>
						<a
							href="http://m.me/bdumitrua"
							target="_blank"
							rel="noreferrer noopener"
						>
							<BsMessenger />
						</a>
						<a
							href="https://wa.me/+79777024959"
							target="_blank"
							rel="noreferrer noopener"
						>
							<IoLogoWhatsapp />
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contacts;
