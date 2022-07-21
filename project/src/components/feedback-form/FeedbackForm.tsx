/* eslint-disable no-console */
import React, { useState } from 'react';

type FormData = {
  rating: string;
  review: string;
};

function FeedbackForm() {
  const [formData, setFormData] = useState<FormData>({
    rating: '',
    review: '',
  });
  // const [isReadOnly, setIsReadOnly] = useState(true);

  function handleInputFieldChange(event: React.ChangeEvent) {
    const target = event.target as HTMLInputElement;
    const { name, value } = target;
    console.log(event);
    setFormData({ ...formData, [name]: value });
    // setIsReadOnly(true);
  }

  function handleTextAreaFieldChange(event: React.ChangeEvent) {
    const target = (event.target as HTMLInputElement).value;
    console.log(target);
  }

  function handleSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Form is submitted');
  }

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      name="update"
      onSubmit={(e) => handleSubmitForm(e)}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          onChange={handleInputFieldChange}
          className="form__rating-input visually-hidden"
          name="rating"
          value={formData.rating}
          id="5-stars"
          type="radio"
        />
        <label
          htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          onChange={handleInputFieldChange}
          className="form__rating-input visually-hidden"
          name="rating"
          value={formData.rating}
          id="4-stars"
          type="radio"
        />
        <label
          htmlFor="4-stars"
          className="reviews__rating-label form__rating-label"
          title="good"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          onChange={handleInputFieldChange}
          className="form__rating-input visually-hidden"
          name="rating"
          value={formData.rating}
          id="3-stars"
          type="radio"
        />
        <label
          htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          onChange={handleInputFieldChange}
          className="form__rating-input visually-hidden"
          name="rating"
          value={formData.rating}
          id="2-stars"
          type="radio"
        />
        <label
          htmlFor="2-stars"
          className="reviews__rating-label form__rating-label"
          title="badly"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          onChange={handleInputFieldChange}
          className="form__rating-input visually-hidden"
          name="rating"
          value={formData.rating}
          id="1-star"
          type="radio"
        />
        <label
          htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        onChange={handleTextAreaFieldChange}
        value={formData.review}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FeedbackForm;
