import { Route, Routes } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import { BlogContentPage, Homepage } from './pages';
import AboutPage from './pages/AboutPage';

export default function App() {
  const {
    loading: blogLoading,
    data: blogs,
    error: blogError,
  } = useFetch('http://localhost:1337/api/blogs?populate=*');
  const {
    loading: authorLoading,
    data: authors,
    error: authorError,
  } = useFetch('http://localhost:1337/api/authors?populate=*');

  if (blogLoading || authorLoading) return <p>Loading...</p>;
  if (blogError || authorError) return <p>Error!</p>;

  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage blogs={blogs} />} />
        <Route path='/blog/:id' element={<BlogContentPage blogs={blogs} />} />
        <Route path='/about' element={<AboutPage authors={authors} />} />
      </Routes>
    </div>
  );
}
