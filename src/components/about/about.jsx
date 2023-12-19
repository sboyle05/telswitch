import React, { useState, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './about.css';
import { fetchEntries } from '../../contenfulService';
import '../../tailwind.css';

const About = () => {
	const [content, setContent] = useState(null);

	useEffect(() => {
		fetchEntries({ content_type: 'aboutUs', order: 'sys.createdAt' })
			.then((response) => {
				setContent(response.items);
			})
			.catch((error) => {
				console.error('Error fetching content', error);
			});
	}, []);
	console.log('contentAbout:', content);
	return (
		<>
			<section className='aboutContainer mt-20 ml-8 mr-8 pb-20'>
				{content ? (
					<>
						{content[0].fields.aboutImage && (
							<img
								className='aboutImage'
								src={`https:${content[0].fields.aboutImage.fields.file.url}`}
								alt={content[0].fields.aboutImage.fields.title || 'About Us'}
							/>
						)}
						<section className='aboutText'>
							<h1 className='mt-4 font-bold text-2xl'>
								{content[0].fields.aboutTitle}
							</h1>
							<div className='mt-4'>
								{content[0].fields.aboutParagraph &&
									documentToReactComponents(content[0].fields.aboutParagraph)}
							</div>
						</section>
					</>
				) : (
					<p>Loading...</p>
				)}
			</section>
		</>
	);
};

export default About;
