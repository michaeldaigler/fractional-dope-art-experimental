import React from 'react';
import ethers from 'ethers';
import { MainPageContainer } from './Main.styles';
import Vault from '../../components/Vaults/Vault';
const MainPage: React.FC = () => {


    return (
        <>
            <MainPageContainer>
            <h1>Fractional</h1>
                <Vault />

            </MainPageContainer>
        </>
    )
}

export default MainPage;