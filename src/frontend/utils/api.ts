import { createClient as createUrqlClient } from 'urql'
import {fetchProfileQuery, fetchPublicationsQuery} from './queries'


export const basicClient = createUrqlClient({
    url: 'https://api-mumbai.lens.dev/playground',
  });

  export async function fetchProfile(profileId: string) {
    try {
    
        const returnedProfile = await basicClient.query(fetchProfileQuery, { profileId }).toPromise();
        return returnedProfile.data.profile;
      } catch (err) {
        console.log('error fetching profile...', err)
      }
  }
  
  export async function fetchPublications(id:string, limit:number) {
    try {
        const returnedPublications = await basicClient.query(fetchPublicationsQuery, { id }).toPromise();
        return returnedPublications.data.publications.items;
      } catch (err) {
        console.log('error fetching profile...', err)
      }
  }