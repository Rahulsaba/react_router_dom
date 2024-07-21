import { lazy } from "react";

//auth
const Login = lazy(() => import("@/auth/login"));
const Register = lazy(() => import("@/auth/register"));

//page
const Home = lazy(() => import("@/pages/home"));
const About = lazy(() => import("@/pages/about"));

//ui
const Links = lazy(() => import("@/ui/components/anchor"))
const Button = lazy(() => import("@/ui/components/button"))
const Loader = lazy(() => import("@/ui/components/loader"))
const Input = lazy(() => import("@/ui/components/input"))


export { Home, About, Links, Button, Loader, Login, Register ,Input}