import Navigation from 'components/layout/navigation/Navigation';
import { Routes } from 'react-router-dom';
import { FC, ReactNode } from 'react';

interface MainPageProps {
    children: ReactNode;
}

const MainPage: FC<MainPageProps> = ({ children }) => {
    return (
        <div>
            <Navigation />
            <Routes>
                {children}
            </Routes>
        </div>
    );
};

export default MainPage;
