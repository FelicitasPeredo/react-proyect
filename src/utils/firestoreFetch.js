import db from '../utils/firebaseConfig';
import { collection, getDocs, orderBy, doc, where, query, getDoc } from "firebase/firestore";

export const firebaseFetch = async (id) => {
    let q;
    if (id) {
        q = query(collection(db, "products"), where('categoria', '==', id))
    }
    else {
        q = query(collection(db, "products"), orderBy('name'))
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
      id: document.id,
      ...document.data()
    }));
    return dataFromFirestore
  }

  export const firestoreFetchOne = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        return {
            id: id,
            ...docSnap.data()
        }
    }
    else {
        console.log("No such doc.")
    }
  }