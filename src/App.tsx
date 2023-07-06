import { Route, Routes } from 'react-router-dom';

import Menu from "./common/el/menu/index.tsx";
import HomePage from './pages/homePage/view/page_home.tsx';
import CalendarPage from './pages/calendarPage/view/page_calendar.tsx';
import TasksPage from './pages/tasksPage/view/page_tasks.tsx';
import ProfilePage from './pages/profilePage/view/page_profile.tsx';
import Header from './common/el/header/index.tsx';

function App() {
  return (
    <div className="main-container">
      <Menu />

      <div className="content-container">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
