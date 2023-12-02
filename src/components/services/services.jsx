import React, { useState, useEffect } from 'react';
import './services.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './services.css';
import { fetchEntry } from '../../contenfulService';
import '../../tailwind.css';


const Services = () => {
	const [content, setContent] = useState(null);

	useEffect(() => {
		const entryId = 'jQyp7mKdJ8fZTM9k6yyWH';
		fetchEntry(entryId)
			.then((entry) => {
				console.log(entry);
				setContent(entry.fields);
			})
			.catch((error) => {
				console.error('Error fetching content', error);
			});
	}, []);
	return (
		<section className='servicesContainer mt-24 ml-8 mr-8'>
	{content ? (
		<>
			<h1 className='mt-4 font-bold text-2xl'>{content.services}</h1>
			<section className='listedServices'>

			<section className='individualService'>
			<section className='textSectionLeft'>
			<h2 className='mt-4 font-bold text-lg'>{content.tsbTitle}</h2>
			<p className='mt-4'>
				{content.telecommunicationsServicesAndBilling && documentToReactComponents(content.telecommunicationsServicesAndBilling)}
			</p>
			</section>
			<img
			className='serviceImg'
			src={content.teleComImg.fields.file.url}
			alt='telecom tower'/>
			</section>
			<section className='individualService'>
			<img
			className='serviceImg'
			src={content.databaseImg.fields.file.url}
			alt='office workers'/>
			<section className='textSectionRight'>
			<h2 className='mt-4 font-bold text-lg'>{content.deplTitle}</h2>
			<p className='mt-4'>
				{content.databaseExpertiseForPurposesOfLitigation && documentToReactComponents(content.databaseExpertiseForPurposesOfLitigation)}
			</p>
			</section>
			</section>
			<section className='individualService'>
			<section className='textSectionLeft'>
			<h2 className='mt-4 font-bold text-lg'>{content.tcpaTitle}</h2>
			<p className='mt-4'>
				{content.telephoneConsumerProtectionAct && documentToReactComponents(content.telephoneConsumerProtectionAct)}
			</p>
			</section>
			<img
			className='serviceImg'
			src={content.tcpaImage
				.fields.file.url}
			alt='lady justice'/>
			</section>
			</section>
			</>
	) : (
		<p>Loading...</p>
	)}
		</section>
	);
};

export default Services;
