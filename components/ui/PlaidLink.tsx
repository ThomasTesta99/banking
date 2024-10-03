import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './button'
import { PlaidLinkOptions, PlaidLinkOnSuccess } from 'react-plaid-link'
import { useRouter } from 'next/router';

const PlaidLink = ({user, variant}: PlaidLinkProps) => {
    const router = useRouter()
    const [token, setToken] = useState('');

    useEffect(() => {
        const getLinkToken = async () => {
           // const data = await createLinkToken(user);
           // setToken(data?.linkToken);
        }

        getLinkToken();
    }, []);

    const onSuccess = useCallback<PlaidLinkOnSuccess>(async(public_token : String) => {
        // await exchangePublicToken({
        //     publicToken: public_token,
        //     user,
        // })

        router.push('/');
    }, [user]);

    const config: PlaidLinkOptions = {
        token,
        onSuccess,

    }
  
  return (
    <>
        {variant === 'primary' ? (
            <Button
                className = "plaidlink-primary">
                Connect Bank
            </Button>
        ): variant === 'ghost' ? (
            <Button>
                Connect bank
            </Button>
         ): (
            <Button>
                Connect bank
            </Button>
         )}
    </>
  )
}

export default PlaidLink
