# GadgetHeaven

✨ Your go-to destination for the latest and greatest gadgets.

## Overview

GadgetHeaven is an e-commerce platform designed for gadget enthusiasts. The website is built based on a detailed Figma design and features a structured navigation bar, product categories, and individual product detail pages. Key functionalities include a shopping cart, a wishlist system, and product filtering, all managed through the Context API with optional LocalStorage for data persistence.

## Live Website Link

[Live Demo](#)  <!-- Replace with actual link -->

## Requirement Document Link

[Requirement Document](#)  <!-- Replace with actual link -->

## Features

1. **Structured Navigation**: A responsive navbar with links to the Dashboard, Stats, and other essential pages.
2. **Product Categories**: Sidebar navigation for different gadget categories such as computers, phones, smartwatches, chargers, and power banks.
3. **Gadget Cards**: Display of gadgets in a card grid format, showing product images, names, prices, and a 'Details' button.
4. **Cart and Wishlist Management**: Users can add items to their cart or wishlist, with real-time updates and notifications.
5. **Statistics Page**: A composed chart displaying price vs. product name, with scatter data showing ratings.

## React Fundamental Concepts Used

- **Components**: Functional and class components for building UI.
- **State Management**: Context API for managing global state (cart and wishlist).
- **Routing**: React Router for navigation between different pages.
- **Hooks**: `useEffect`, `useState`, and `useLocation` for managing side effects and component state.
- **Conditional Rendering**: Displaying components based on user interactions and state.

## Data Management

- **Context API**: Used for managing the cart and wishlist state across the application.
- **LocalStorage**: Optional implementation for data persistence, allowing users to retain their cart and wishlist items even after refreshing the page.

## Installation

To run the project locally, follow these steps:

1. Will be updated soon

## Usage

- **Home Page**: Features a banner, categories sidebar, and gadget cards.
- **Details Page**: Displays detailed information about each product, including an 'Add to Cart' and 'Add to Wishlist' button.
- **Dashboard Page**: Contains tabs for viewing cart and wishlist items, with sorting functionality for cart items.
- **404 Page**: A user-friendly error page for non-existent routes.

## Toast Notifications

- **Adding to Cart**: Displays a success message when an item is added to the cart.
- **Adding to Wishlist**: Displays a different message when an item is added to the wishlist.

## Challenge Tasks

- Implemented dynamic background colors for different pages using the `useLocation()` hook.
- Modal confirmation for purchases, with cart reset functionality.
- Favicon and dynamic titles for each page.

## Miscellaneous

- The application handles edge cases, such as price limits and error prevention on page reloads.
- Users cannot add the same item to the wishlist more than once.
- The application limits the total cart value to $1000.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.