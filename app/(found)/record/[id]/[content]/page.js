import { RECORDS, CONTENT_PATHS, RECORDS_MAP } from '../data';
import Player from '../player';

export const dynamicParams = false;

export async function generateStaticParams() {
  const recordSegmentMaps = [];

  RECORDS.forEach(record => {
    CONTENT_PATHS.forEach(contentPath => {
      recordSegmentMaps.push({ id: record.id, content: contentPath })
    })
  });
  console.log(`recordSegmentMaps`, recordSegmentMaps);
  return recordSegmentMaps;

}

export default function Page({ params: { id, content } }) {
  const contentJsx = RECORDS_MAP[id][content];
  const { Embed } = RECORDS_MAP[id];

  return (
    <>
      <Player embed={<Embed />} />
      <br />
      {contentJsx}
    </>
  )
}