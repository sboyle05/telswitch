import React, { useState, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { fetchEntries } from '../../contenfulService';
import '../../tailwind.css';
import './contact.css';

const Contact = () => {
	const [content, setContent] = useState(null);

	useEffect(() => {
		fetchEntries({ content_type: 'contactUs', order: 'sys.createdAt' })
			.then((response) => {
				setContent(response.items);
			})
			.catch((error) => {
				console.error('Error fetching content', error);
			});
	}, []);

	console.log('CONTENT:', content);
	return (
		<>
			<section className='contactContainer mt-8'>
				{content ? (
          <>
          {content[0].fields.contactImage && (
              <img
                className='contactImage mt-14  w-full object-cover max-h-[desired-max-height]'
                src={`https:${content[0].fields.contactImage.fields.file.url}`}
                alt={content[0].fields.contactImage.fields.title || 'Contact Us'}
              />
            )}
					<section className='contactText'>
					<section className='contactTitle'>
					<h1 className='mt-4 font-bold text-2xl'>
						{content[0].fields.contactTitle}
					</h1>
					</section>
          	<div className='mt-4 ml-8 mr-8'>
            {content[0].fields.contactText && documentToReactComponents(content[0].fields.contactText)}
          </div>
					</section>
          </>
				) : (
					<p>Loading...</p>
				)}

				{console.log('content::', content)}
			</section>
		</>
	);
};

export default Contact;
