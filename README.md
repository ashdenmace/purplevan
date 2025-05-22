# React Website for VW Van Sale
This is a website showcasing a 1976 VW T2 Van named "Haze". Haze's owner would like to sell their van and wanted a website with all the details and photos on it.

## Features
- A contact page that features a form that will format and send an email to the owner's inbox using EmailJS. This is intended for users to express their interest in purchasing the van. 
- A detailed page of a Mechanical History document and background pictures.
- An Albums page, that includes 3 albums of the van in its current state, auto work, and celebrations that it's been apart of.
    - Using Amazon S3 Bucket to host 140+ images.
    - Using Amazon Lambda and API Gateway to create an array full of an album's images for the frontend fetch and display.
    - Each album can be viewed and navigated in a lightbox
- A home page showcasing some pictures, including some details about the van and accessories included.
- Not Found page if a user tries to visit a route that doesn't exist.

## API Documentation
You can only send GET requests to the API Gateway. Behind that the lambda will access the S3 bucket, create and send back an array of the requested photos in object form.

Photo Object Example: { src: "examplelink", key: file_name }
 
- /current - GET Request to /current will send back an array of current photos of Haze.
- /before - GET Request to /before will send back an array of before and during the autowork photos of Haze.
- /celebrations - GET Request to /celebrations will send back an array of photos of the van decorated during celebrations.

## Technology Used
- React and Vite
- Javascript
- CSS (and a little bit of bootstrap)
- Node.js
- Amazon S3
- Amazon Lambda
- Amazon API Gateway
- EmailJs

