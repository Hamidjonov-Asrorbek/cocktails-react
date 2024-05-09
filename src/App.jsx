import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css'
import './App.css'
import Layout from './components/Layout';
import About from './pages/About';
import Home from './pages/Home';
import Details from './components/Details';
import NewsLetter from './pages/NewsLetter';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path = '/' element={<Layout />}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/details/:id' element={<Details />}></Route>
          <Route path='/newsletter' element={<NewsLetter />}></Route>
        </Route>
      </>
    )
  )
    return (
      <RouterProvider router={router}/>
    )
}

export default App
