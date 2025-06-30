import { Routes, Route } from "react-router";
import HomePage from "../pages/Home";
import BookListPage from "../pages/Books";
import BookInfoPage from "../pages/BookInfo";
import Contact from "../pages/ContactPage";
import Orders from "../pages/Orders";
import UserDashboard from "../pages/UserDashboard";
import AccountPage from "../pages/Accounts";
import PublishPage from "../pages/Publish/index.js";
import OrderHistory from "../pages/OrdersHistory";

const RouterComp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/books" element={<BookListPage />} />
      <Route path="/book/:id" element={<BookInfoPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/orders" element={<Orders />} />

      <Route path="/profile" element={<UserDashboard />}>
        <Route path="account" element={<AccountPage />} />
        <Route path="publish" element={<PublishPage />} />
        <Route path="orders" element={<OrderHistory />} />
        <Route index element={<div>Select a section from the sidebar.</div>} />
      </Route>
    </Routes>
  );
};

export default RouterComp;
