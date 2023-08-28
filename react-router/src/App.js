import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./layouts/RootLayout";
import Faq from "./help/Faq";
import ContactUs, { contactAction } from "./help/ContactUs";
import HelpLayout from "./layouts/HelpLayout";
import NotFound from "./pages/NotFound";
import CareerLayout from "./layouts/CareerLayout";
import Careers from "./pages/careers/Careers";
import { careersLoader } from "./pages/careers/Careers";
import CareerDetail, { careerDetailLoader } from "./pages/careers/CareerDetail";
import CareersError from "./pages/careers/CareersError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<ContactUs />} action={contactAction} />
      </Route>
      <Route
        path="careers"
        element={<CareerLayout />}
        errorElement={<CareersError />}
      >
        <Route index loader={careersLoader} element={<Careers />} />
        <Route
          path=":id"
          loader={careerDetailLoader}
          element={<CareerDetail />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
