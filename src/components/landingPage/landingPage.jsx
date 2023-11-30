import React, { useState, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './landingPage.css';
import { fetchEntry } from '../../contenfulService';
import '../../tailwind.css';

const LandingPage = () => {
	const [content, setContent] = useState(null);

	useEffect(() => {
		const entryId = '1EirkGrxEZLiKshv21CELR';
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
		<section className='landingPageContainer mt-20'>
			{content ? (
				<>
					<h1 className='text-5xl font-bold'>{content.title}</h1>

					{content.landingpageImage && (
        <div className="w-full relative overflow-hidden">
          {/* Use responsive classes to adjust the max height at different breakpoints */}
					<div className="w-full relative overflow-hidden">
    <img
      className='w-full object-cover max-h-[desired-max-height]'
      style={{ maxHeight: '45vh' }} // This caps the height to 75% of the viewport height
      src={content.landingpageImage.fields.file.url}
      alt='Landing Page'
    />
  </div>
        </div>
      )}
					<div className='text-blue mt-4 text-xl ml-10 mr-10 mx-auto max-w-screen-lg '>
					{content.briefAbout && documentToReactComponents(content.briefAbout)}
					</div>
				</>
			) : (
				<p>Loading...</p>
			)}
		</section>
	);
};

export default LandingPage;
