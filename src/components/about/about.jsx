import React, { useState, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './about.css';
import { fetchEntry } from '../../contenfulService';
import '../../tailwind.css';


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
			<div className='mt-4'>
				{content.aboutParagraph && documentToReactComponents(content.aboutParagraph)}
			</div>
			</>
			) : (
				<p>Loading...</p>
			)}
		</section>

		</>
	);
};

export default About;
