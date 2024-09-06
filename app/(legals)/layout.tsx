// External packages
import React from 'react';
import { twMerge } from 'tailwind-merge';

// Components
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Layout, LayoutRow, LayoutColumn } from '@/components/Layout';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header headerTheme="dark" />
      <Layout>
        <LayoutRow>
          <LayoutColumn span={12} lgOffset={2} lgSpan={6}>
            {children}
          </LayoutColumn>
        </LayoutRow>
      </Layout>
      <Footer />
    </div>
  );
}
