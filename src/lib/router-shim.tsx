import React, { createContext, useContext, useEffect, useState } from 'react';

// Context to pass params from Astro to React components
const RouterContext = createContext<{ params: Record<string, string> }>({ params: {} });

export const RouterProvider = ({ children, params }: { children: React.ReactNode; params?: Record<string, string> }) => {
    return <RouterContext.Provider value={{ params: params || {} }}>{children}</RouterContext.Provider>;
};

export const useParams = <T extends Record<string, string | undefined> = Record<string, string>>() => {
    const { params } = useContext(RouterContext);
    return params as T;
};

// Simple Link component that uses standard anchor tags for MPA navigation
export const Link = ({
    to,
    children,
    className,
    ...props
}: {
    to: string;
    children: React.ReactNode;
    className?: string;
    [key: string]: any;
}) => {
    return (
        <a href={to} className={className} {...props}>
            {children}
        </a>
    );
};

export const NavLink = ({
    to,
    children,
    className,
    activeClassName = "active",
    ...props
}: {
    to: string;
    children: React.ReactNode;
    className?: string | ((props: { isActive: boolean }) => string);
    activeClassName?: string;
    [key: string]: any;
}) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsActive(window.location.pathname === to);
        }
    }, [to]);

    const resolvedClassName = typeof className === 'function'
        ? className({ isActive })
        : `${className || ''} ${isActive ? activeClassName : ''}`;

    return (
        <a href={to} className={resolvedClassName.trim()} {...props}>
            {children}
        </a>
    );
};

export const useNavigate = () => {
    return (to: string) => {
        if (typeof window !== 'undefined') {
            window.location.href = to;
        }
    };
};

export const useLocation = () => {
    const [location, setLocation] = useState({ pathname: '', search: '', hash: '' });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setLocation({
                pathname: window.location.pathname,
                search: window.location.search,
                hash: window.location.hash
            });
        }
    }, []);

    return location;
};
