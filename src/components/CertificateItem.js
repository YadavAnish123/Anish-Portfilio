import React from "react";

const CertificateItem = (props) => {
  const { title, urlToImage, publishedAt, courseName, from, driveLink } = props;

  const onClickHandler = () => {
    const element = document.getElementById("myElement");
    element.classList.add("active");
    console.log("Zoom is calling");
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border-1 border-gray-500">
      <div className="relative">
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
          {title}
        </span>
        <img
          src={require(`./${urlToImage}`)}
          id="myElement"
          onClick={onClickHandler}
          className="w-full h-48 object-cover cursor-pointer"
          alt={title}
        />
      </div>
      <div className="p-4 space-y-2">
        <h5 className="text-lg font-semibold">Course: {courseName}</h5>
        <p className="text-sm text-gray-600">From: {from}</p>
        <p className="text-sm text-gray-500">
          Date: {publishedAt}
          <a
            href={driveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-blue-500 underline"
          >
            View Certificate
          </a>
        </p>
      </div>
    </div>
  );
};

export default CertificateItem;
