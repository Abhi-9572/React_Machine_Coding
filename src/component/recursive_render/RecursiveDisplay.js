import React, { useState } from "react";

const RecursiveDisplay = ({ data }) => {
  return (
    <>
      {data?.map((item) => {
        return <DisplayChild childData={item} key={item} />;
      })}
    </>
  );
};

const DisplayChild = ({ childData }) => {
  console.log({ childData });

  const [isDisplay, setIsDisplay] = useState(true);
  return (
    <ul>
      <div onClick={() => setIsDisplay(!isDisplay)}>{childData.name}</div>
      {isDisplay && <RecursiveDisplay data={childData?.children} />}
    </ul>
  );
};

export default RecursiveDisplay;
