import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
	return (
		<footer>
			<div className="container footer__container">
				<article>
					<Link to="/">
						<img src={Logo} className="logo" />
					</Link>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Eos eligendi error obcaecati!
					</p>
					<div className="footer__socials">
						<a
							href="https://linkedin.com/"
							target="_blank"
							rel="noreferrer noopen"
						>
							{' '}
							{<FaLinkedin />}
						</a>
						<a
							href="https://facebook.com/"
							target="_blank"
							rel="noreferrer noopen"
						>
							{' '}
							{<FaFacebook />}
						</a>
						<a
							href="https://twitter.com/"
							target="_blank"
							rel="noreferrer noopen"
						>
							{' '}
							{<AiOutlineTwitter />}
						</a>
						<a
							href="https://instagram.com/"
							target="_blank"
							rel="noreferrer noopen"
						>
							{' '}
							{<AiFillInstagram />}
						</a>
					</div>
				</article>
				<article>
					<h4>Permalinks</h4>
					<Link to="/about">About</Link>
					<Link to="/plans">Plans</Link>
					<Link to="/trainers">Trainers</Link>
					<Link to="/gallery">Gallery</Link>
					<Link to="/contact">Contacts</Link>
				</article>
				<article>
					<h4>Insights</h4>
					<Link to="/s">Blog</Link>
					<Link to="/s">Case Studies</Link>
					<Link to="/s">Events</Link>
					<Link to="/s">Comminities</Link>
					<Link to="/s">FAQs</Link>
				</article>
				<article>
					<h4>Get In Touch</h4>
					<Link to="/about">Contact Us</Link>
					<Link to="/plans">Support</Link>
				</article>
			</div>
			<div className="footer__copyright">
				<small>2023 DUMITRU &copy; All Rights Reserved</small>
			</div>
		</footer>
	);
};

export default Footer;
