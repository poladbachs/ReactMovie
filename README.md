# React Movie

## Project Overview

**React Movie** is a movie search web application built using **React.js**. Users can search for movies, view relevant results, and click on a movie to be redirected to its IMDb page. The project showcases practical use of **React Hooks**, **Modern CSS**, and integrates external API services for real-time movie data fetching. The user interface is designed to be intuitive and responsive for a seamless experience across devices.

## Features

- **Movie Search**: Users can search for any movie by entering a title and view relevant results.
- **Random Keyword Search**: The app automatically searches for a random movie from a predefined list of keywords when the page loads.
- **Movie Redirection**: Users can click on a movie card to be redirected to its IMDb page.
- **Responsive Design**: A modern and clean interface that adapts to various screen sizes.
- **Error Handling**: Displays a message if no movies are found based on the search input.

## Technologies Used

- **React.js**
- **OMDb API** for fetching movie data
- **CSS**

## What I Did in This Project

In the **React Movie** project, I focused on implementing the following:

- **React Functional Components**:
  - Created functional components like `App` and `MovieCard` to structure the app efficiently.
  - Used React’s **Hooks** (`useState`, `useEffect`) for state and lifecycle management.

- **State Management and Hooks**:
  - Utilized `useState` to manage the search input and movie data.
  - Leveraged `useEffect` to trigger the random movie search when the page first loads.

- **API Integration with OMDb**:
  - Integrated the OMDb API for movie search functionality based on the user's input.
  - Implemented an **asynchronous function** using `async/await` to fetch movie data and handle the JSON response.
  - Ensured safe handling of API responses, including checking for null results and handling errors.

- **Search and Display Logic**:
  - Developed the ability for users to search for movies by entering a title and pressing "Enter" or clicking a search icon.
  - Implemented a random keyword generator that automatically searches for a movie upon initial load using predefined movie titles (e.g., "Batman", "Harry Potter").

- **Dynamic Movie Cards**:
  - Created a reusable `MovieCard` component that displays each movie's poster, title, and year.
  - Added click functionality that dynamically redirects users to the movie’s IMDb page based on its unique IMDb ID.

- **User Experience (UX) and Interface (UI)**:
  - Designed a **responsive and modern UI** using **CSS** to ensure a polished appearance across all devices.
  - Styled the search bar, movie cards, and implemented hover effects to improve interaction and engagement.
  
- **Error Handling**:
  - Displayed an error message ("No movies found") when the search did not return any results, improving the user experience.

## Demo

A demo video is included to showcase the core features of the **React Movie** app. The demo highlights the search functionality, random movie list display on load, and redirection to IMDb upon clicking a movie card.
