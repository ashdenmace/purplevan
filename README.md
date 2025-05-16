# React Website for VW Van Sale
This is a website showcasing a 1978 VW Van named "Haze". Haze's owner would like to sell their van and wanted a website with all the details and photos on it.

## Features
- A contact page that features a form that will format and send an email to the owner's inbox using EmailJS. This is intended for users to express their interest in purchasing the van. 
- A detailed page of a Mechanical History document and background pictures.
- An Albums page, that includes 3 albums of the van in its current state, auto work, and celebrations that it's been apart of.
    - Using Amazon S3 Bucket to host 140+ images.
    - Using Amazon Lambda and API Gateway to create an array full of an album's images for the frontend fetch and display.
    - Each album can be viewed and navigated in a lightbox
- A home page showcasing some pictures, including some details about the van and accessories included.
- Not Found page if a user tries to visit a route that doesn't exist.

## Technology Used
- React and Vite
- Javascript
- CSS (little bit of bootstrap)
- Node.js
- Amazon S3
- Amazon Lambda
- Amazon API Gateway
- EmailJs

