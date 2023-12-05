import React, { useState, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './about.css';
import { fetchEntry } from '../../contenfulService';
import '../../tailwind.css';
import Footer from '../footer/footer';

const About = () => {
	const [content, setContent] = useState(null);

	useEffect(() => {
		const entryId = '6uKPm0BU99vp7wKHFCWogI';
		fetchEntry(entryId)
			.then((entry) => {
				setContent(entry.fields);
			})
			.catch((error) => {
				console.error('Error fetching content', error);
			});
	}, []);

	return (
		<>
		<section className='aboutContainer mt-24 ml-8 mr-8'>
			{content ? (
				<>
			<h1 className='mt-4 font-bold text-2xl'>{content.aboutTitle}</h1>
			<p className='mt-4'>
				{content.aboutParagraph && documentToReactComponents(content.aboutParagraph)}
			</p>
			</>
			) : (
			<p>Loading...</p>
			)}
		</section>
		<Footer/>
		</>
	);
};

export default About;
