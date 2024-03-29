import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import {collection,getCountFromServer, query, where} from "firebase/firestore";

export default function useGetCount(collec, status) {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        const coll = collection(db, collec);
        const q = query(coll, where('status', '==', status))
        async function count(){
            const snapshot = await getCountFromServer(q);
            setCount(snapshot.data().count)
        }
        count()
    },[])

    return [count]
}
