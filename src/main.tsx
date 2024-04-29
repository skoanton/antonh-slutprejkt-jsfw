import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root/Root";
import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import SearchResultPage from "./pages/SearchResultPage/SearchResultPage";
import BookPage from "./pages/BookPage/BookPage";
import ShelfFavoritesPage from "./pages/Shelf/ShelfFavoritesPage";
import ShelfReadPage from "./pages/Shelf/ShelfReadPage";
import ShelfReviewPage from "./pages/Shelf/ShelfReviewPage";
import AuthorPage from "./pages/AuthorPage/AuthorPage";
import { fetchApi } from "./services/fetchApi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
        loader: fetchApi,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/search/results",
        element: <SearchResultPage />,
      },
      {
        path: "/books/:bookId",
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
        path: "/shelf/read/review/:bookId",
        element: <ShelfReviewPage />,
      },
      {
        path: "/author/authorId",
        element: <AuthorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
