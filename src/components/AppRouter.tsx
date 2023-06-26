import {priveRoutes, publicRoutes} from "../routes.ts";
import {Routes, Route, Navigate} from "react-router-dom";
import {CHAT_ROUTER, LOGIN_ROUTER} from "../utils/consts.ts";
import {useContext} from "react";
import {AppContext} from "../main.tsx";
import {useAuthState} from "react-firebase-hooks/auth";

const AppRouter = () => {
  const { auth } = useContext(AppContext)
  const [ user ] = useAuthState(auth)

  return user ?
    (
      <Routes>
        {priveRoutes.map(({path, Component}) =>
          <Route key={path} path={path} element={<Component/>}/>
        )}
        <Route path='*' element={<Navigate to={CHAT_ROUTER}/>}/>
      </Routes>
    )
    :
    (
      <Routes>
        {publicRoutes.map(({path, Component}) =>
          <Route key={path} path={path} element={<Component/>}/>
        )}
        <Route path='*' element={<Navigate to={LOGIN_ROUTER}/>}/>
      </Routes>
    )
};

export default AppRouter;