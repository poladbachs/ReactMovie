# React Movie

## Project Overview

**React Movie** is a movie search web application built using **React.js**. Users can search for movies, view relevant results, and click on a movie to be redirected to its IMDb page. The project showcases practical use of **React Hooks**, **Modern CSS**, and integrates external API services for real-time movie data fetching. The user interface is designed to be intuitive and responsive for a seamless experience across devices.

## Demo

A demo video is included to showcase the core features of the **React Movie** app. The demo highlights the search functionality, random movie list display on load, and redirection to IMDb upon clicking a movie card.

![ReactMovie](https://github.com/user-attachments/assets/33f52e28-e98d-4024-8586-96ccda15ed76)

## Features

- **Movie Search**: Users can search for any movie by entering a title and view relevant results.
- **Random Keyword Search**: The app automatically searches for a random movie from a predefined list of keywords when the page loads.
- **Movie Redirection**: Users can click on a movie card to be redirected to its IMDb page.
- **Responsive Design**: A modern and clean interface that adapts to various screen sizes.
- **Search Persistence**: The app uses **localStorage** to save the last search term, allowing users to refresh the page and still see their previous search results.
- **Session Control**: The app utilizes **sessionStorage** to ensure that when a new tab is opened, a random keyword is used for the initial search. This avoids displaying the last search result (stored in **localStorage**) in the new tab, making each new session start fresh.
- **Error Handling**: Displays a message if no movies are found based on the search input.

## Technologies Used

- **React.js**
- **OMDb API** for fetching movie data
- **CSS**
- **localStorage** for saving search results
- **sessionStorage** for managing new tab sessions with random keyword searches

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

- **Search Persistence Using localStorage**:
  - The last searched movie term is saved in **localStorage**, so if the user refreshes the page, the previous search results are restored.
  - This ensures the user's search history is maintained across reloads.

- **Session Control Using sessionStorage**:
  - A random keyword search is triggered when the app is loaded in a **new tab**, preventing the last search term from **localStorage** (e.g., "Peter Pan") from appearing again in the new tab.
  - This ensures each new session has a fresh search experience without overwriting the stored search results from the previous session.

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
