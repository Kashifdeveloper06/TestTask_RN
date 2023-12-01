import React from 'react';
import {View} from 'react-native';
import * as Icon from 'react-native-feather';

const StarRating = ({rating}) => {
  const maxRating = 5;

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const fullStarArray = Array.from({length: fullStars}, (_, index) => (
    <Icon.Star key={`full-star-${index}`} fill="gold" width={20} height={20} />
  ));

  const halfStar = hasHalfStar && (
    <Icon.Star key="half-star" fill="gold" width={20} height={20} />
  );

  const emptyStarsCount = maxRating - fullStars - (hasHalfStar ? 1 : 0);
  const emptyStars = Array.from({length: emptyStarsCount}, (_, index) => (
    <Icon.Star key={`empty-star-${index}`} fill="gray" width={20} height={20} />
  ));

  return (
    <View style={{flexDirection: 'row'}}>
      {fullStarArray}
      {halfStar}
      {emptyStars}
    </View>
  );
};

export default StarRating;
