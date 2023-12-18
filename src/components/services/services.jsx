import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './services.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { fetchEntries } from '../../contenfulService';
import '../../tailwind.css';

const Services = () => {
	const [content, setContent] = useState(null);

	useEffect(() => {
		fetchEntries({ content_type: 'service', order: 'sys.createdAt' })
			.then((response) => {
				setContent(response.items);
			})
			.catch((error) => {
				console.error('Error fetching content', error);
			});
	}, []);
	console.log("CONTENT::", content)
	return (
		<>
			<section className='servicesContainer mt-8 mb-16 ml-8 mr-8'>
				{content ? (
					<>
						<h1 className='servicesTitle mt-4 font-bold text-2xl'>
							{content[0].fields.services}
						</h1>
						{content.map((serviceEntry, index) => {
							let path = '';
							if (serviceEntry.fields.title) {
								path = `/services/${serviceEntry.fields.title
									.toLowerCase()
									.replace(/\s+/g, '-')}`;
							}

							const options = {
								renderNode: {
									paragraph: (node, children) => (
										<p
											className={`${
												index % 2 === 0 ? 'textSectionRight' : 'textSectionLeft'
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
											index % 2 === 0 ? 'textSectionRight' : 'textSectionLeft'
										}`}
									>
										{/* Only render Link if path is defined */}
										{serviceEntry.fields.title && (
											<Link
												to={path}
												className={`servicesLink ${
													index % 2 === 0
														? 'textSectionRightLink'
														: 'textSectionLeftLink'
												}`}
											>
												{serviceEntry.fields.title}
											</Link>
										)}
										{serviceEntry.fields.briefDescription &&
											documentToReactComponents(
												serviceEntry.fields.briefDescription,
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
		</>
	);
};

export default Services;
