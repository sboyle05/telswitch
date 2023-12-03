import React, { useState, useEffect } from 'react';
import './services.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './services.css';
import { fetchEntries } from '../../contenfulService';
import '../../tailwind.css';

const Services = () => {
	const [content, setContent] = useState(null);

	useEffect(() => {
		fetchEntries({ content_type: 'service', order: 'sys.createdAt' })
			.then((response) => {
				console.log(response.items);
				setContent(response.items);
			})
			.catch((error) => {
				console.error('Error fetching content', error);
			});
	}, []);

	return (
		<section className='servicesContainer mt-24 ml-8 mr-8'>
			{content ? (
				<>
					<h1 className='mt-4 font-bold text-2xl'>
						{content[0].fields.services}
					</h1>
					{content.map((serviceEntry, index) => {
						const options = {
							renderNode: {
								paragraph: (node, children) => (
									<p
										className={`${
											index % 2 === 0 ? 'textSectionLeft' : 'textSectionRight'
										}`}
									>
										{children}
									</p>
								),
							},
						};

						return (
							<section
								key={serviceEntry.sys.id}
								className={`individualService ${
									index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
								}`}
							>
								<img
									className='serviceImg'
									src={serviceEntry.fields.serviceImage.fields.file.url}
									alt={serviceEntry.fields.serviceTitle}
								/>
								<div
									className={`textSection ${
										index % 2 === 0 ? 'textSectionLeft' : 'textSectionRight'
									}`}
								>
									<h2
										className={`font-bold text-lg ${
											index % 2 === 0 ? 'textSectionLeft' : 'textSectionRight'
										}`}
									>
										{serviceEntry.fields.title}
									</h2>
									{serviceEntry.fields.serviceDescription &&
										documentToReactComponents(
											serviceEntry.fields.serviceDescription,
											options
										)}
								</div>
							</section>
						);
					})}
				</>
			) : (
				<p>Loading...</p>
			)}
		</section>
	);
};

export default Services;
