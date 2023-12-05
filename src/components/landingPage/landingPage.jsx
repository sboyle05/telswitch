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
				setContent(entry.fields);
			})
			.catch((error) => {
				console.error('Error fetching content', error);
			});
	}, []);

	return (
		<>
		<section className='landingPageContainer mt-20'>
			{content ? (
				<>
					<h1 className='text-5xl font-bold'>{content.title}</h1>

					{content.landingpageImage && (
						<div className='w-full relative overflow-hidden'>
							{/* Image Container */}
							<div className='w-full relative overflow-hidden'>
								<video
									autoPlay
									loop
									muted
									playsInline
									style={{ maxHeight: '55vh' }}
									className='w-full object-cover max-h-[desired-max-height]'
									src={content.landingpageImage.fields.file.url}
									type='video/mp4'
								/>

								{/* Text Overlay */}
								<div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
									<p className='textOverlay'>
										Bringing Insight Into Life’s Digital Fingerprints
									</p>
								</div>
							</div>
						</div>
					)}
					<div className='text-blue mt-4 text-xl ml-10 mr-10 mx-auto max-w-screen-lg '>
						{content.briefAbout &&
							documentToReactComponents(content.briefAbout)}
					</div>
				</>
			) : (
				<p>Loading...</p>
			)}
		</section>

		</>
	);
};

export default LandingPage;
