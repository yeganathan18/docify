import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from "react";
import ListItem from '../../components/Profile/ListItem';
import { fetchProfile, fetchPublications } from '../../src/frontend/utils/api';


export default function Profile() {
    const [profile, setProfile] = useState()
    const [publications, setPublications] = useState()
    const router = useRouter();
    const {id} = router.query;

    useEffect(() =>  {
        async function fetchData() {
            try {
                if (typeof id === 'string'){
                    fetchProfile(id).then(setProfile);

                    fetchPublications(id, 10).then(setPublications);
                } 
            } catch (err) {
                console.log("error ", err);
            }
        }
        fetchData();
      }, [id])

    return <div>
        <div>
        {id} {profile && profile.handle}
        </div>
        <div>
            {publications && console.log(publications)}
            {publications && publications.map((pub, index) => (
              <ListItem key={index} data={pub.metadata}/>
            ))}
        </div>
        </div>;
}