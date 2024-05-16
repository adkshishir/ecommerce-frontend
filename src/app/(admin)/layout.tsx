import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Welcome to Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return <>
        {children}
    </>;
}
