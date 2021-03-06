import React from 'react'
import Timestamp from 'react-timeago'
import { LikeButton } from './LikeButton'

export const HappyPosts = props => {
  const { message, hearts, createdAt } = props.thought

  return (
    <article className="cards">
      <p className="message">{message}</p>

      <section className="cards-bottom">
          <LikeButton
            hearts={hearts}
            id={props.thought._id}
            onThoughtLiked={props.onThoughtLiked}
          /> 
        <p className="time"><Timestamp date={createdAt}/></p>
      </section>

    </article>
  )
}