import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root/Root";
import HomePage from "./pages/HomePage/HomePage";
import SearchResultPage from "./pages/SearchResultPage/SearchResultPage";
import BookPage from "./pages/BookPage/BookPage";
import ShelfFavoritesPage from "./pages/Shelf/ShelfFavoritesPage";
import ShelfReadPage from "./pages/Shelf/ShelfReadPage";
import GlobalProvider from "./Context/GlobalProvider";
import ReviewForm from "./pages/Shelf/components/ReviewForm";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/search/:searchParam",
        element: <SearchResultPage />,
      },
      {
        path: "/book/:bookId",
        element: <BookPage />,
      },
      {
        path: "/shelf/favorites",
        element: <ShelfFavoritesPage />,
      },
      {
        path: "/shelf/read",
        element: <ShelfReadPage />,
      },
      {
        path: "book/review/:bookId",
        element: <ReviewForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </React.StrictMode>
);
