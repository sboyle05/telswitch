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
			<h2 className='mt-4 font-bold text-lg'>{content.tsbTitle}</h2>
			<p className='mt-4'>
				{content.telecommunicationsServicesAndBilling && documentToReactComponents(content.telecommunicationsServicesAndBilling)}
			</p>
			<h2 className='mt-4 font-bold text-lg'>{content.deplTitle}</h2>
			<p className='mt-4'>
				{content.databaseExpertiseForPurposesOfLitigation && documentToReactComponents(content.databaseExpertiseForPurposesOfLitigation)}
			</p>
			<h2 className='mt-4 font-bold text-lg'>{content.tcpaTitle}</h2>
			<p className='mt-4'>
				{content.telephoneConsumerProtectionAct && documentToReactComponents(content.telephoneConsumerProtectionAct)}
			</p>
			</>
	) : (
		<p>Loading...</p>
	)}
		</section>
	);
};

export default Services;
