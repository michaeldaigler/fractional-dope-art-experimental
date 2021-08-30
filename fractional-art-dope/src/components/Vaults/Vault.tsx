import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import VaultContract from '../../../contracts/contracts/src/ERC721TokenVault.sol/TokenVault.json';
import {StyledVault, VaultContainer, VaultRow} from './Vault.styles'
const Vault: React.FC = () => {
    const [vault, setVaults] = useState([])
    const getVaults = async () => {
        // if (typeof window.etherem !== 'undefined') {
        //     const provider = new ethers.providers.Web3Provider(window.ethereum)
        //     const vault = await new ethers.Contract(VaultContract.address, VaultContract.abi)
        // }
        }


    useEffect(() => {

    },[])

    return (
        <div>
            <VaultContainer>
                <h1>Vaults</h1>

                {[1, 2, 3].map((el) => {
                    return (
                        <VaultRow>
                            {[1, 2, 3].map((v) => {
                                return (
                                    <StyledVault />
                                )
                            })}
                        </VaultRow>

                    )
                })}
            </VaultContainer>
        </div>
    )
}

export default Vault;