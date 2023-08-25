'use client';

import { usePathname, useSelectedLayoutSegments } from "next/navigation";
import LayoutStructure from "components/layout-structure";
import SegmentBreadcrumbs from "@/components/segment-breadcrumbs";
import {RECORDS_MAP, findIdByPathname, SEGMENT_TITLES_MAP } from './[id]/data';


export default function Layout({children}) {
    
    const segments = useSelectedLayoutSegments();
    const pathname = usePathname();
    const id = findIdByPathname(pathname);
    const {background} = RECORDS_MAP[id];
    
    return (
      <LayoutStructure 
          background={background} 
          title={
            <SegmentBreadcrumbs 
              segments={segments}
              segmentTitlesMap={SEGMENT_TITLES_MAP}
              startingSegment='/record'
            />
          }
          >
            <div className="flex flex-col items-center"> 
              {children} 
            </div>

      </LayoutStructure>
    )
  }