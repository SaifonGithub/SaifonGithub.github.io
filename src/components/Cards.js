import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Get to Know Our Featues And Services!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='Images/img(7).jpg'
              text='Our Developers have the Creativity of the Top-Level , that makes us Proud'
              label='Creativity'
              path='/services'
            />
            <CardItem
              src='Images/img (2).jpg'
              text='We solely believe in Team-Work and Our Team is the factor of Success'
              label='Team-Work'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='Images/img(8).jpg'
              text='The Logical and to the Point Content-Writers we have Ranks your Website to the Top'
              label='Content-Writing'
              path='/services'
            />
            <CardItem
              src='Images/img (1).jpg'
              text='We have high-Generation System that generates the Out in a Fater Way'
              label='Advance-Coding'
              path='/products'
            />
            <CardItem
              src='Images/img (11).jpg'
              text='Developing a  Fast-n-Furious website is Our Soul Priority'
              label='Fast-n-Furious'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;