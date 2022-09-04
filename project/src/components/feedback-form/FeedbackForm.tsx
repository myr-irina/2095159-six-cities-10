import React, { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { addCommentAction } from '../../store/api-actions';
import { CommentData } from '../../types/comment-data';

function FeedbackForm() {
  const [formData, setFormData] = useState<CommentData>({
    comment: '',
    rating: '0',
  });
  // eslint-disable-next-line no-console
  console.log(formData);


  const dispatch = useAppDispatch();
  const { hotelId } = useParams();

  function handleInputFieldChange(event: React.ChangeEvent) {
    const target = event.target as HTMLInputElement;
    const { name, value } = target;

    setFormData({ ...formData, [name]: value });
  }

  function handleTextAreaFieldChange(event: React.ChangeEvent) {
    const target = event.target as HTMLTextAreaElement;
    const { name, value } = target;

    setFormData({ ...formData, [name]: value });
  }

  const onSubmit = (id: string, commentData: CommentData) => {
    dispatch(addCommentAction({ id, ...commentData }));
  };

  const handleSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    try {
      if (!formData.comment !== null && !formData.rating !== null && hotelId) {
        onSubmit(hotelId, {
          comment: formData.comment,
          rating: formData.rating,
        });
      }
      setFormData({ ...formData, comment: '', rating: '0' });
    } catch {
      throw Error('Произошла ошибка при отправке формы');
    }
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      name="update"
      onSubmit={handleSubmitForm}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          onChange={handleInputFieldChange}
          className="form__rating-input visually-hidden"
          name="rating"
          value="5"
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
          value="4"
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
          value="3"
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
          value="2"
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
          value="1"
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
        value={formData.comment}
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={50}
        maxLength={300}
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
          disabled={formData.comment === '' && formData.rating === '0'}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FeedbackForm;
