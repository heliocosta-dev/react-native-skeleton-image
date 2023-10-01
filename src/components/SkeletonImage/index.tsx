/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Image } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import type { SkeletonImageProps } from './types';

export const SkeletonImage: React.FC<SkeletonImageProps> = (props) => {
  const isRemoteImage = typeof props.source === 'object';

  const [isLoading, setIsLoading] = useState<boolean>(isRemoteImage);

  return (
    <>
      <Image
        {...props}
        style={
          isLoading && props.style
            ? {
                ...(typeof props.style === 'object' ? props.style : {}),
                position: 'absolute',
                opacity: 0,
              }
            : props.style
        }
        onLoadEnd={() => setIsLoading(false)}
      />

      {isLoading && (
        <SkeletonPlaceholder>
          <View style={props.style} />
        </SkeletonPlaceholder>
      )}
    </>
  );
};
