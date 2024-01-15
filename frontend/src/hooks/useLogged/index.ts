import { useEffect, useState } from "react";
import StorageKeys from "src/enums/LocalStorage";
import { SessionStorage } from "src/interfaces";

export default function useLogged() {
  const [logged, setLogged] = useState<boolean>(false);
  const storage = localStorage.getItem(StorageKeys.session);

  useEffect(
    function () {
      let session: SessionStorage;
      if (storage) {
        session = JSON.parse(storage);
        setLogged(session.loggedIn);
      } else setLogged(false);
    },
    [storage],
  );

  console.log(logged);
  return { logged };
}
