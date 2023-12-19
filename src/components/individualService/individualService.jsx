import React, { useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './individualService.css';
;

const IndividualService = ({ serviceTitle, serviceEntry }) => {
  const [previewImage, setPreviewImage] = useState(null);

  const options = {
    renderNode: {
      paragraph: (node, children) => (
        <p className="service-detail-paragraph">{children}</p>
      ),
    },
  };


  const comments = serviceEntry.fields.serviceComment;

  const openPreview = (imageUrl) => {
    setPreviewImage(imageUrl);
  };

  const closePreview = () => {
    setPreviewImage(null);
  };

  return (
  <>
      <section className="serviceContainer mt-8 mb-16">

      <section className='textImage'>
        <img
          className="serviceDetailImg"
          src={serviceEntry.fields.serviceImage.fields.file.url}
          alt={serviceEntry.fields.title}
        />
        <h1 className="service-detail-title font-bold text-2xl">{serviceTitle}</h1>
        {serviceEntry.fields.serviceDescription &&
          documentToReactComponents(
            serviceEntry.fields.serviceDescription,
            options
          )}
      </section>
      <section className='allComments'>
        {comments && comments.map((comment, index) => (
          <div key={index} className="commentContainer">
            <h3 className='commentTitle font-bold'>{comment.fields.commentTitle}</h3>
            <section className='commentTextImage'>
              {comment.fields.commentImage && comment.fields.commentImage.length > 0 && (
                <img
                  src={comment.fields.commentImage[0].fields.file.url}
                  alt={comment.fields.commentTitle}
                  className="commentImage"
                  onClick={() => openPreview(comment.fields.commentImage[0].fields.file.url)}
                />
              )}
              {comment.fields.commentDescription &&
                documentToReactComponents(comment.fields.commentDescription, options)
              }
            </section>
          </div>
        ))}
      </section>

      {/* Image Preview */}
      {previewImage && (
        <div className="imagePreviewOverlay" onClick={closePreview}>
          <div className="imagePreviewContainer">
            <img src={previewImage} alt="Preview" className="imagePreview" />
            <button onClick={closePreview} className="closePreviewButton">X</button>
          </div>
        </div>
      )}
    </section>

    </>
  );
};

export default IndividualService;
