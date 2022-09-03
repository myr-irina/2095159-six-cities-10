import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import FeedbackForm from '../../components/feedback-form/FeedbackForm';
import { getAuthStatus, getComments } from '../../store/selectors';
import { CommentsData } from '../../types/comments-data';
import { AppDispatch } from '../../types/state';
import { useAppSelector } from '../../hooks';
import { fetchCommentsAction } from '../../store/api-actions';
import { AuthorizationStatus } from '../const';
import dateFormat from './../../utils/date-format';


function Reviews(): JSX.Element {
  const { hotelId } = useParams();

  const dispatch = useDispatch<AppDispatch>();
  const comments = useAppSelector(getComments);

  useEffect(() => {
    dispatch(fetchCommentsAction(hotelId));
  }, [dispatch, hotelId]);

  const authStatus = useAppSelector(getAuthStatus);
  const isAuth = authStatus === AuthorizationStatus.Auth;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
      Reviews &middot;{' '}
        <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ul className="reviews__list">
        {comments.map((comment:CommentsData) => (
          <li className="reviews__item" key={comment.id}>
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img
                  className="reviews__avatar user__avatar"
                  src={comment.user.avatarUrl}
                  width="54"
                  height="54"
                  alt="Reviews avatar"
                />
              </div>
              <span className="reviews__user-name">
                {comment.user.name}
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span
                    style={{ width: `${Math.round(comment.rating) * 20}%` }}
                  >
                  </span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">{comment.comment}</p>
              <time className="reviews__time" dateTime="2019-04-24">
                {dateFormat(comment.date)}
              </time>
            </div>
          </li>
        ))}
      </ul>
      {isAuth && <FeedbackForm />}
    </section>
  );
}

export default Reviews;
