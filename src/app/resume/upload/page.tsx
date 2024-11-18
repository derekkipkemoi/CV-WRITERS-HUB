import * as React from 'react';
import type { Metadata } from 'next';
import { config } from '@/config';
import MainUploadSection from './main-upload-section';
import { OrderObjectProvider } from '@/contexts/order-context';


export const metadata = { title: `App | Upload | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {

  return (
    <div>
        <MainUploadSection />
    </div>
  );
}