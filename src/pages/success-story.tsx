import { useFetchSuccessStoryQuery } from "<component>/features/success-story/success-story-api-slice";
import React from "react";

const SuccessStory = () => {
  const { data = [], isFetching } = useFetchSuccessStoryQuery();

  return (
    <div>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default SuccessStory;
