import { lazy } from "react";

//page
const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../pages/about"));

//ui
const Links = lazy(() => import("../ui/components/anchor"))
const Button = lazy(() => import("../ui/components/button"))


export { Home, About, Links, Button }