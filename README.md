
# RecipeApp

RecipeApp is a modern and responsive web application for discovering and sharing recipes. Built with React, Next.js, Firebase, and Tailwind CSS, it provides a seamless and enjoyable user experience for food enthusiasts.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Recipe List Display**: Browse through a list of recipes with thumbnails and brief descriptions.
- **Recipe Details Page**: View detailed information about each recipe, including ingredients, preparation steps, and nutritional information.
- **Search Functionality**: Find recipes by name or keywords, with advanced filters for ingredients, meal types, and dietary preferences.
- **User Authentication**: Register and log in with email/password or social account (Google).
- **Favorites**: Save recipes to your favorites list for easy access.
- **Comments and Ratings**: Leave comments and rate recipes.
- **Shopping List**: Add recipe ingredients to a shopping list.
- **Recipe Submission**: Submit your own recipes to the app.
- **Notifications**: Receive notifications about new recipes, comments, and updates.
- **Responsive Design**: Fully responsive layout that works on both desktop and mobile devices.

## Tech Stack

- **Frontend**: React, Next.js, Tailwind CSS, TypeScript
- **Backend**: Firebase (Firestore, Authentication, Storage, Cloud Functions)
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **Hosting**: Firebase Hosting

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js and npm installed
- Firebase account

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/chinyereunamba/recipe-app.git
    cd recipe-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up Firebase**:
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Enable Firestore, Authentication, and Storage in your Firebase project.
   - Create a `.env.local` file in the root directory and add your Firebase configuration:
    ```env
    NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
    ```

### Usage

1. **Run the development server**:
    ```bash
    npm run dev
    ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

2. **Build for production**:
    ```bash
    npm run build
    npm start
    ```

## Project Structure

```
src/
|-- components/
|   |-- RecipeCard.tsx
|   |-- RecipeDetails.tsx
|   |-- RecipeList.tsx
|   |-- SearchBar.tsx
|   |-- UserAuth.tsx
|   |-- Favorites.tsx
|   |-- Comments.tsx
|   |-- ShoppingList.tsx
|   |-- RecipeSubmission.tsx
|   |-- Notifications.tsx
|   |-- MealPlanner.tsx
|-- services/
|   |-- api.ts
|-- store/
|   |-- actions.ts
|   |-- reducers.ts
|   |-- store.ts
|-- pages/
|   |-- index.tsx
|   |-- recipes.tsx
|   |-- favorites.tsx
|   |-- submit.tsx
|   |-- profile.tsx
|-- styles/
|   |-- globals.css
|-- public/
|   |-- images/
|-- utils/
|   |-- firebase.ts
|-- App.tsx
|-- index.tsx
|-- README.md
```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
