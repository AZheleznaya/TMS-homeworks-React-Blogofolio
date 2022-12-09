import React, {FC} from 'react';
import {useSelector} from "react-redux";

import MainWrapper from "../common/MainWrapper/MainWrapper";
import AppRouter from "../AppRouter/AppRouter";
import ModalWindow from "../common/ModalWindow/ModalWindow";

import "../../styles/App.css";

const App: FC = () => {

    const {selectedCard} = useSelector((state: any) => state.selectedCard);

  return (
      <div className="App">
          <MainWrapper>
              <AppRouter />
          </MainWrapper>
          {!!selectedCard?.id && <ModalWindow />}
      </div>
  );
}

export default App;
