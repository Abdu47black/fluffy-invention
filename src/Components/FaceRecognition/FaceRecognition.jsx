import React from "react";

const FaceRecognition = ({imageurl}) => {
	return (
		<div className="center">
		<img src={imageurl} alt="https://samples.clarifai.com/metro-north.jpg" style={{ height: 400, width: 400 }}  />

		</div>
	)
};
export default FaceRecognition;
// https://samples.clarifai.com/metro-north.jpg