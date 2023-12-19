import React, { useState, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './landingPage.css';
import { fetchEntries } from '../../contenfulService';
import '../../tailwind.css';


// const LandingPage = () => {
// 	const [content, setContent] = useState(null);

// 	useEffect(() => {
//     fetchEntries({ content_type: 'landingPage', order: 'sys.createdAt' })
//       .then((response) => {
//         setContent(response.items[0]);
//       })
//       .catch((error) => {
//         console.error('Error fetching content', error);
//       });
//   }, []);

// 	// const title = content?.fields?.title;
//   const landingpageImage = content?.fields?.landingpageImage;
//   const briefAbout = content?.fields?.briefAbout;
// 	const address = content?.fields?.addressContainer;
// 	const walkingMan = content?.fields?.walkingManContainer?.fields?.file?.url;
// 	const walkingManTitle = content?.fields?.walkingManContainer?.fields.title

// 	return (
// 		<>
// 		<section className='landingPageContainer'>

// 			{content ? (
// 				<>

// 					{landingpageImage && (
// 						<div className='w-full relative overflow-hidden'>
// 							{/* Video Container */}
// 							<div className='videoContainer w-full relative overflow-hidden'>
// 								<video
// 									autoPlay
// 									loop
// 									muted
// 									playsInline
// 									style={{ maxHeight: '50vh' }}
// 									// className='w-full object-cover max-h-[desired-max-height]'
// 									className='videoTag'
// 									src={landingpageImage.fields.file.url}
// 									type='video/mp4'
// 								/>

// 								{/* Text Overlay */}
// 								{/* <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
// 									<p className='textOverlay'>
// 										Bringing Insight Into Life’s Digital Fingerprints
// 									</p>
// 								</div> */}
// 							</div>
// 						</div>
// 					)}
// 					<section className='landingContainer'>
// 					<div className='addressContainer text-blue'>
// 					{address &&
// 						documentToReactComponents(address)}
// 				</div>
// 					<div className='insightBlock'>
// 						{briefAbout &&
// 							documentToReactComponents(briefAbout)}
// 					</div>
// 					<img
//           className="walkingManImg"
//           src={walkingMan}
//           alt={walkingManTitle}
//         />
// 					</section>
// 				</>
// 			) : (
// 				<p>Loading...</p>
// 			)}
// 		</section>

// 		</>
// 	);
// };

// export default LandingPage;

//old is above


const LandingPage = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetchEntries({ content_type: 'landingPage', order: 'sys.createdAt' })
      .then((response) => {
        setContent(response.items[0]);
      })
      .catch((error) => {
        console.error('Error fetching content', error);
      });
  }, []);

  const landingpageImage = content?.fields?.landingpageImage;
  const briefAbout = content?.fields?.briefAbout;
  const address = content?.fields?.addressContainer;
  const walkingMan = content?.fields?.walkingManContainer?.fields?.file?.url;
  const walkingManTitle = content?.fields?.walkingManContainer?.fields.title;

  return (
    <>
      <section className="landing-page-container">
        {content ? (
          <>
            {landingpageImage && (
              <div className="video-container">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="video-tag"
                  src={landingpageImage.fields.file.url}
                  type="video/mp4"
                />
              </div>
            )}
            <div className="content-container">

              <div className="insight-block">
                {briefAbout && documentToReactComponents(briefAbout)}
              </div>
              <img
                className="walking-man-img"
                src={walkingMan}
                alt={walkingManTitle}
              />
            </div>
						<div className="address-container">
                {address && documentToReactComponents(address)}
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
