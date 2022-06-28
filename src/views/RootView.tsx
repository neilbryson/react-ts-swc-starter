import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const RootView = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Hello</div>} />
      </Routes>
    </BrowserRouter>
  );
};
